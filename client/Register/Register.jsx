import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Register.scss";


// const Input = props => (
//   <input
//     className="c-input"
//     type={props.type}
//     placeholder={props.placeholder}
//     onKeyUp={props.onKeyUp}
//   />
// );

// const Button = props => (
//   <button className="c-button" onClick={props.onClick}>
//     {props.text}
//   </button>
// );

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }

  handleSubmit(e) {
    e.preventDefault();
    // const data = { username: this.state.username, password: this.state.password };
    const { username, password } = this.state
    const data = { username, password }
    console.log(data)
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => {
      const response = res.json()
      console.log(response)
    }).catch((err) => {
      console.log(err)
    })
  }


  render() {
    const { username, password } = this.state
    return (
      <div>

        <div>

          <div className="blackbg" />
          <div className="orangebg">
            <img
              src="https://i.ibb.co/0GR3kX3/upwardlyglobal.png"
              className="logo"
              alt='upwardly global logo'
            />
          </div>
          <section id="register">
            <div className="container ">

              <div className="card">

                <div className="card-title">

                  <h2>register</h2>
                </div>
                <div className="card-body">
                  <div className="form">

                    <input
                      className="c-input"
                      type="text"
                      placeholder="USERNAME"
                      value={username}
                      onChange={e => this.setState({ username: e.target.value })}
                    />

                    <input
                      className="c-input"
                      type="password"
                      placeholder="PASSWORD"
                      value={password}
                      onChange={e => this.setState({ password: e.target.value })}
                    />

                  </div>
                  <div className="register_button">

                    <button
                      label="Button"
                      type="button"
                      className="c-button"
                      text="Register"
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Register
                    </button>

                  </div>

                  <div className='login_link_container'>
                    <Link to="/Login" className="login_link">
                      Already Have an Account?
                      <br />

                      <span className='register_now_span'>  Login Here</span>
                    </Link>
                  </div>


                </div>
              </div>
            </div>

          </section>

        </div>
      </div>
    );
  }
}


export default Register;