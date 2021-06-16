import React, { Component } from 'react'
import logo from './duck-logo.jpeg'

export default class Header extends Component {
    render() {
        return (
            <>
                <div className="header">
                    <img src={logo} alt="duck" />
                    <h1>Duck API</h1>
                </div>
            </>
        )
    }
}
