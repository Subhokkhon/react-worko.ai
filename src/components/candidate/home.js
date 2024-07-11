// components/candidate/home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../auth'; // Adjusted auth import path

const CandidateHome = () => {
  const [referrals, setReferrals] = useState([]);
  const [services, setServices] = useState([]);
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    // Fetch data from the API (Placeholder URLs)
    fetch('https://api.clever.com/v1.0/referrals')
      .then((response) => response.json())
      .then((data) => setReferrals(data))
      .catch((error) => console.error('Error fetching referrals:', error));

    fetch('https://api.clever.com/v1.0/services')
      .then((response) => response.json())
      .then((data) => setServices(data))
      .catch((error) => console.error('Error fetching services:', error));
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Candidate Home</h2>
      <div>
        <h3>Referrals</h3>
        {referrals.map((referral) => (
          <div key={referral.id}>{referral.name}</div>
        ))}
      </div>
      <div>
        <h3>Services</h3>
        {services.map((service) => (
          <div key={service.id}>{service.name}</div>
        ))}
      </div>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default CandidateHome;
