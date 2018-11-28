import React, { Component } from 'react'
import './List.css'

class List extends Component {
  constructor(props) {
    super(props)
    this.state = {
      firstName: 'João',
      secondName: 'Ana'
    }
  }

  handleFirstNameChange = e => {
    this.setState({
      firstName: e.target.value
    })
  }

  handleSecondNameChange = e => {
    this.setState({
      secondName: e.target.value
    })
  }

  render() {
    return (
      <div className="List">
        <div className="ListRow">
          <input
            value={this.state.firstName}
            onChange={e => this.handleFirstNameChange(e)}
          />
        </div>
        <div className="ListRow">
          <input
            value={this.state.secondName}
            onChange={e => this.handleSecondNameChange(e)}
          />
        </div>
      </div>
    )
  }
}

export default List
