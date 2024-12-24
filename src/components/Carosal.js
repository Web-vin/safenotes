import React from 'react'

const Carosal = () => {
  return (
    <div>
      <center>
      <div id="carouselExampleInterval" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active" data-bs-interval="10000">
    <img src={require("./img/hn.webp")} height={600} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        <h5>let's write your imagination through words</h5>
        
      </div>
   
    </div>
    <div class="carousel-item" data-bs-interval="2000">
    <img src={require("./img/2.jfif")} height={600} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>
    </div>
    <div class="carousel-item">
    <img src={require("./img/3.jfif")} height={600} class="d-block w-100" alt="..."/>
      <div class="carousel-caption d-none d-md-block">
        
      </div>    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>
</center>
    </div>
  )
}

export default Carosal
