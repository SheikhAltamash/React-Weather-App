import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import React from "react";

import {convertUnixTimestampTo12HourFormat}  from "./helperfunctions.js";
import "./search.css";
import { useState } from "react";
export default function SearchBox({updateWeather}) {
  let [city, setCity] = useState("");
  let [error, seterror] = useState(false);
  let data = (e) => {
    setCity(e.target.value);
    console.log(e.target.value);
    seterror(false);
  };

let submit = async (e) => {
    try {
      e.preventDefault();
      setCity("");
      let data = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=a7f8a475b1903f10a61c5d0e00bbe743&units=metric`
      );
      let weatherData = await data.json();
      let sunset = convertUnixTimestampTo12HourFormat(weatherData.sys.sunset);
      let sunrise = convertUnixTimestampTo12HourFormat(weatherData.sys.sunrise);
      let weather = {
        city: city,
        tempMax: weatherData.main.temp_max,
        tempMin: weatherData.main.temp_min,
        temp: weatherData.main.temp,
        pressure: weatherData.main.pressure,
        humidity: weatherData.main.humidity,
        country: weatherData.sys.country,
        sunrise:sunrise ,
        sunset:sunset ,
        feelsLike: weatherData.main.feels_like,
        des: weatherData.weather[0].description,
      };
      console.log(weatherData);
      updateWeather(weather);
    } catch (e) {
seterror(true)    }
  };

  return (
    <div className="searchbox">
      <form action="#">
        <input
          type="text"
          placeholder="Location"
          className="text"
          onChange={data}
          value={city}
        />
        <Button onClick={submit} className="s" type="submit">
          <SearchIcon
            className="se"
            type="submit"
            onclick={submit}
          ></SearchIcon>
        </Button>
        {error && <p style={{ color: "red" }}>No such place exist </p>}
      </form>
    </div>
  );
}
