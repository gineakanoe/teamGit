<<<<<<< HEAD
import React from "react";
import './App.css';
import Nasa from './components/app/Nasa';
=======
import React from 'react';
import './App.css';
import Nasa from './component/app/Nasa';
import Weatherapp from './component/app/Weatherapp';
import Ticketmaster from './component/app/Ticketmaster';
>>>>>>> fc186b30dcfb14a24ed8e33a8f790aecaa925c8f

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Nasa />
=======
      <h1>Master Branch</h1>
      <br />
      <h2>Develop Branch</h2>
      <br />
      <div>
        <h3>Reagan Branch</h3>
        <h3>Nasa</h3>
        <Nasa />
      </div>
      <div>
        <h3>Nolan Branch</h3>
        <h3>Weather</h3> 
        <Weatherapp /> 
      </div>
      <div>
        <h3>Ginea Branch</h3>
        <h3>Ticketmaster</h3>
        <Ticketmaster />
      </div>

>>>>>>> fc186b30dcfb14a24ed8e33a8f790aecaa925c8f
    </div>
  );
}

export default App;
