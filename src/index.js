'use strict';

import './style.scss';


import React from 'react';
import ReactDOM from 'react-dom';
import AppRoutes from './appRoutes';

window.onload = () => {
    ReactDOM.render(<AppRoutes/>, document.getElementById('main'));
}
