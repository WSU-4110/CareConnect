import React, { useEffect, useState } from 'react';
import './Navbar.css';
import { Logo, SearchInput, IconsContainer } from './NavbarComponents';
import UsersList from './UsersList';

export default function Navbar({ axios, profile }) {
  const [users, setUsers] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [serchedUsers, setSerchedUsers] = useState([]);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5001/api/users/getAllUsers`
        );
        console.log('response', response);
        setUsers(response.data);
      } catch (error) {
        console.error('Error creating post:', error);
      }
    };
    getUsers();
  }, []);
  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    if (query === '') {
      setSerchedUsers([]);
      setSearchText('');
    } else {
      // Filter users based on firstName or lastName containing the query
      const filteredUsers = users.filter(
        (user) =>
          user.firstName.toLowerCase().includes(query) ||
          user.lastName.toLowerCase().includes(query)
      );

      setSerchedUsers(filteredUsers);
      setSearchText(e.target.value);
    }
  };
  return (
    <div className="mainNavbar">
      <Logo />
      <div className="relative">
        <SearchInput searchText={searchText} handleSearch={handleSearch} />
        {serchedUsers.length > 0 && (
          <div className="absolute left-0 top-[50px] right-0 max-h-[300px] bg-white shadow-lg rounded-lg p-3 overflow-y-scroll">
            <UsersList users={serchedUsers} />
          </div>
        )}
      </div>
      <IconsContainer profile={profile} />
    </div>
  );
}