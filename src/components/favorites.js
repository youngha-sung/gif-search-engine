import React from 'react';
import { Grid } from '@giphy/react-components';
import { GiphyFetch } from '@giphy/js-fetch-api/dist/index';
import { GIPHY_API_KEY } from '../constants';

function Favorites({ handleGifClick }) {
    const data = localStorage.getItem('favorites');
    const favorites = data ? JSON.parse(data) : [];
    const gf = new GiphyFetch(GIPHY_API_KEY)
    const gifs = () => gf.gifs(favorites);

    return (
        <Grid
            // key={searchKey}
            columns={3}
            width={800}
            fetchGifs={gifs}
            noLink='true'
            hideAttribution='true'
            onGifClick={(gif) => handleGifClick(gif)}
        />
    );
}

export default Favorites;
