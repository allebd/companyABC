import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import Footer from '../layout/Footer/Footer';

const Router = () => (
  <>
    <Switch>
      <Route exact path="/" component={LandingPage} />
    </Switch>
    <Footer />
  </>
);

export default Router;
