'use strict';

import { Link } from 'react-router';
import Preview from './preview';
import React, { Component } from 'react';
import Header from './header';
import data from '../../data';

export default class ManageContent extends Component {
    constructor(props) {
        super(props);
        const state = data;
        state.pageTitle = 'Manage Content';
        this.state = state;
    }

    createPreviews(previews) {
        return previews.map(function(preview, index) {
            return <Preview key={index} {...preview} />
        });
    }

    render() {
        return (
            <section className="mc">
                <header className="mc__header">
                    <h1 className="mc__header__title">{ this.state.pageTitle }</h1>
                    <Link to="/content/new">Add New</Link>
                </header>
                <main className="mc__content">
                    {this.createPreviews(this.state.content)}
                </main>
                <footer></footer>
            </section>
        );
    }
}
