import React, {lazy, Suspense} from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

const List = lazy(() => import('./components/List'));
const NoFound = lazy(() => import('./components/NotFound'));
const Home = lazy(() => import('./components/Home'));
const Page = lazy(() => import('./components/Page'));

// const List = () => import('./components/List');
// const NoFound = () => import('./components/NotFound');
// const Home = () => import('./components/Home');
// const Page = () => import('./components/Page');

const wrapSuspense = (Component, props) => {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <Component {...props}/>
        </Suspense>
    );
};

export default class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    router choose
                </div>
                <Link to="/">home</Link>
                <Link to="/home">home</Link>
                <Link to="/page">page</Link>
                <Link to="/list">list</Link>
                <Switch>
                    <Route path="/" exact component={props => wrapSuspense(Home, props)} />
                    <Route
                        path="/home"
                        component={props => wrapSuspense(Home, props)}
                    />
                    <Route
                        path="/page"
                        component={props => wrapSuspense(Page, props)}
                    />
                    <Route
                        path="/list"
                        component={props => wrapSuspense(List, props)}
                    />
                    <Route component={props => wrapSuspense(NoFound, props)} />
                </Switch>
            </Router>
        )
    }
}