import React, { Component } from 'react'
import './App.css'
import ListHooks from './examples/List/ListHooks'
import List from './examples/List/List'
import Loading from './examples/Loading/LoadingHooks'

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
    }, 3000)
  }

  render() {
    return (
      <div className="App">
        <div className="Row">
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
        <div className="Row">
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
