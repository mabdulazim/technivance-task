import React, {Suspense} from 'react';
import { Switch, BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import reducer from './_reducers';

const MainLayout = React.lazy(() => import('./views/layout/mainLayout'));
const LeagueList = React.lazy(() => import('./views/league/leagueList'));
const LeagueShow = React.lazy(() => import('./views/league/leagueShow'));
const TeamShow   = React.lazy(() => import('./views/team/teamShow'));

const AppRoute = ({ title, component: Component, layout: Layout, ...rest }) => (
    <Route {...rest} render={props => (
      <Layout title={title}>
        <Component {...props} />
      </Layout>
    )} />
);

const store = createStore(reducer, {}, applyMiddleware(ReduxThunk));

export default () => 
{
    return (
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<div>Loading...</div>}>
                    <Switch>
                        <AppRoute 
                            exact 
                            path="/" 
                            layout={MainLayout} 
                            component={LeagueList} 
                        />
                        <AppRoute 
                            exact 
                            path="/leagues/:id" 
                            layout={MainLayout} 
                            component={LeagueShow} 
                        />
                        <AppRoute 
                            exact 
                            path="/teams/:id" 
                            layout={MainLayout} 
                            component={TeamShow} 
                        />
                        <Redirect to={`/`} />
                    </Switch>
                </Suspense>
            </BrowserRouter>
        </Provider>
    );
}