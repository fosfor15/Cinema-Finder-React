import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Main from './pages/Main';
import Favorites from './pages/Favorites';

import './styles/App.css';
import favoriteIcon from './icons/favorite-big.png';


function App() {
    return (
        <div id="App">
            <h1>Cinema Finder</h1>
            <Router>
                <nav>
                    <Link
                        to="/cinema-finder-react/"
                        className="link"
                        id="search-link"
                    >
                        <h4>Let's find some new cinema</h4>
                    </Link>
                    <Link
                        to="/cinema-finder-react/favorites"
                        id="favorite-icon"
                    >
                        <img
                            src={ favoriteIcon }
                            alt="Favorites button"
                        />
                    </Link>
                </nav>
                <Switch>
                    <Route
                        exact
                        path="/cinema-finder-react/"
                        component={ Main }
                    />
                    <Route
                        path="/cinema-finder-react/favorites"
                        component={ Favorites }
                    />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
