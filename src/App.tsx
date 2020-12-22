import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Home";
import MainWrapper from "./MainWrapper";
import { ThemeProvider } from "styled-components";
import theme from "./theme";
import About from "./About";

function App() {
  return (
    <main>
         <head>
        <link rel="stylesheet" href="leaflet.css" />
        <script src="leaflet.js"></script>
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" />
        <script src="http://cdn.leafletjs.com/leaflet-0.7/leaflet.js"></script>
        <link rel="stylesheet" href="files/leaflet.draw.css" />
        <script src="files/Leaflet.draw.js"></script>
      </head>
      <ThemeProvider theme={theme}>
      <Switch>
        <MainWrapper>
          <Route path="/" component={Home} exact />
          <Route path="/onas" component={About} exact />
        </MainWrapper>
      </Switch>
      </ThemeProvider>
    </main>
  );
}

export default App;
