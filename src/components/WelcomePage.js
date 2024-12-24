// src/components/WelcomePage.js
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

function WelcomePage() {
  return (
    <div className="welcome-container">
      <div className="welcome-box">
        <h1>Welcome to <span>NoteBook</span> 📓</h1>
        <p>Your digital space for ideas, notes, and creative thinking.</p>
        <div className="buttons">
          <Link to="/signup" className="button primary">Create a New Note</Link>
          <Link to="/login" className="button secondary">Explore Your Notes</Link>
          <Link to="/signup" className="button tertiary">Customize Your Workspace</Link>
        </div>
        <div className="tip-box">
          <h3>Daily Tip:</h3>
          <p><em>Pro tip:</em> Use <code>#hashtags</code> to categorize your thoughts, making them easy to find later.</p>
        </div>
      </div>
    </div>
  );
}

export default WelcomePage;
