import React from 'react';
import logo from './logo.svg';
import Home from './component/home/home'
import Json from './component/json/jsons'
import Contact from  './component/contact/contact'
import About from './component/about/about'
import Xml from './component/xml/xml'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
    <div className="App">
    <Switch>
          <Route exact  path="/">
            <Home />
          </Route>
          <Route exact path="/json">
            <Json />
          </Route>
          <Route exact strict path="/xml">
            <Xml />
          </Route>
          <Route exact strict path="/contact">
            <Contact />
          </Route>
          <Route exact strict path="/about">
            <About />
          </Route>
        </Switch>
   </div>
   </Router>
  );
}

export default App;
