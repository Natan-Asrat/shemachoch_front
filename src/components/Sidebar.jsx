import React from "react";
import "./css/Sidebar.css";
import { Link, NavLink } from "react-router-dom";

function Sidebar() {
  const styles = {
    background: "#009099",
  };

  return (
    <div className="side-bar">
      <div className="sidebar-top">
        <img src="images/shemachoch_logo.png" alt="" className="logo" />

        <h1>Shemachoch</h1>
      </div>

      <div className="sidebar-middle">
        <div>
          <h2>Eden</h2>
          <h3>Super Admin</h3>
        </div>

        <div className="dot-container">
          <img src="images/dot.png" alt="" />
          <img src="images/dot.png" alt="" />
          <img src="images/dot.png" alt="" />
        </div>
      </div>

      <div className="sidebar-bottom">
        <ul>
          <NavLink
            className="link"
            to="/"
            style={({ isActive }) => (isActive ? styles : null)}
          >
            <div className="menu-item-container">
              <img
                src="images/dashboard.png"
                alt=""
                className="sidebar-icons"
              />

              <li className="sidebar-menus">Dashboard</li>
            </div>
          </NavLink>

          <NavLink
            className="link"
            to="/goods"
            style={({ isActive }) => (isActive ? styles : null)}
          >
            <div className="menu-item-container">
              <img src="images/goods.png" alt="" className="sidebar-icons" />

              <li className="sidebar-menus">Goods</li>
            </div>
          </NavLink>

          <NavLink
            className="link"
            to="/members"
            style={({ isActive }) => (isActive ? styles : null)}
          >
            <div className="menu-item-container">
              <img src="images/members.png" alt="" className="sidebar-icons" />
              <Link to="/members" className="link">
                <li className="sidebar-menus">Memebers</li>
              </Link>
            </div>
          </NavLink>

          <NavLink
            className="link"
            to="/reports"
            style={({ isActive }) => (isActive ? styles : null)}
          >
            <div className="menu-item-container">
              <img src="images/group.png" alt="" className="sidebar-icons" />
              <Link to="/reports" className="link">
                <li className="sidebar-menus">Reports</li>
              </Link>
            </div>
          </NavLink>

          <hr />

          <NavLink
            className="link"
            to="/settings"
            style={({ isActive }) => (isActive ? styles : null)}
          >
            <div className="menu-item-container">
              <img src="images/settings.png" alt="" className="sidebar-icons" />
              <Link to="/settings" className="link">
                <li className="sidebar-menus">Settings</li>
              </Link>
            </div>
          </NavLink>
        </ul>
      </div>
    </div>
  );
}

export default Sidebar;
