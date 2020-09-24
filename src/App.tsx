import React from 'react';
import MapContainer from './MapContainer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
         Kościółkowo! 
        </a>
        <MapContainer />
      </header>
    </div>
  );
}

export default App;
