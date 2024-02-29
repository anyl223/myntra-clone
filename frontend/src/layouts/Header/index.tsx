import React from "react";
import scss from "./header.module.scss";

import { FaUserCircle } from "react-icons/fa";
import { ImCart } from "react-icons/im";

const Header = () => {
  return (
    <div className={scss.header}>
      <img className={scss.logo} src="/assets/images/flogo.png" alt="Logo" />
      <div className={scss.searchContainer}>
        <input className={scss.searchBox} type="text" placeholder="Search..." />
        <button className={scss.searchButton}>Search</button>
      </div>
      <div className={scss.searchContainer}>
        <div className={scss.icons}>
          <ImCart className={scss.icon} />
          <FaUserCircle className={scss.icon} />
        </div>
      </div>
    </div>
  );
};

export default Header;
