import React, { useState } from 'react';

function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
  };

  return (
    <section className="newsletter-section">
      <div className="newsletter-content">
        <h3 className="newsletter-title">
          Хотите получать еженедельную рассылку с немецким языком?
        </h3>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="alja8585@gmail.com"
            className="newsletter-input"
          />
          <button type="submit" className="newsletter-button">
            ПОДПИСАТЬСЯ
          </button>
        </form>
      </div>
    </section>
  );
}

export default Newsletter; 