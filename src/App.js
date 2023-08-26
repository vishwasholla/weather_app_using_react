import logo from './logo.svg';
import './App.css';
import Search from './components/search/search';
import CurrentWeather from './components/current_weather/current_weather';
import { WEATHER_API_URL, WEATHER_API_KEY } from './api';
import { useState } from 'react';
function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forcast, setForcast] = useState(null);
  const handleOnSearchChange = (searchData) => {
    {/*after get method ends,this callback funtion is executed*/ }
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`);
    Promise.all([currentWeatherFetch, forecastFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();
        const forcastResponse = await response[1].json();
        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForcast({ city: searchData.label, ...forcastResponse });
      })
      .catch((err) => console.log(err));
  }
  console.log(currentWeather);
  console.log(forcast);
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} />{/* this is get method */}
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {/*if the currentWeather exist then send the data else dont*/}
    </div>
  );
}

export default App;
