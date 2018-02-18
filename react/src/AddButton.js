import React, { Component } from 'react'

class AddButton extends Component {
  state = {
    value: ''
  }
  onChange = ({ target: { value } }) => {
    this.setState({
      value
    })
  }
  onKeyDown = ({ keyCode }) => {
    const { addTodo } = this.props
    const { value } = this.state
    switch (keyCode) {
      case 13:
        if (value.trim()) {
          addTodo(value)
        }
        this.setState({ value: '' })
        break
    }
  }
  render() {
    const { value } = this.state
    return (
      <input
        type="text"
        className="new-todo"
        placeholder="enter your todo here."
        value={value}
        onChange={this.onChange}
        onKeyDown={this.onKeyDown}
      />
    )
  }
}

module.exports = AddButton
