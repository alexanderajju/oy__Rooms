import React from "react";
import { RangeDatePicker } from "react-google-flight-datepicker";
import "react-google-flight-datepicker/dist/main.css";
import "./searchField.css";

function SearchFIeld() {
  return (
    <div className="search__field">
      <div className="search__fieldTitle">
        <h4>World's Fastest Growing Hotel Chain</h4>
      </div>
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

export default SearchFIeld;
