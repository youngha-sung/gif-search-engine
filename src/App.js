import React, { useContext, useState,  } from 'react';
import {
    Grid,
    SearchBar,
    SearchContext,
    SearchContextManager,
} from '@giphy/react-components'
import './App.css';

const giphyApiKey = "GZKGwdu6xlIM0iV58yFKJOFLqj0NLXFw";

function App() {
    const [favorites, setFavorites] = useState([]);
    const handleGifClick = (gif) => {
        setFavorites([...favorites, gif.id]);
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

    return (
        <div className="App">
            <SearchContextManager apiKey={giphyApiKey}>
                <Components />
            </SearchContextManager>
        </div>
    );
}

export default App;
