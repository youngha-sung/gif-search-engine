import React, { useContext } from 'react';
import {
    Grid,
    SearchBar,
    SearchContext,
    SearchContextManager,
} from '@giphy/react-components'
import { GIPHY_API_KEY } from '../constants';

function Search({ handleGifClick }) {
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
                    noLink='true'
                    hideAttribution='true'
                    onGifClick={(gif) => handleGifClick(gif)}
                />
            </>
        )
    }

    return (
        <SearchContextManager apiKey={GIPHY_API_KEY}>
            <Components />
        </SearchContextManager>
    );
}

export default Search;
