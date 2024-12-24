import './style.css';
//import NoteContext from '../context/notes/NoteContext'
//import video from '../assets/videoplayback.mp4'
import React ,{useState} from 'react';
//import {Link} from 'react-router-dom'

const About = () => {
  // eslint-disable-next-line
  
  
    const [activeSection, setActiveSection] = useState(null);

    const toggleSection = (section) => {
        setActiveSection(activeSection === section ? null : section);
    };

    return (
        <div className="container">
            <h1>About Safenotes</h1>
            
            <div className="section">
                <h2 onClick={() => toggleSection('mission')}>Our Mission</h2>
                {activeSection === 'mission' && (
                    <p>
                        At Safenotes, our mission is to provide a seamless and intuitive note-taking solution that enhances productivity and creativity. We believe that your ideas deserve the best platform, and we are dedicated to delivering just that.
                    </p>
                )}
            </div>
            
            <div className="section">
                <h2 onClick={() => toggleSection('features')}>Key Features</h2>
                {activeSection === 'features' && (
                    <ul>
                        <li><strong>Easy Organization:</strong> Create multiple notebooks and sections to keep your notes organized. Use tags and categories to quickly find and manage your notes.</li>
                        <li><strong>Powerful Editing Tools:</strong> Format your notes with bold, italics, bullet points, and more. Write with a stylus or your finger, and convert your handwriting to text. Record audio notes and transcribe them into text.</li>
                        <li><strong>Multimedia Support:</strong> Insert images and videos to enrich your notes. Attach PDFs, Word documents, and other files to your notes.</li>
                        <li><strong>Sync and Access Anywhere:</strong> Sync your notes across multiple devices with our secure cloud storage. Access and edit your notes even without an internet connection.</li>
                        <li><strong>Collaboration and Sharing:</strong> Work on notes with others in real-time. Share your notes via links, email, or social media.</li>
                        <li><strong>Security and Privacy:</strong> All your notes are encrypted to ensure your data is secure. Manage who can view or edit your notes with robust privacy settings.</li>
                    </ul>
                )}
            </div>
            
            <div className="section">
                <h2 onClick={() => toggleSection('whyChoose')}>Why Choose Safenotes?</h2>
                {activeSection === 'whyChoose' && (
                    <div>
                        <p>User-Friendly Interface: Intuitive design that’s easy to navigate.</p>
                        <p>Cross-Platform Compatibility: Available on iOS, Android, Windows, and Mac.</p>
                        <p>Regular Updates: We continually update Safenotes with new features and improvements based on user feedback.</p>
                    </div>
                )}
            </div>
            
            
        </div>
      
  );
}

export default About
