import React, { useContext, useState, } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import {
    Grid,
    SearchBar,
    SearchContext,
    SearchContextManager,
} from '@giphy/react-components'
import './App.css';
import { GiphyFetch } from "@giphy/js-fetch-api/dist/index";

const giphyApiKey = "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw";

function App() {
    const [ favorites, setFavorites ] = useState([]);

    React.useEffect(() => {
        const data = localStorage.getItem("favorites");
        const favorites = data ? JSON.parse(data) : [];
        setFavorites(favorites)
    }, [])

    React.useEffect(() => {
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }, [ favorites ])

    const handleGifClick = (gif) => {
        setFavorites([ ...favorites, gif.id ]);
    }

    const Components = () => {
        const { fetchGifs, searchKey } = useContext(SearchContext)
        return (
            <>
                <SearchBar />
                <Grid
                    key={searchKey}
                    columns={3}
                    width={800}
                    fetchGifs={fetchGifs}
                    noLink="true"
                    hideAttribution="true"
                    onGifClick={(gif) => handleGifClick(gif)}
                />
            </>
        )
    }
    const Favorites = () => {
        const gf = new GiphyFetch(giphyApiKey)
        const gifs = () => gf.gifs(favorites);

        return (
            <Grid
                // key={searchKey}
                columns={3}
                width={800}
                fetchGifs={gifs}
                noLink="true"
                hideAttribution="true"
                onGifClick={(gif) => handleGifClick(gif)}
            />
        )
    }

    const Header = () => {
        return (
            <div>
                <Link to={{ pathname: '/' }}>
                    Search
                </Link>
                <Link to={{ pathname: '/favorites' }}>
                    Favorites
                </Link>
            </div>
        );
    }

    return (
        <Router>
            <div className="App">
                <Header />
                <Switch>
                    <Route exact path="/">
                        <SearchContextManager apiKey={giphyApiKey}>
                            <Components />
                        </SearchContextManager>
                    </Route>
                    <Route exact path="/favorites">
                        <Favorites />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
