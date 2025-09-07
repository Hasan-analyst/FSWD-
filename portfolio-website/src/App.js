
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import Login from "./components/Login";
import Signup from "./components/Signup";
import LogoutButton from "./components/LogoutButton";
import ProtectedRoute from "./ProtectedRoute";

function AppRoutes({ isLoggedIn, setIsLoggedIn }) {
  const routerLocation = useLocation();
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsLoggedIn(true);
    navigate("/");
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
    navigate("/login");
  };
  const handleSignup = () => {};

  React.useEffect(() => {
    if (
      !isLoggedIn &&
      routerLocation.pathname !== "/login" &&
      routerLocation.pathname !== "/signup"
    ) {
      navigate("/login");
    }
  }, [isLoggedIn, routerLocation.pathname, navigate]);

  const showLogout = isLoggedIn && routerLocation.pathname !== "/login" && routerLocation.pathname !== "/signup";
  return (
    <>
      {/* Navbar with LogoutButton on top when logged in */}
      {routerLocation.pathname !== "/login" && routerLocation.pathname !== "/signup" && (
        <Navbar showLogout={showLogout} onLogout={handleLogout} />
      )}
      <Routes>
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/signup" element={<Signup onSignup={handleSignup} />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <>
                <Home />
                <About />
                <Projects />
                <Skills />
                <Contact />
              </>
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to={isLoggedIn ? "/" : "/login"} />} />
      </Routes>
    </>
  );
}

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(!!localStorage.getItem("token"));

  return (
    <Router>
      <AppRoutes isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
    </Router>
  );
}
