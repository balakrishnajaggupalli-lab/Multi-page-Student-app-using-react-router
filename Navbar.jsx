import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        gap: "20px",
        padding: "10px",
        background: "#2c3e50",
      }}
    >
      <NavLink to="/" style={navStyle}>
        Home
      </NavLink>

      <NavLink to="/about" style={navStyle}>
        About
      </NavLink>

      <NavLink to="/students" style={navStyle}>
        Students
      </NavLink>
    </nav>
  );
}

const navStyle = ({ isActive }) => ({
  color: isActive ? "#f39c12" : "white",
  textDecoration: "none",
  fontWeight: isActive ? "bold" : "normal",
  fontSize: "16px",
});

export default Navbar;