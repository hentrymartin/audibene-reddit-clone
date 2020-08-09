import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import PostDetails from '../pages/PostDetails';
import { useStyles } from './Routes.styles';

const Routes =  () => {
  const styles = useStyles();
  return (
    <div className={styles.routeWrapper}>
      <Router>
        <Switch>
          <Route path="/post-details">
            <PostDetails />
          </Route>
        </Switch>
      </Router>
    </div>
  )
};

export default Routes;
