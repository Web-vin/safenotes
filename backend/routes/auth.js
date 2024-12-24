const express = require('express')
const router = express.Router();
const User = require('../models/User')
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const JWT_SECRET = "vinayakishandsome"
const fetchuser  = require('../middleware/Fetchuser')

//create a using post "api/auth". Does'nt require auth
router.post('/',
  // username must be an email
  body('name','Enter a valid name').isLength({min:5}),
  // password must be at least 5 chars long
  body('email','enter a valid email').isEmail(), 
  body('password','password atleast 5 character').isLength({ min:5}), 
  async (req, res)=>{
    let success = false;
   /* console.log(req.body)
    const user = User(req.body)
    user.save()
    res.send(req.body)*/
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ success, errors: errors.array() });
    }
    try{
    let user  = await User.findOne({email: req.body.email})
    if(user){
       return res.status(400).json({success, error: "sorry user already exists"})
    }
    
    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt)
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data = {
        user:{
          id:user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET)
      console.log({authtoken})



     // res.json(user)
       success = true
       res.json({success, authtoken})
    }catch(error){
        console.log(error)
        res.status(500).send("some error occured")
        }  
})



// ROUTE 2: Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', 'Password cannot be blank').exists(),
], async (req, res) => {
  let success = false;
  // If there are errors, return Bad request and the errors
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { email, password } = req.body;
  try {
    let user = await User.findOne({ email });
    if (!user) {
      success = false
      return res.status(400).json({ error: "Please try to login with correct credentials" });
    }

    const passwordCompare = await bcrypt.compare(password, user.password);
    if (!passwordCompare) {
      success = false
      return res.status(400).json({ success, error: "Please try to login with correct credentials" });
    }

    const data = {
      user: {
        id: user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    success = true;
    res.json({ success, authtoken })

  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }


});


//get user detail login using user detail
router.post('/getuser', fetchuser, async (req, res) => {
try {
  const userId = req.user.id;
  const user = await User.findById(userId).select("-password")
  res.send(user)
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
});

module.exports = router;