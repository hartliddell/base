import './style.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ManageContent from './components/mc';
import data from '../data';

class App extends Component {
    render() {
        return (
            <div>
                <ManageContent {...data} />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('main'));
