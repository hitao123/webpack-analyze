import React, { Component } from 'react';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


const Home = function(location, callback) {
    require.ensure([], function(require) {
      callback(null, require('./components/Home'));
    }, 'home');
};

const List = function(location, callback) {
    require.ensure([], function(require) {
      callback(null, require('./components/List'));
    }, 'list');
};

const Page = function(location, callback) {
    require.ensure([], function(require) {
      callback(null, require('./components/Page'));
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