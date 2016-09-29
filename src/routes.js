'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout';
import ManageContent from './components/mc';
import Content from './components/content';

const routes = (
  <Route path="/" component={Layout}>
      <IndexRoute component={ManageContent} />
      <Route path="/content/:id" component={Content} />
  </Route>
);

export default routes;
