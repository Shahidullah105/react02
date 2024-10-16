import React, { Component, Fragment } from 'react';
import { NavLink } from 'react-router-dom';  

export default class NavBar extends Component {
  render() {
    return (
      <Fragment>
        <nav> 
          <ul> 
            <li><NavLink to="/">     Home</NavLink></li>  
            <li><NavLink to="/about">About</NavLink></li>  
            <li><NavLink to="/service">                            Service</NavLink></li>  
          </ul>
        </nav>
      </Fragment>
    );
  }
}
