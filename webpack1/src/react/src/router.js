import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory, Link } from 'react-router';


const Home = (location, callback) => {
    require.ensure([], function(require) {
      callback(null, require('./components/Home').default);
    }, 'home');
};

const List = (location, callback) => {
    require.ensure([], function(require) {
      callback(null, require('./components/List').default);
    }, 'list');
};

const Page = (location, callback) => {
    require.ensure([], function(require) {
      callback(null, require('./components/Page').default);
    }, 'page');
};

class Root extends Component {
    render() {
        return(
            <div>
                {this.props.children}
            </div>
        )
    }
}

class App extends Component {
    render() {
        return (
            <div>
                <Link to="/">/</Link>
                <Link to="/home">home</Link>
                <Link to="/list">list</Link>
                <Link to="/page">page</Link>
            </div>
        )
    }
}


const RouteConfig = (
    <Router history={hashHistory}>
        <Route path="/" component={Root}>
            <IndexRoute component={App} />
            <Route path="/home" getComponent={Home} />
            <Route path="/list" getComponent={List} />
            <Route path="/page" getComponent={Page} />
        </Route>
    </Router>
);

export default RouteConfig