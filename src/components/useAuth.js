// // useAuth.js
// import { useState } from 'react';

// export default function useAuth() {
//   const [isLoggedIn, setIsLoggedIn] = useState(
//     localStorage.getItem('isLoggedIn') === 'true'
//   );

//   const handleLogin = (username, password, navigate) => {
//     const storedUsers = JSON.parse(localStorage.getItem('users')) || [];

//     // Find the user object with the matching username and password
//     const user = storedUsers.find(
//       (u) => u.username === username && u.password === password
//     );

//     if (user) {
//       // Set the login status to 'true' in localStorage
//       localStorage.setItem('isLoggedIn', 'true');
//       setIsLoggedIn(true);
//       navigate('/home');
//     } else {
//       navigate('/register');
//     }
//   };

//   const handleLogout = (navigate) => {
//     // Clear the login status from localStorage
//     localStorage.removeItem('isLoggedIn');
//     setIsLoggedIn(false);
//     // Perform any additional logout logic if needed
//     // Redirect the user to the login page or any other appropriate page
//     navigate('/loginform');
//   };

//   return isLoggedIn ? true : false;
// }
