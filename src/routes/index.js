import React from 'react';
import { Switch, Route, Redirect} from 'react-router-dom';

import {
    Home
} from '../pages';

const routes =[
    {
      path: '/',
      component: (props) => <Home category='newstories' {...props}/>,
      exact: true,
      noLogin: true
    }
] 

const withAuth = BaseComponent => {
    const withAuth = props => {
        return <BaseComponent {...props}  />
     }
     return withAuth
}

const renderRoute = () => {
    return routes.map(
      ({ path, component: Component, exact, noLogin, loggedIn }) => {
        if (noLogin) {
          return (
            <Route
              exact={exact}
              key={path}
              path={path}
              component={withAuth(props =>
                props.token ? (
                  <Redirect to={{ pathname: '/' }} />
                ) : (
                    <Component {...props} />
                  )
              )}
            />
          )
        }
  
        if (loggedIn) {
          return (
            <Route
              exact={exact}
              key={path}
              path={path}
              component={withAuth(props =>
                props.token ? (
                  <Component {...props} />
                ) : (
                    <Redirect to={{ pathname: '/' }} />
                  )
              )}
            />
          )
        }
  
        return (
          <Route exact={exact} key={path} path={path} component={Component} />
        )
      }
    )
  }
  
  export default function Routes() {
    return (
        <Switch>
          {renderRoute()}
          <Redirect to='/not-found' />
        </Switch>
    )
  }