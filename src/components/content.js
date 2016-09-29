'use strict';

import Preview from './preview';
import React, { Component } from 'react';
import data from '../../data';

export default class ManageContent extends Component {
    constructor(props) {
        super(props);
        this.state = props.params;
    }


    render() {
        return (
            <section className="mc">
                <header className="mc__header">
                    <h1 className="mc__header__title">
                        { data.content[this.state.id].title }
                    </h1>
                    <a href="#">Add New</a>
                </header>
                <main className="mc__content">
                    Put info here
                </main>
                <footer></footer>
            </section>
        );
    }
}
