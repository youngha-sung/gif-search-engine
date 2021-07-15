import React, { useContext } from 'react';
import {
    SearchBar,
    SearchContext,
    SearchContextManager,
} from '@giphy/react-components'
import styled from 'styled-components';
import GiphyGrid from '../components/giphyGrid';
import { GIPHY_API_KEY } from '../constants';

const Wrapper = styled.div`
    .giphy-gif {
        cursor: pointer;
    }
    
    .overlay.active {
        position: absolute;
        left: 0;
        top: 0;
        right: 0;
        bottom: 0;
        background: rgba(0, 0, 0, 0.5);
        display: flex;
        color: white;
        justify-content: center;
        align-items: center;
        font-weight: bold;
    }
`;

const StyledSearchBar = styled(SearchBar)`
    margin-bottom: 40px;
`;

function Search() {
    const handleGifClick = (gif) => {
        const data = localStorage.getItem('favorites');
        const favorites = data ? JSON.parse(data) : [];
        const updatedFavorites = [ ...favorites, gif.id ];
        localStorage.setItem('favorites', JSON.stringify(updatedFavorites));
    }

    const Components = () => {
        const { fetchGifs, searchKey } = useContext(SearchContext);
        return (
            <Wrapper>
                <StyledSearchBar />
                <GiphyGrid
                    fetchGifs={fetchGifs}
                    searchKey={searchKey}
                    handleGifClick={handleGifClick}
                    overlayText='ADD TO FAVORITES'
                />
            </Wrapper>
        )
    }

    return (
        <SearchContextManager apiKey={GIPHY_API_KEY}>
            <Components />
        </SearchContextManager>
    );
}

export default Search;
