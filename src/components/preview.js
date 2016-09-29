import React, { Component } from 'react';
import Switch from './switch';
import icons from './icons';

export default class ManageContent extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="mc__content__preview">
                <div className="hamburger"></div>
                <div>{ icons.link() }</div>
                <div className="mc__content__preview__title">Title</div>
                <div className="mc__content__preview__toggle">
                    <Switch />
                </div>
            </article>
        );
    }
}
