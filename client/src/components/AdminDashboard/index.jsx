// components/AdminDashboard.js

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AdminDashboard = () => {
  const [adminInfo, setAdminInfo] = useState(null);

  useEffect(() => {
    const fetchAdminInfo = async () => {
      try {
        const token = localStorage.getItem('token');
        console.log('Received Token:', token); // Log token for debugging

        if (!token) {
          // Handle the case where the token is not available (redirect to login or take appropriate action)
          return;
        }

        const response = await axios.get('http://localhost:8080/api/admin/dashboard', {
          headers: { Authorization: `Bearer ${token}` },
        });

        setAdminInfo(response.data.adminInfo);
      } catch (error) {
        // Handle errors, e.g., redirect to login page
        console.error(error);
      }
    };

    fetchAdminInfo();
  }, []); // Run this effect only once on component mount

  return (
    <div>
      <h1>Welcome to the Admin Dashboard</h1>
      
      
    </div>
  );
};

export default AdminDashboard;
