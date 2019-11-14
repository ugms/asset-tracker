import React, { Component } from "react";
<<<<<<< HEAD
import "./Login.scss";
import { Link } from "react-router-dom";

const Input = props => (
  <input
    className="c-input"
    type={props.type}
    placeholder={props.placeholder}
    onKeyUp={props.onKeyUp}
  />
);

const Button = props => (
  <button className="c-button" onClick={props.onClick}>
    {props.text}
  </button>
);
=======
import { Link, Redirect } from "react-router-dom";
import "./Login.scss";
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      userLoggedIn: false,
    };
  }

<<<<<<< HEAD
  handleInput(param, e) {
    let value = e.target.value;

    console.log(param);

    if (param === "name") {
    }
  };
=======
  componentDidMount() {
    console.log('I was triggered during componentDidMount')
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state
    const data = { username, password }
    console.log(data)
    fetch('/users', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }).then((res) => {
      const response = res.json()
      console.log(response, "Testing")
      this.setState({ userLoggedIn: true })
    }).catch((err) => {
      console.log(err)
    })
  }

>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1

  render() {
    const { username, password, userLoggedIn } = this.state
    return (
      <div>
<<<<<<< HEAD

        <div>

          <div class="blackbg"></div>
          <div class="orangebg">
            <img src="https://i.ibb.co/0GR3kX3/upwardlyglobal.png"
              className="logo"
            /></div>
          <section id="login">
=======
        {userLoggedIn && <Redirect to="/Dashboard" />}


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
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1
            <div className="container ">

              <div className="card">

                <div className="card-title">

<<<<<<< HEAD
                  <h2>LOGIN</h2>
                </div>
                <div className="card-body">
                  <form className="form">
                    <Input
                      type="text"
                      placeholder="USERNAME"
                      value={this.state.email.value}
                      onKeyUp={e => this.handleInput("email", e)}
                    />
                    <Input
                      type="password"
                      placeholder="PASSWORD"
                      value={this.state.password.value}
                      onKeyUp={e => this.handleInput("password", e)}
                    />
                  </form>
                  <div class="loginbutton">
                    <Button text="LOGIN" onClick={this.handleSubmit} /></div>

                  <div className='signup_link_container'>
                    <Link to="/signup" className="signup_link">Don't have an account?<br /> <span className='register_now_span'>  Register Now</span>
=======
                  <h2>login</h2>
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
                  <div className="login_button">

                    <button
                      label="Button"
                      type="button"
                      className="c-button"
                      text="Login"
                      onClick={(e) => this.handleSubmit(e)}
                    >
                      Login
                    </button>

                  </div>

                  <div className='login_link_container'>
                    <Link to="/Register" className="registration_link">
                      Don't Have an Account?
                      <br />

                      <span className='register_now_span'>  Register Here</span>
>>>>>>> 80379dbc3b7e660d23047339943b545275ab24c1
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


export default Login;