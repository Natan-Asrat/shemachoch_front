import React, {useEffect,  useState } from "react";
import "./css/Sidebar.css";
import { Link, NavLink, Navigate, useNavigate } from "react-router-dom";
import { getAuth } from "firebase/auth";

function Sidebar() {
  const styles = {
    background: "#009099",
  };

  let navigate = useNavigate();

  const [logout, setLogout] = useState(false);
  const [username, setUsername] = useState("");
  const [position, setPosition] = useState("");
  useEffect(()=>{
    fetch('https://shemachoch.onrender.com/app/user/?format=json', {
      method: 'GET',
      headers: {
        'Authorization': localStorage.getItem('user'),
      }})
    .then(response => response.json())
    .then(data => {
      setUsername(data.name)
      setPosition(data.position)
    } )
  },[])
  const openDialog = () => {
    setLogout(!logout);
  };
  const closeDialog = () => {
    setLogout(false);
  };
  const handleLogout = () => {
    getAuth().signOut();
    localStorage.removeItem('user');
    // navigate("/login");
    window.location.reload(false);
  };

  return (
    <div className="side-bar">
      <div className="sidebar-top">
        <img src="images/shemachoch_logo.png" alt="" className="logo" />

        <h1>Shemachoch</h1>
      </div>

      <div className="sidebar-middle">
        <div>
          <h2>{username}</h2>
          <h3>{position}</h3>
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

          {/* <NavLink
            className="link"
            to="#"
            style={({ isActive }) => (isActive ? styles : null)}
          > */}
          <div
            className="menu-item-container"
            type="button"
            onClick={openDialog}
          >
            <img
              src="images/logout.png"
              alt=""
              style={{ filter: 'invert(1) sepia(1) saturate(10000%) hue-rotate(359deg)' }}
              className="sidebar-icons-logout"
            />
            <Link to="#" className="link">
              <li className="sidebar-menus logout" style={{ color: 'red' }}>Log out</li>
            </Link>
          </div>
          {logout ? (
            <div className="modal">
              <div className="modal-content">
                <h2>Confirmation</h2>
                <p>Are you sure you want to logout?</p>
                <div className="confirm-btn-container">
                  <button  onClick={handleLogout}>Logout</button>
                  <button  onClick={closeDialog}>Back</button>
                </div>
              </div>
            </div>
          ) : null}
        </ul>
        {/* </NavLink> */}
      </div>
    </div>
  );
}

export default Sidebar;
