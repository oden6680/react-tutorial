import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import logo from "./images/head.jpeg";
import Top from "./pages/top";
import Blog from "./pages/blog";
import Twitter from "./pages/twitter";
import Profile from "./pages/profile";

const TabLink = ({ to, children, exact }) => (
  <Route
    path={to}
    exact={exact}
    children={({ match }) => {
      return (
        <li className={match ? 'is-active' : ''}>
          <Link to={to} style={{ color: match ? 'rgb(32,88,90)' : 'white' }}>
            {children}
          </Link>
        </li>
      )
    }}
  />
)

const App = () => {
  return (
    <Router>
    <div>
      <section className = "hero is-primary is-bold is-medium">
        <div className = "hero-head">
          <img src = {logo}></img>
        </div>

        <div className = "hero-foot">
            <nav className = "tabs is-boxed is-fullwidth ">
              <div className = "container">
                <ul>
                  <TabLink to = '/' exact>Top</TabLink>
                  <TabLink to = '/blog'>Blog</TabLink>
                  <TabLink to = '/twitter'>Twitter</TabLink>
                  <TabLink to = '/profile'>Profile</TabLink>
                </ul>
              </div>
            </nav>
        </div>
      </section>

      <section className = "section has-background-success-light">
        <div className = "container ">
          <Switch>
            <Route exact path = "/" component = {Top}/>
            <Route exact path = "/blog" component = {Blog}/>
            <Route exact path = "/twitter" component = {Twitter}/>
            <Route exact path = "/profile" component = {Profile}/>
          </Switch>
        </div>
      </section>  
        
      <footer className = 'footer'>
        <div className = 'container'>
          <div className = 'content has-text-centered'>
            <hr></hr>
            <p>&copy; 2020 Naoya Oda </p>
            <p><a href = "mailto:oden6680@gmail.com">oden6680@gmail.com</a></p>
          </div>
        </div>
      </footer>
    </div>
    </Router>
  );
}

export default App;　　　　