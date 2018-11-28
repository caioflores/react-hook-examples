import React, { Component } from 'react'

class Loading extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.value !== this.props.value
  }

  renderLoading() {
    if (this.props.value) {
      return (
        <div className="lds-ring">
          <div />
        </div>
      )
    }
    return false
  }

  render() {
    return this.renderLoading()
  }
}

export default Loading
