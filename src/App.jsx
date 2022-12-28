import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(null); // Declare a state variable for city
  const [cityInput, setCityInput] = useState(''); // Declare a state variable for city input

  
    
  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      },
      error => {
        setError(error);
      }
    );
  }, []);



  useEffect(() => {
    if (latitude && longitude) {
      const options = {
        method: 'GET',
        url: `https://dark-sky.p.rapidapi.com/${latitude},${longitude}`,
        params: { units: 'auto', lang: 'en' },
        headers: {
          'X-RapidAPI-Key': '4064815201msh3a12cd8c90799b4p1a7446jsn536df58cd3b1',
          'X-RapidAPI-Host': 'dark-sky.p.rapidapi.com'
        }
        
      };

      
      //new code
      
    
    


      axios.request(options)
       .then(response => {
          
          const timezone = response.data.timezone;
          const cityArray = timezone.split('/');
          const city = cityArray[1].replace(/_/g, ' ');
          
          setWeather(response.data);
          setCity(city); // Set the city state variable here
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [latitude, longitude]);

  if (error) {
    return <div>An error occurred: {error.message}</div>;
  }

  if (!latitude || !longitude) {
    return <div>Loading location...</div>;
  }

  if (!weather) {
    
  
    return <div>Loading weather data...</div>;
  }













  return (
    <div>
    <input
      type="text"
      value={city}
      onChange={event => setCity(event.target.value)}
    />
    <button onClick={() => getCoordinates(city)}>Get Weather</button>
    {error && <div>An error occurred: {error.message}</div>}
    {latitude && longitude && !error && (
      <div>
        <h1>Weather Forecast for {city}</h1>
        <p>Latitude: {latitude}</p>
        <p>Longitude: {longitude}</p>
        <p>Temperature: {weather.currently.temperature}</p>
        <p>Summary: {weather.currently.summary}</p>
      </div>
    )}
  </div>
);
}

export default App;
