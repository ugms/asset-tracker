import React, { Component } from 'react'

class Table extends Component {
  constructor(props) {
    super(props) //since we are extending class Table so we have to use super in order to override Component class constructor
    this.state = { //state is by default an object
      assets: []
    }
  }

  componentDidMount() {
    fetch('http://localhost:3000/assets')
      .then((res) => {
        return res.json()
      })
      .then((data) => {
        console.log(data)
        this.setState({ assets: data })
      })
      .catch((error) => {
        console.log(error.message)
      })
  }

  renderTableData() {
    return this.state.assets.map((item) => {
      const { chassie, current_user, previous_user } = assets //destructuring
      return (
        <tr key={id}>
          <td>{id}</td>
          <td>{chassie}</td>
          <td>{current_user}</td>
          <td>{previous_user}</td>
        </tr>
      )
    })
  }

  render() { //Whenever our class runs, render method will be called automatically, it may have already defined in the constructor behind the scene.
    return (
      <div>
        <h1 id='title'>React Dynamic Table</h1>
        <table id='students'>
          <tbody>
            {this.renderTableData()}
          </tbody>
        </table>
      </div>
    )
  }
}

export default Table //exporting a component make it reusable and this is the beauty of react