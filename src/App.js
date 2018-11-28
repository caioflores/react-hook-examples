import React, { Component } from 'react'
import './App.css'
import ListHooks from './examples/List/ListHooks'
import List from './examples/List/List'
import LoadingHooks from './examples/Loading/LoadingHooks'
import Loading from './examples/Loading/Loading'

const TIMEOUT = 5000

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ loading: false })
    }, TIMEOUT)
  }

  render() {
    return (
      <div className="App">
        <div className="Row">
          <div className="GridColumn">
            <h1>Hooks</h1>
            <div className="Container">
              <ListHooks />
            </div>
          </div>
          <div className="GridColumn">
            <h1>Not hooks</h1>
            <div className="Container">
              <List />
            </div>
          </div>
        </div>
        <div className="Row">
          <div className="GridColumn">
            <div className="Container">
              <LoadingHooks value={this.state.loading} />
            </div>
          </div>
          <div className="GridColumn">
            <div className="Container">
              <Loading value={this.state.loading} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
