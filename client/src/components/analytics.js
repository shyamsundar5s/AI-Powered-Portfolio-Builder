import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Analytics = ({ portfolioId }) => {
  const [analytics, setAnalytics] = useState({ views: 0, downloads: 0 });

  useEffect(() => {
    const fetchAnalytics = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/analytics/${portfolioId}`);
        setAnalytics(response.data);
      } catch (error) {
        console.error('Error fetching analytics:', error);
      }
    };

    fetchAnalytics();
  }, [portfolioId]);

  return (
    <div>
      <h3>Portfolio Analytics</h3>
      <p>Views: {analytics.views}</p>
      <p>Downloads: {analytics.downloads}</p>
    </div>
  );
};

export default Analytics;
