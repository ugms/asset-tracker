import React, { Component } from "react";
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

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: { value: "" },
      password: { value: "" }
    };
  }

  handleInput(param, e) {
    const { value } = e.target;

    console.log(param);

    if (param === "name") {
    }
  };

  render() {
    return (
      <div>

        <div>

          <div className="blackbg" />
          <div className="orangebg">
            <img
              src="https://i.ibb.co/0GR3kX3/upwardlyglobal.png"
              alt='upwardly global logo'
              className="logo"
            />
          </div>
          <section id="login">
            <div className="container ">

              <div className="card">

                <div className="card-title">

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
                  <div className="loginbutton">
                    <Button type='submit ' text="LOGIN" onClick={this.handleSubmit} />
                  </div>

                  <div className='register_link_container'>
                    <Link to="/Register" className="register_link">
                      Don't have an account?
                      <br />

                      <span className='register_now_span'>  Register Now</span>
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