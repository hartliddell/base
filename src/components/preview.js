import { Router, Route, Link } from 'react-router';
import React, { Component } from 'react';
import Switch from './switch';
import icons from './icons';

export default class Preview extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <article className="mc__content__preview">
                <div className="hamburger"></div>
                <div>{ icons[this.props.type] }</div>
                <div className="mc__content__preview__title">
                    <Link to={`/content/${this.props.id}`}>
                        { this.props.title }
                    </Link>
                </div>
                <div className="mc__content__preview__toggle">
                    <Switch active={ this.props.active } />
                </div>
            </article>
        );
    }
}
