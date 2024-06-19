import SearchBox from "./Search.jsx";
import "./Weather.css";
import TimeDate from "./TimeDate.jsx";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import { useEffect, useState } from "react";
export default function Weather() {
  let [time, setTime] = useState({year:0,month:0,day:0,hours:0,minutes:0,seconds:0,dayName:3,monthname:"h"});
   let weatherData = {
     city: "Mumbai",
     tempMax: 43,
     tempMin: 40,
     temp: 41,
     pressure: 1004,
     humidity: 40,
     country: "IN",
     sunrise: "6:00",
     sunset: "7:00",
     feelsLike: 50,
     des:"haze"
   };
  let [weather, setWeather] = useState(weatherData);
 
  let updateWeather = (weather) => {
    setWeather(weather);
  }
 
  useEffect(() => {
    async function date() {
      let now = new Date();
      let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
      let data = {
        year: now.getFullYear(),
        month: String(now.getMonth() + 1).padStart(2, "0"), // Months are zero-based
        day: String(now.getDate()).padStart(2, "0"),
        hours: String(now.getHours()).padStart(2, "0"),
        minutes: String(now.getMinutes()).padStart(2, "0"),
        seconds: String(now.getSeconds()).padStart(2, "0"),
        dayName: days[now.getDay()],
        monthname:months[now.getMonth()]
      };
      setTime(data);
    };
    date();
    console.log(time);

  
 
  }, [])
  
  
  return (
    <div>
      <SearchBox updateWeather={updateWeather}></SearchBox>
      <div className="main" >
        <TimeDate time={time} sunset={weather.sunset} sunrise={weather.sunrise} country={weather.country} city={weather.city}></TimeDate>

        <div className="temp">
          <div className="temperature">
            <div className="div">
              {" "}
              <h1 className="h1">{weather.temp} &deg;c</h1>
              {weather.tempMin}&deg;/{weather.tempMax}&deg;
            </div>{" "}
            <WbSunnyIcon className="weather-sun"></WbSunnyIcon>
          </div>
          <p className="p"><b> {weather.des}</b></p>
          <div className="humidity">
            <div className="hum">
              <p>Humidity</p>
              <h3>{weather.humidity}%</h3>
            </div>
            <div className="hum">
              <p>Pressure</p>
              <h3>{weather.pressure}</h3>
            </div>
            <div className="FeelsLike hum">
              <p>Feels Like</p>
              <h3>{weather.feelsLike}&deg;c</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
