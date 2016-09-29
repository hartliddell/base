'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout';
import ManageContent from './components/mc';
import Content from './components/content';
import New from './components/new';

const routes = (
  <Route path="/" component={Layout}>
      <IndexRoute component={ManageContent} />
      <Route path="/content/:id" component={Content} />
      <Route path="/content/new" component={New} />
  </Route>
);

export default routes;
