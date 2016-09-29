'use strict';

import { Link } from 'react-router';
import React, { Component } from 'react';

export default class ManageContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="mc__header">
                <h1 className="mc__header__title">
                    { this.props.title }
                </h1>
                <Link to="/content/new">Add New</Link>
            </header>
        );
    }
}
