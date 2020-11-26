import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from './Home'

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Home} exact />
      </Switch>
    </main>
  );
}

export default App;
