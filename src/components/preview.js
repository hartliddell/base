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
                <div className="mc__content__preview__title">{ this.props.title }</div>
                <div className="mc__content__preview__toggle">
                    <Switch active={ this.props.active } />
                </div>
            </article>
        );
    }
}
