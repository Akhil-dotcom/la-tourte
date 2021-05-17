import React from 'react';
import './App.scss';
import Home from './components/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Menu from './components/Menu';
import Bottom__Navbar from './mobile__components/Bottom__Navbar';


function App() {
  return (
    <div className="App">
      <Router>
         <Navbar />
         <Switch>
             <Route path='/' exact component={Home} />
             <Route path='/menu' component={Menu} />
         </Switch>
      </Router>
    </div>
  );
}

export default App;
