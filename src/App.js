import React, { Component } from 'react';
import './App.css';
import { Link, BrowserRouter as Router, Route } from 'react-router-dom';
import Register from './register';


class App extends Component {
  render() {
    return (
      <Navigation />
    );
  }
}

// Navigation 
class Navigation extends Component {
  render() {
    return (
      <Router>
        <div className="header clearfix">
          <nav className="navbar navbar-default navbar-fixed-top">
            <div className="container-fluid">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#main-navigation" aria-expanded="false">
                  <span className="sr-only">Toggle nav</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand page-scroll" href="/">BucketList</a>
              </div>
              <div className="collapse navbar-collapse" id="main-navigation">
                <ul className="nav navbar-nav navbar-right">
                  <li>
                    <Link to="/" className="page-scroll">Home</Link>
                  </li>
                  <li>
                    <Link to="/auth/register" className="page-scroll">Register</Link>
                  </li>
                  <li>
                    <Link to="/login" className="page-scroll">Login</Link>
                  </li>
                  <li>
                    <Link to="/bucketlist-bucket" className="page-scroll">Buckets</Link>
                  </li>
                </ul>
              </div>
            </div>
          </nav>

          {/* Define path for the other pages:
      Register, Login, Buckets, Activities
       */}
          <Route exact path="/" component={Home} />
          <Route path="/auth/register" component={Register} />
        </div>
      </Router>
    );
  }
}
class Home extends Component {
  render() {
    return (
      <header>
        <div className="header-content">
          <div className="header-content-inner">
            <h1 id="homeHeading"> Bucketlist Application </h1>
            <hr />
            <p>Bucket list application helps you record all goals you wish to achieve,dreams you want to fulfill and life experiences
				      you desire to experience before you hit the bucket. Register to get started!!!
			      </p>
            <a href="/auth/register" className="btn btn-primary btn-xl page-scroll" id="register"> Register </a>
          </div>
        </div>
      </header>
    );
  }
}


export default App;
