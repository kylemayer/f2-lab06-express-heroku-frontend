import React, { Component } from 'react'
import './App.css'
import Header from './Header'
import Body from './DuckBody'

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
      </div>
    );
  }
}