import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import PostDetails from '../pages/PostDetails';
import { useStyles } from './Routes.styles';

/**
 * Routes component is where we can define the routes of our application.
 * Rightnow, there is only one route but this component gives us the ability to scale
 * the app in terms of number of routes.
 */
const Routes =  () => {
  const styles = useStyles();
  return (
    <div className={styles.routeWrapper}>
      <Router>
        <Switch>
          <Route path="/post-details">
            <PostDetails />
          </Route>
          <Redirect to="/post-details" />
        </Switch>
      </Router>
    </div>
  )
};

export default Routes;
