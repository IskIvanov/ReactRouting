import React, { Component } from 'react'

import axios from 'axios';
import {
  BrowserRouter,
  Route
} from 'react-router-dom';

//Add components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';

export default class App extends Component {

  render() {
    return (
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='New' /> }/>
        <Route path="/teachers" component={Teachers}/>
        <Route path="/courses" component={Courses}/>
      </div>
    </BrowserRouter>
    )
  }
}
