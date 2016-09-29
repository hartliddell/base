import Preview from './preview';
import React, { Component } from 'react';

export default class ManageContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pageTitle: 'Manage Content'
        }
    }

    render() {
        return (
            <section className="mc">
                <header className="mc__header">
                    <h1 className="mc__header__title">{ this.state.pageTitle }</h1>
                    <a href="#">Add New</a>
                </header>
                <main className="mc__content">
                    <Preview />
                    <Preview />
                </main>
                <footer></footer>
            </section>
        );
    }
}
