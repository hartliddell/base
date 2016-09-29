import React, { Component } from 'react';

export default class Switch extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <label className="switch">
                <input type="checkbox" defaultChecked={ this.props.active } />
                <div className="slider round"></div>
            </label>
        );
    }
}
