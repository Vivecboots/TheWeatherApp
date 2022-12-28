import { useState } from "react";
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import Forecast from "./components/forecast/forecast";
import { WEATHER_API_URL, WEATHER_API_KEY } from "./api";
import "./App.css";

function App() {
    const options = {
        method: 'GET',
        url: 'https://wft-geo-db.p.rapidapi.com/v1/geo/adminDivisions',
        headers: {
          'X-RapidAPI-Key': '4064815201msh3a12cd8c90799b4p1a7446jsn536df58cd3b1',
          'X-RapidAPI-Host': 'wft-geo-db.p.rapidapi.com'
        }
      };
      
      axios.request(options).then(function (response) {
          console.log(response.data);
      }).catch(function (error) {
          console.error(error);
      });

      const [currentWeather, setCurrentWeather] = useState(null);
      const [forecast, setForecast] = useState(null);

      return (
        <div className="App">
            <header className="App-header">
                <h1>Weather Forecast</h1>
                <p>Temperature: {weather.currently.temperature}</p>
                <p>Summary: {weather.currently.summary}</p>
            </header>
            <Search />

                <CurrentWeather currentWeather={currentWeather} setCurrentWeather={setCurrentWeather} />
                <Forecast forecast={forecast} setForecast={setForecast} />

                <footer className="App-footer">
                    <p>Created by </p>
                </footer>
        </div>
      
  

// This file contains the code to make the API call to the Dark Sky API
//const axios = require("axios");

//const options = {
//  method: 'GET',
//  url: 'https://dark-sky.p.rapidapi.com/%7Blatitude%7D,%7Blongitude%7D',
//  params: {units: 'auto', lang: 'en'},
//  headers: {
//    'X-RapidAPI-Key': '4064815201msh3a12cd8c90799b4p1a7446jsn536df58cd3b1',
 //   'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
//  }
//};

//axios.request(options).then(function (response) {
//	console.log(response.data);
// }).catch(function (error) {
//	console.error(error);
// });

//export variables to be used in other files

//export {options};

