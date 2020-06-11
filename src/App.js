import React from "react";
import { HashRouter as Router, Route, Link, Switch } from 'react-router-dom';

import logo from "./images/head.jpeg";
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

const App = () => {
  return (
    <Router>
    <div>
      <section className = "hero is-primary is-bold is-medium">

        <div className = "hero-head">
          <img src = {logo} alt = "head"></img>
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
            <Route exact path = "/blog/aomori" component = {Notfound}/>
            <Route exact path = "/blog/akita" component = {Notfound}/>
            <Route exact path = "/blog/iwate" component = {Notfound}/>
            <Route exact path = "/blog/yamagata" component = {Notfound}/>
            <Route exact path = "/blog/miyagi" component = {Notfound}/>
            <Route exact path = "/blog/fukushima" component = {Fukushima}/>

            <Route exact path = "/blog/gunma" component = {Notfound}/>
            <Route exact path = "/blog/tochigi" component = {Notfound}/>
            <Route exact path = "/blog/ibaraki" component = {Notfound}/>
            <Route exact path = "/blog/saitama" component = {Notfound}/>
            <Route exact path = "/blog/tokyo" component = {Tokyo}/>
            <Route exact path = "/blog/chiba" component = {Notfound}/>
            <Route exact path = "/blog/kanagawa" component = {Notfound}/>

            <Route exact path = "/blog/nigata" component = {Notfound}/>
            <Route exact path = "/blog/shizuoka" component = {Shizuoka}/>
            <Route exact path = "/blog/yamanashi" component = {Notfound}/>
            <Route exact path = "/blog/nagano" component = {Nagano}/>
            <Route exact path = "/blog/toyama" component = {Notfound}/>
            <Route exact path = "/blog/ishikawa" component = {Notfound}/>
            <Route exact path = "/blog/fukui" component = {Notfound}/>
            <Route exact path = "/blog/gifu" component = {Notfound}/>
            <Route exact path = "/blog/aichi" component = {Notfound}/>

            <Route exact path = "/blog/osaka" component = {Notfound}/>
            <Route exact path = "/blog/kyoto" component = {Notfound}/>
            <Route exact path = "/blog/nara" component = {Notfound}/>
            <Route exact path = "/blog/mie" component = {Notfound}/>
            <Route exact path = "/blog/wakayama" component = {Notfound}/>
            <Route exact path = "/blog/shiga" component = {Notfound}/>
            <Route exact path = "/blog/hyogo" component = {Notfound}/>

            <Route exact path = "/blog/totori" component = {Notfound}/>
            <Route exact path = "/blog/shimane" component = {Notfound}/>
            <Route exact path = "/blog/hiroshima" component = {Notfound}/>
            <Route exact path = "/blog/okayama" component = {Notfound}/>
            <Route exact path = "/blog/yamaguchi" component = {Notfound}/>
            <Route exact path = "/blog/kagawa" component = {Notfound}/>
            <Route exact path = "/blog/tokushima" component = {Notfound}/>
            <Route exact path = "/blog/ehime" component = {Notfound}/>
            <Route exact path = "/blog/kochi" component = {Notfound}/>

            <Route exact path = "/blog/fukuoka" component = {Notfound}/>
            <Route exact path = "/blog/nagasaki" component = {Notfound}/>
            <Route exact path = "/blog/kagoshima" component = {Notfound}/>
            <Route exact path = "/blog/kumamoto" component = {Notfound}/>
            <Route exact path = "/blog/saga" component = {Notfound}/>
            <Route exact path = "/blog/oita" component = {Notfound}/>
            <Route exact path = "/blog/miyazaki" component = {Notfound}/>
            <Route exact path = "/blog/okinawa" component = {Notfound}/>

            <Route exact path = "/blog/minsk" component = {Minsk}/>
            <Route exact path = "/blog/grodno" component = {Grodno}/>
            <Route exact path = "/blog/brest" component = {Brest}/>
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