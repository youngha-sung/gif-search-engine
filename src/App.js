import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import styled from 'styled-components';
import './App.css';
import Header from './components/header';
import Search from './components/search';
import Favorites from './components/favorites';

const Wrapper = styled.div`
    padding: 20px;
`;

function App() {
    return (
        <Router>
            <Wrapper>
                <Header />
                <Switch>
                    <Route exact path='/'>
                        <Search />
                    </Route>
                    <Route exact path='/favorites'>
                        <Favorites />
                    </Route>
                </Switch>
            </Wrapper>
        </Router>
    );
}

export default App;
