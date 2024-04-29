import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <div className="nav">
        <div className="logo">
          <NavLink className="nav-link" to="/">
            OldSkool
          </NavLink>
        </div>
        <div className="nav-links">
          <div className="nav-item">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </div>
          <div className="nav-item">
            <NavLink className="nav-link" to="/">
              Home
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
