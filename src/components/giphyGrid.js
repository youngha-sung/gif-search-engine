import React, { useState } from 'react';
import {
    Grid,
} from '@giphy/react-components'
import ResizeObserver from 'react-resize-observer';
import styled from 'styled-components';

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

function GiphyGrid({ fetchGifs, searchKey, handleGifClick, overlayText = '' }) {
    const [ width, setWidth ] = useState(window.innerWidth);
    const overlay = ({ gif, isHovered }) => {
        return <div className={`overlay ${isHovered ? 'active' : ''}`}>{isHovered && overlayText}</div>
    }

    return (
        <Wrapper>
            <Grid
                key={searchKey}
                columns={3}
                width={width}
                gutter={6}
                fetchGifs={fetchGifs}
                noLink='true'
                hideAttribution='true'
                initialGifs={[]}
                onGifClick={(gif) => handleGifClick(gif)}
                overlay={overlay}
            />
            <ResizeObserver
                onResize={({ width }) => {
                    setWidth(width);
                }}
            />
        </Wrapper>
    );
}

export default GiphyGrid;
