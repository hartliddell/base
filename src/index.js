import './style.scss';

import React, { Component } from 'react';
import ReactDom from 'react-dom';
import ManageContent from './components/mc';

class App extends Component {
    render() {
        return (
            <div>
                <ManageContent />
            </div>
        )
    }
}

ReactDom.render(<App />, document.getElementById('main'));
