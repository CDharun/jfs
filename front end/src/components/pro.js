import React, { useState } from 'react';
import '../asset/pro.css';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';

const PremiumSubscriptionPage = () => {
  const [plan, setPlan] = useState('basic');
  const [subscribed, setSubscribed] = useState(false);

  const handlePlanChange = (event) => {
    setPlan(event.target.value);
  };

  const handleSubscribe = () => {
    // Simulating subscription logic
    // In a real application, this function would handle API calls or other subscription-related actions
    console.log('Subscribed to', plan);
    setSubscribed(true);
  };

  return (
    <div className="container">
      <div className='incon'>
      <h2 className="heading">Choose a Premium Subscription Plan</h2>

      <div className='pro'>
        <label className='i1'>
          <input
            type="radio"
            value="basic"
            checked={plan === 'basic'}
            onChange={handlePlanChange}
          />
          Basic Plan ($9.99/month)
          <p>
            <ul type="none">
              <li>Ad-free music listening</li>
              <li>Download to listen offline</li>
            </ul>
          </p>
          <div className='sub'>
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </label>
      </div>

      <div className='pro'>
        <label className='i2'>
          <input
            type="radio"
            value="pro"
            checked={plan === 'pro'}
            onChange={handlePlanChange}
          />
          Pro Plan ($19.99/month)
          <p>
            <ul type="none">
              <li>2 Premium accounts</li>
              <li>For couples who live together</li>
              <li>Download 1000 Songs/device</li>
              <li>Ad-free music listening</li>
            </ul>
          </p>
          <div className='sub'>
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </label>
      </div>

      <div className='pro'>
        <label className='i3'>
          <input
            type="radio"
            value="premium"
            checked={plan === 'premium'}
            onChange={handlePlanChange}
          />
          Premium Plan ($29/month)
          <p>
            <ul type="none">
              <li>4 Premium accounts</li>
              <li>Ad-free music listening</li>
              <li>Download 10,000 Songs/device</li>
            </ul>
          </p>
          <div className='sub'>
            <button onClick={handleSubscribe}>Subscribe</button>
          </div>
        </label>
      </div>

      {subscribed && (
        <p className="subscription-success">Subscription successful!</p>
      )}

      <Button variant='contained' className="back-to-home">
        <Link to="/home">Back To Home</Link>
      </Button>
    </div>
    </div>
  );
};

export default PremiumSubscriptionPage;
