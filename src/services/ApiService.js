// ApiService.js

export const fetchReferrals = () => {
  // Implementation to fetch referrals from API
  return fetch('https://api.example.com/referrals')
    .then((response) => response.json());
};

export const fetchServices = () => {
  // Implementation to fetch services from API
  return fetch('https://api.example.com/services')
    .then((response) => response.json());
};
