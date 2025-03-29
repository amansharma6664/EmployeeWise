// import React, { useState } from "react";
// import { BrowserRouter as Router, Route, Routes, Navigate, useNavigate } from "react-router-dom";
// import Login from "./components/Login";
// import UserList from "./components/UserList";
// import EditUser from "./components/EditUser";
// import Home from "./pages/Home";
// import "./App.css";

// function App() {
//   const [isAuthenticated, setIsAuthenticated] = useState(false);

//   const handleLogin = () => {
//     setIsAuthenticated(true);
//   };

//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Login onLogin={handleLogin} />} />
//         {isAuthenticated ? (
//           <>
//             <Route path="/home" element={<Home />} />
//             <Route path="/users" element={<UserList />} />
//             <Route path="/edit/:id" element={<EditUser />} />
//           </>
//         ) : (
//           <Route path="*" element={<Navigate to="/" />} />
//         )}
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from "./components/Login";
import UserList from "./components/UserList";
import EditUser from "./components/EditUser";
import Home from "./pages/Home";
import "./App.css";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [users, setUsers] = useState([
    { id: 1, first_name: "Aman", last_name: "Sharma", email: "aman@example.com" },
    { id: 2, first_name: "Rohit", last_name: "Kumar", email: "rohit@example.com" },
  ]);

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleDelete = (id) => {
    setUsers(users.filter(user => user.id !== id));
  };

  const handleSave = (updatedUser) => {
    setUsers(users.map(user => (user.id === updatedUser.id ? updatedUser : user)));
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login onLogin={handleLogin} />} />
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/users" element={<UserList users={users} onDelete={handleDelete} />} />
            <Route path="/edit/:id" element={<EditUser onSave={handleSave} />} />
          </>
        ) : (
          <Route path="*" element={<Navigate to="/" />} />
        )}
      </Routes>
    </Router>
  );
}

export default App;
