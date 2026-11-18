import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')

  const handleIncrease = () => {
    setCount(count + 1)
  }

  const handleDecrease = () => {
    setCount(count - 1)
  }

  const handleReset = () => {
    setCount(0)
  }

  const handleNameChange = (event) => {
    setName(event.target.value)
  }

  return (
    <div className="app-container">
      {/* Main Heading */}
      <h1 className="main-heading">My First React App</h1>

      {/* Short Paragraph About Yourself */}
      <p className="about-text">
        Hi! My name is Habeeb. I am learning React and building my first
        interactive web application. I am excited to learn how to create
        modern websites!
      </p>

      {/* Counter Section */}
      <div className="counter-box">
        <h2>Counter</h2>
        <h1 className="counter-number">{count}</h1>

        <div className="button-group">
          <button onClick={handleIncrease} className="btn increase-btn">
            Increase
          </button>
          <button onClick={handleDecrease} className="btn decrease-btn">
            Decrease
          </button>
          <button onClick={handleReset} className="btn reset-btn">
            Reset
          </button>
        </div>

        {/* Conditional Rendering - Even / Odd Message */}
        {count % 2 === 0 ? (
          <p className="message even">Even number</p>
        ) : (
          <p className="message odd">Odd number</p>
        )}
      </div>

      {/* Input Field */}
      <div className="input-box">
        <label htmlFor="name-input">Enter your name:</label>
        <input
          id="name-input"
          type="text"
          placeholder="Type your name here..."
          value={name}
          onChange={handleNameChange}
        />
      </div>

      {/* Personalized Greeting - Only if name is not empty */}
      {name !== '' && (
        <h2 className={name ? 'greeting' : ''}>
          Hello, {name}! Welcome to my React app.
        </h2>
      )}

      {/* Footer with current year */}
      <footer className="footer">
        <p>© {new Date().getFullYear()} - My First React App</p>
      </footer>
    </div>
  )
}

export default App