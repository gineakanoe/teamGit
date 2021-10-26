import React from 'react';
import './App.css';
import Nasa from './component/app/Nasa';
import Weatherapp from './component/app/Weatherapp';
import Ticketmaster from './component/app/Ticketmaster';

function App() {
  return (
    <div className="App">
      <h1>Team 5: 24hr Project</h1>
      <h2>Reagan, Nolan, Ginea</h2>
      <hr />
      <div>
        {/* <h3>Reagan Branch</h3> */}
        <h3>Nasa</h3>
        {/* <Nasa /> */}
      </div>
      <div>
        {/* <h3>Nolan Branch</h3> */}
        <h3>Weather</h3> 
        <Weatherapp /> 
      </div>
      <div>
        {/* <h3>Ginea Branch</h3> */}
        <h3>Ticketmaster</h3>
        <Ticketmaster />
      </div>

    </div>
  );
}

export default App;
