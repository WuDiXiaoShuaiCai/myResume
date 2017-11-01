import 'babel-polyfill';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, Link } from '$router';
import HomePage from './home';
import yoHistory from '../common/history';

const List = require.async('./list');
const Record = require.async('./record');
const Project = require.async('./project');
const Mine = require.async('./mine');
const Home = require.async('./home');


const Root = () => (
    <Router history={yoHistory}>
        <Route path="/">
            <IndexRoute component={HomePage} />
            <Route path="home" getComponent={Home} />            
            <Route path="list" getComponent={List} />
            <Route path="record" getComponent={Record} />            
            <Route path="project" getComponent={Project}/>
            <Route path="mine" getComponent={Mine}/>            
        </Route>
    </Router>
);

ReactDOM.render(<Root />, document.getElementById('root'));
