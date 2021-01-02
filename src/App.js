// NPM
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Pages
import LandingPage from "./pages/landingpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={LandingPage}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
