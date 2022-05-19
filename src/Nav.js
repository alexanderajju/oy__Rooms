import React, { useEffect, useState } from "react";
import "./Nav.css";
import logo from "./oyoLogo.png";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";

function Navb() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 250) {
        handleShow(true);
      } else handleShow(false);
    });
    // return () => {
    // //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav nav__hidden ${show && "nav__black"}`}>
      <img className="nav__log" src={logo} alt="Netflix Logo" />
      <div className="search__fieldInput">
        <input
          type="text"
          placeholder="Search by city, hotel or neighbourhood"
        />
        <RangeDatePicker
          startDate={new Date(2020, 0, 15)}
          endDate={new Date(2020, 1, 1)}
          minDate={new Date(1900, 0, 1)}
          maxDate={new Date(2100, 0, 1)}
        />
        <div className="search__fieldRooms">
          <p>1 Room, 2 Guest</p>
        </div>
        <button>Search</button>
      </div>
    </div>
  );
}

export default Navb;
