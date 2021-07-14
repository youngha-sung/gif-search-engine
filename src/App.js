import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import Favorites from './components/favorites';

function App() {
    const [ favorites, setFavorites ] = useState([]);

    React.useEffect(() => {
        const data = localStorage.getItem('favorites');
        const favorites = data ? JSON.parse(data) : [];
        setFavorites(favorites)
    }, [])

    React.useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [ favorites ])

    const handleGifClick = (gif) => {
        setFavorites([ ...favorites, gif.id ]);
    }

    return (
        <Router>
            <div className='App'>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Search handleGifClick={handleGifClick} />
                    </Route>
                    <Route exact path='/favorites'>
                        <Favorites handleGifClick={handleGifClick}/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
