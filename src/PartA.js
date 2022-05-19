import React from "react";
import logo from "./oyoLogo.png";
import "./partA.css";
import { Link } from "react-router-dom"

function PartA() {
  return (
    <div>
      <div className="navA__main">
        <img
          className="nav__logo"
          src={logo}
          width="40px"
          height="40px"
          alt="Oyo Rooms"
        />
        <div className="nav__right">
          <div>
            <img src="/Images/becomeMember.png" alt="becomeMember" />
          </div>
          <div>
            <img src="/Images/listProperty.png" alt="becomeMember" />
          </div>
          <div>
            <img src="/Images/language.png" alt="language" />
          </div>
          <div>
            {/* <Link to="/" className="login-signup"> */}
              <img src="/Images/profile.png" alt="profile" />
              <p>Login / Signup</p>
            {/* </Link> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PartA;
