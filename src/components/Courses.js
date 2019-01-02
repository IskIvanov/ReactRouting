import React from 'react';
import { NavLink, Route, Redirect } from 'react-router-dom';

import HTML from './courses/HTML';
import JavaScript from './courses/JavaScript';
import CSS from './courses/CSS';
import Course from './courses/Course';

const Courses = ({match}) => (
  <div className="main-content courses">
    <div className="course-header group">
      <h2>Courses</h2> 
      <ul className="course-nav">
        <li><NavLink to={`${match.url}/html`}>HTML</NavLink></li>
        <li><NavLink to={`${match.url}/css`}>CSS</NavLink></li>
        <li><NavLink to={`${match.url}/javascript`}>JavaScript</NavLink></li>
        <li><NavLink to={`${match.url}/course`}>Course</NavLink></li>
      </ul>
    </div>
    
    <Redirect path={`${match.url}/html`}/>
    <Route exect path={`${match.url}/course`} render={() => <Redirect to= {`${match.url}/html`} />} />
    <Route path={`${match.url}/html`} component={HTML} />
    <Route path={`${match.url}/css`} component={CSS} />
    <Route path={`${match.url}/javascript`} component={Course} />
 
  </div>
);

export default Courses;