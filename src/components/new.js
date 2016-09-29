'use strict';

import Preview from './preview';
import React, { Component } from 'react';
import data from '../../data';

export default class ManageContent extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <section className="mc">
                <header className="mc__header">
                    <h1 className="mc__header__title">
                        Add New
                    </h1>
                    <a href="#">Add New</a>
                </header>
                <main className="mc__content">
                    Create New Item Here
                </main>
                <footer></footer>
            </section>
        );
    }
}
