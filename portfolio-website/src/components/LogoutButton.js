import React from "react";

export default function LogoutButton({ onLogout }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    onLogout();
  };
  return (
    <a
      href="#logout"
      onClick={e => {
        e.preventDefault();
        handleLogout();
      }}
      className="nav__logout nav__link"
      style={{ color: "var(--muted)", textDecoration: "none", fontWeight: 600, padding: "0.4rem 0.6rem", borderRadius: "999px" }}
    >
      Logout
    </a>
  );
}
