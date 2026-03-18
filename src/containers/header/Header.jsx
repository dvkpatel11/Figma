import React from 'react'
import './header.css';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';

const Header = () => {
  return (
    <div className="gpt3__header section__padding" id="home">
      <div className="gpt3__header-content">
        <div className="gpt3__header-badge">
          <span className="gpt3__header-badge__dot" />
          <span>Now with GPT-3 Powered AI</span>
        </div>
        <h1 className="gradient__text">
          The Future of&nbsp;AI Starts&nbsp;Here.
        </h1>
        <p>
          Explore the possibilities of modern artificial intelligence. Build smarter applications, automate workflows, and push the boundaries of what's possible with OpenAI's GPT-3.
        </p>

        <div className="gpt3__header-actions">
          <a href={`${process.env.PUBLIC_URL}/dancing-bot.html`} className="gpt3__header-btn gpt3__header-btn--primary">
            <span className="gpt3__header-btn__icon">&#9733;</span>
            Meet Dancing Clawd
          </a>
          <a href="#features" className="gpt3__header-btn gpt3__header-btn--outline">
            Explore Features
          </a>
        </div>

        <div className="gpt3__header-content__people">
          <img src={people} alt="people" />
          <p>1,600 people requested access in the last 24 hours</p>
        </div>
      </div>
      <div className="gpt3__header-image">
        <div className="gpt3__header-image__glow" />
        <img src={ai} alt="ai" />
      </div>
    </div>
  )
}

export default Header
