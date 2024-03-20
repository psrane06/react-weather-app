import "./App.css";
import fetchWeather from "./weather-api-service";

// const string: key = "e6e7a51e4e10dc302f6e94cf0a5cbdb2";
// lat: 19.0785451,
// lon": 72.878176,
function App() {
  return (
    <div className="complete-wrapper">
      <Sidebar />
      <div className="main"> World </div>
    </div>
  );
}

function Button(props: { inp: string; onClick: () => void }) {
  return (
    <button className="rounded-circle" onClick={props.onClick}>
      <span className="material-symbols-outlined align-middle">
        {props.inp}
      </span>
    </button>
  );
}

function Sidebar() {
  const fetchLatLong = async () => {
    const latitude = 19.07;
    const longitude = 72.87;
    const weatherData = await fetchWeather(latitude, longitude);
    console.log(weatherData);
  };

  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <input
          type="search"
          id="location-search"
          name="location-search"
          placeholder="Search for places"
        />
        <Button inp="my_location" onClick={fetchLatLong} />
      </div>
      {/* <SearchCity /> */}
      <div className="container">
        <div className="backdrop"></div>
        <img src="/src/assets/LightRain.png" alt="light rain" />
      </div>

      <h1 className="today_temperature">15°C</h1>

      <h4 className="today_weather">Shower</h4>

      <div className="date">
        <span>Today</span> .<span>Fri, 5 Jan</span>
      </div>

      <div className="location">
        <span className="material-symbols-outlined">location_on</span>
        <span>Helsinki</span>
      </div>
    </div>
  );
}
/* 
function Main() {
  const responses = await fetchWeatherApi(url, params);
} */

export default App;
