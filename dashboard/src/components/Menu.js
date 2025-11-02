import React from "react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import './Menu.css';

const Menu = () => {
  
  let [selectedMenu, setselectedMenu] = useState(0);
  let [profileDropDownOpen, setprofileDropDownOpen] = useState(false);
  let menuClass = "menu";
  let activeMenuClass = "menu selected";

  let handleProfileClick = () => {
    setprofileDropDownOpen(!profileDropDownOpen)
  };

  let handleMenuClick = (index) => {
    setselectedMenu(index);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "35px" }} />
      <div className="menus">
        <ul>
            
          <li>
            <NavLink
              to="/orders"
              onClick={() => {
                handleMenuClick(0);
              }}
            >
              <p className={selectedMenu===0 ? activeMenuClass : menuClass}>Orders</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/holdings"
              onClick={() => {
                handleMenuClick(1);
              }}
            >
              <p className={selectedMenu===1 ? activeMenuClass : menuClass}>Holdings</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/positions"
              onClick={() => {
                handleMenuClick(2);
              }}
            >
              <p className={selectedMenu===2 ? activeMenuClass : menuClass} >Positions</p>
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/funds"
              onClick={() => {
                handleMenuClick(3);
              }}
            >
              <p className={selectedMenu===3 ? activeMenuClass : menuClass}>Funds</p>
            </NavLink>
          </li>
        </ul>
        <hr />
        <div className="profile" onClick={handleProfileClick}>
          <div className="avatar">ZU</div>
          <p className="username">USERID</p>
        </div>
      </div>
    </div>
  );
};

export default Menu;
