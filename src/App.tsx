import "./App.css";

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

function Button(props: { inp: string }) {
  return (
    <button className="rounded-circle">
      <span className="material-symbols-outlined align-middle">
        {props.inp}
      </span>
    </button>
  );
}

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar-header">
        <input
          type="search"
          id="location-search"
          name="location-search"
          placeholder="Search for places"
        />
        <Button inp="my_location" />
      </div>

      <div className="container">
        {/* <span className="background-clouds"></span> */}
        {/* <img src="/src/assets/Cloud-background.png" alt="HeavyCloud" /> */}
        {/* <div className="backdrop"></div> */}
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

export default App;
