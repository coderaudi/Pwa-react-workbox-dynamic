
import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import Home from './routes/home';
import Dashboard from './routes/dashboard';
import About from './routes/about';
import Help from './routes/help';
import Admin from "./routes/admin";

const MainMenu = () => {
    return (
        <div>
            <Link to="/">
                <button>home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/dashboard">
                <button>Notifications </button>
            </Link>
            <Link to="/help">
                <button>Help</button>
            </Link>
            <Link to="/admin">
                <button>Admin</button>
            </Link>

        </div>
    );
};

class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">
                    <header className="App-header">
                        <h1 className="App-title">Welcome to React-PWA-WOKRBOX</h1>
                        <MainMenu />
                    </header>
                    <div>
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/home" component={Home} />
                            <Route exact path="/about" component={About} />
                            <Route exact path="/dashboard" component={Dashboard} />
                            <Route exact path="/help" component={Help} />
                            <Route exact path="/admin" component={Admin} />

                        </Switch>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;