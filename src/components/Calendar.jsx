import React, { useEffect, useState } from "react";
import DatePicker from "sassy-datepicker";
import * as service from "../services.js";
import Day from "./Day.jsx";
import "../css/calendar.css";

function Calendar() {
  const [datePicked, setDatePicked] = useState([0, 0, 0]);
  const [currentMonth, setCurrentMonth] = useState({
    year: 0,
    month: 0,
  });
  const [matchingDays, setMatchingDays] = useState([]);
  const [specialDays, setSpecialDays] = useState([]);

  useEffect(() => {
    console.log("USE EFFECT IS FIRING");

    if (datePicked[0] > 0) {
      get(currentMonth.year, currentMonth.month);
    } else {
      console.log("Please pick a date");
    }
  }, [currentMonth]);

  const mapDay = (day) => {
    if (
      day.run_date_array[0] === datePicked[0] &&
      day.run_date_array[1] === datePicked[1] &&
      day.run_date_array[2] === datePicked[2]
    ) {
      console.log("Matching day in map", day);
      matchingDays.push(day);
    } else {
      console.log("Not a matching day");
    }
    console.log("matching day array at end", matchingDays);
  };

  const get = (year, month) => {
    console.log("payload", year, month);
    service.get(year, month).then(onGetSuccess).catch(onGetError);
  };

  const onGetSuccess = (response) => {
    let pd = response.data;
    console.log(pd, "array response");

    setSpecialDays((prevState) => {
      return [...prevState, pd];
    });

    pd.map(mapDay);
  };
  console.log(specialDays, "specialDays after onsuccess set");
  const onGetError = (err) => {
    console.log(err);
  };

  const setMonth = (year, month) => {
    setCurrentMonth((prevState) => {
      let newMonth = { ...prevState };
      newMonth.year = year;
      newMonth.month = month;
      return newMonth;
    });
  };

  const setFullDate = (year, month, day) => {
    console.log("year month day", year, month, day);
    setDatePicked((prevState) => {
      let newDate = [...prevState];
      newDate = [year, month, day];
      return newDate;
    });
  };

  const onChange = (date) => {
    let reformatDate = date.toLocaleDateString();
    console.log(reformatDate);
    let splitted = reformatDate.split("/");
    let month = parseInt(splitted[0]);
    let day = parseInt(splitted[1]);
    let year = parseInt(splitted[2]);
    setSpecialDays((prevState) => {
      let resetDays = [...prevState];
      resetDays = [];
      return resetDays;
    });
    setMatchingDays((prevState) => {
      let resetDays = [...prevState];
      resetDays = [];
      return resetDays;
    });

    setMonth(year, month);
    setFullDate(year, month, day);
    console.log(month, day, year);
  };
  return (
    <React.Fragment>
      <div className="container">
        <div className="date-picker">
          <DatePicker onChange={onChange}></DatePicker>
        </div>
        <div className="special-day">
          <Day matchingDays={matchingDays} />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Calendar;
