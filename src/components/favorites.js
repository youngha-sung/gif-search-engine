import React, { useState, useEffect } from 'react';
import { GiphyFetch } from '@giphy/js-fetch-api/dist/index';
import { GIPHY_API_KEY } from '../constants';
import GiphyGrid from '../components/giphyGrid';

const gf = new GiphyFetch(GIPHY_API_KEY)

function Favorites() {
    const localData = JSON.parse(localStorage.getItem('favorites')) || {};
    const [ favorites, setFavorites ] = useState(localData);
    const [ key, setKey ] = useState('');

    useEffect(() => {
        const dateTime = Date.now();
        const timestamp = Math.floor(dateTime / 1000);
        setKey(timestamp);
    }, [favorites]);

    const handleGifClick = (gif) => {
        const updatedFavorites = favorites.filter(x => x !== gif.id);
        localStorage.setItem("favorites", JSON.stringify(updatedFavorites));
        setFavorites(updatedFavorites);
    }
    const fetchGifs = () => gf.gifs(favorites);

    return (
        <GiphyGrid
            fetchGifs={fetchGifs}
            searchKey={key}
            handleGifClick={handleGifClick}
            overlayText='REMOVE'
        />
    );
}

export default Favorites;
