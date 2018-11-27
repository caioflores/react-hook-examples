import React, { Component } from 'react'
import './App.css'
import ListHooks from './examples/List/ListHooks'
import List from './examples/List/List';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="GridColumn">
          <div className="Container">
            <ListHooks />
          </div>
        </div>
        <div className="GridColumn">
          <div className="Container">
            <List />
          </div>
        </div>
      </div>
    )
  }
}

export default App
