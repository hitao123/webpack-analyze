import React from 'react';

// const List = () => import('./components/List');
// const NoFound = () => import('./components/NotFound');
// const Home = () => import('./components/Home');
// const Page = () => import('./components/Page');

import RouteComponent from './router';
export default class App extends React.Component {
    render() {
        return (
            // <Router>
            //     <Switch>
            //         <Route path="/" exact component={Home} />
            //         <Route
            //             path="/home"
            //             component={Home}
            //         />
            //         <Route
            //             path="/page"
            //             component={Page}
            //         />
            //         <Route
            //             path="/list"
            //             component={List}
            //         />
            //         <Route component={NoFound} />
            //     </Switch>
            // </Router>
            <div>
                <RouteComponent />
            </div>
        )
    }
}