import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Main_page from './main_page';
import Service from './service';
import Favorites from './favorites';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Main_page} />
    <Route path="/service" component={Service} />
    <Route path="/favorites" component={Favorites} />
  </Switch>
)


export default Main;
