import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Logo from "./images/logo.png"
import Background from "./images/background.png"

import Top from "./pages/top";
import Blog from "./pages/blog";
import Gallery from "./pages/gallery";
import Profile from "./pages/profile";

import Hokkaido from "./pages/blog/japan/hokkaido_tohoku/hokkaido";
import Fukushima from "./pages/blog/japan/hokkaido_tohoku/fukushima";
import Tokyo from "./pages/blog/japan/kanto/tokyo";
import Shizuoka from "./pages/blog/japan/tyubu/shizuoka";
import Nagano from "./pages/blog/japan/tyubu/nagano";

import Minsk from "./pages/blog/belarus/minsk";
import Grodno from "./pages/blog/belarus/grodno";
import Brest from "./pages/blog/belarus/brest";

import Notfound from "./pages/blog/nonedeta";

const TabLink = ({ to, children, exact }) => (
  <Route
    path = {to}
    exact = {exact}
    children = {({ match }) => {
      return (
        <li className = {match ? 'is-active' : ''}>
          <Link to = {to} style = {{ color: match ? 'rgb(32,88,90)' : 'white' }}>
            {children}
          </Link>
        </li>
      )
    }}
  />
)

const style = { backgroundImage:`url(${Background})`}

const App = () => {
  return (
    <Router hashType = "noslash">
    <div>
      <section className = "hero is-primary">

        <div className = "hero-body" style = {style}>
          <div className = 'container'>
            <div className = 'content has-text-centered'>
              <img src = { Logo } alt = "logo" />
            </div>
          </div>
        </div>

        <div className = "hero-foot">
            <nav className = "tabs is-boxed is-fullwidth ">
              <div className = "container">
                <ul>
                  <TabLink to = '/' exact>Top</TabLink>
                  <TabLink to = '/blog'>Blog</TabLink>
                  <TabLink to = '/gallery'>Gallery</TabLink>
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
            <Route exact path = "/gallery" component = {Gallery}/>
            <Route exact path = "/profile" component = {Profile}/>

            <Route exact path = "/blog/hokkaido" component = {Hokkaido}/>
            <Route exact path = "/blog/fukushima" component = {Fukushima}/>

            <Route exact path = "/blog/tokyo" component = {Tokyo}/>

            <Route exact path = "/blog/shizuoka" component = {Shizuoka}/>
            <Route exact path = "/blog/nagano" component = {Nagano}/>

            <Route exact path = "/blog/minsk" component = {Minsk}/>
            <Route exact path = "/blog/grodno" component = {Grodno}/>
            <Route exact path = "/blog/brest" component = {Brest}/>

            <Route path = "*" component = {Notfound}/>
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