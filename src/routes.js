'use strict';

import React from 'react';
import { Route, IndexRoute } from 'react-router';
import Layout from './layout';
import ManageContent from './components/mc';

const routes = (
  <Route path="/" component={Layout}>
      <IndexRoute component={ManageContent} />
  </Route>
);

export default routes;
