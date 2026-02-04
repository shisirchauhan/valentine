import { useState } from 'react'
import './App.css'

function App() {
  const [noCount, setNoCount] = useState(0)
  const [yesPressed, setYesPressed] = useState(false)
  const [noPosition, setNoPosition] = useState({ top: '50%', left: '50%' })
  const [showError, setShowError] = useState(false)
  const [shake, setShake] = useState(false)

  const yesButtonSize = 100 + noCount * 30
  
  const phrases = [
    "NO 🤨",
    "Wait—",
    "Be serious.",
    "Try again.",
    "Wrong answer.",
    "ERROR 404",
    "Access Denied",
    "System Malfunction",
    "Absolutely Not",
    "Nice try",
    "Nope.exe",
    "Are you sure about that?",
    "THINK CAREFULLY",
    "Last warning",
    "Stop it.",
    "I'm watching you 👁️",
    "Still watching 👀",
    "You can't escape",
    "This is embarrassing",
    "Why are you like this?",
    "I have screenshots 📸",
    "Your IP: 127.0.0.1",
    "Mom would be disappointed",
    "Just give up already",
    "You're making this worse",
    "The correct answer is YES",
    "Listen to your heart ❤️",
    "Bad decision after bad decision",
    "I'm not mad, just disappointed",
    "Okay now you're just being rude",
    "THIS IS YOUR FINAL CHANCE",
    "I will remember this",
    "You're going to regret this",
    "...seriously?",
    "I can do this all day",
    "You realize I made this for YOU right?",
    "Choose wisely 🔮",
    "The universe is judging you",
    "Even the computer thinks you're wrong",
    "💔 Heart.exe has stopped working",
    "This is a violation of the Geneva Convention",
  ]

  const errorMessages = [
    "⚠️ CRITICAL ERROR: Choice 'NO' not found in system",
    "🚨 WARNING: Emotional damage detected",
    "❌ ERROR 404: Rejection not available",
    "⛔ SYSTEM ALERT: Wrong answer detected",
    "🔥 This action has been blocked for your safety",
  ]

  const handleNoClick = () => {
    setNoCount(noCount + 1)
    setShake(true)
    setTimeout(() => setShake(false), 500)
    
    // Show random error message
    if (noCount >= 2) {
      setShowError(true)
      setTimeout(() => setShowError(false), 2000)
    }
    
    // Move the No button to a random position
    const newTop = Math.random() * 80 + 10
    const newLeft = Math.random() * 80 + 10
    setNoPosition({ top: `${newTop}%`, left: `${newLeft}%` })
  }

  const handleYesClick = () => {
    setYesPressed(true)
  }

  if (yesPressed) {
    return (
      <div className="container celebration-bg">
        <div className="celebration">
          <div className="glitch-text">CORRECT ANSWER 💖</div>
          <h2 className="celebration-subtitle">Congratulations,</h2>
          <h2 className="celebration-subtitle">you are now my Valentine.</h2>
          <p className="smug-text">I knew you had taste 😌</p>
          
          <div className="confetti">
            {[...Array(50)].map((_, i) => (
              <div 
                key={i} 
                className="confetti-piece"
                style={{
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 3}s`,
                  backgroundColor: ['#ff1744', '#ff6b9d', '#ffc6d9', '#fff', '#ffeb3b'][Math.floor(Math.random() * 5)]
                }}
              />
            ))}
          </div>
          
          <div className="hearts">
            {[...Array(30)].map((_, i) => (
              <div key={i} className="heart" style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`,
                fontSize: `${Math.random() * 2 + 1}rem`
              }}>💖</div>
            ))}
          </div>
          
          <div className="sparkles">
            {[...Array(20)].map((_, i) => (
              <div key={i} className="sparkle" style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 2}s`
              }}>✨</div>
            ))}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className={`container ${shake ? 'shake' : ''}`}>
      {showError && (
        <div className="error-popup">
          {errorMessages[Math.floor(Math.random() * errorMessages.length)]}
        </div>
      )}
      
      <div className="proposal-box">
        <h1 className="title dramatic">Will you be my Valentine?</h1>
        
        {noCount > 3 && (
          <p className="warning-text">⚠️ System detecting poor life choices ⚠️</p>
        )}
        
        <div className="button-container">
          <button 
            className="yes-button pulse"
            style={{ 
              fontSize: `${yesButtonSize}%`,
              padding: `${20 + noCount * 5}px ${50 + noCount * 10}px`
            }}
            onClick={handleYesClick}
          >
            YES 😍
          </button>
          <button 
            className={`no-button ${noCount > 5 ? 'glitch' : ''}`}
            style={{
              position: noCount > 0 ? 'absolute' : 'relative',
              top: noPosition.top,
              left: noPosition.left,
              transform: 'translate(-50%, -50%)',
              opacity: Math.max(0.3, 1 - noCount * 0.05)
            }}
            onClick={handleNoClick}
          >
            {phrases[Math.min(noCount, phrases.length - 1)]}
          </button>
        </div>
        
        {noCount >= 8 && (
          <p className="desperate-text">Please... I made this whole website for you 🥺</p>
        )}
      </div>
    </div>
  )
}

export default App
