import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./Login.css";

const Input = props => (
  <input
    className="c-input"
    type={props.type}
    placeholder={props.placeholder}
    onKeyUp={props.onKeyUp}
  />
);

const Button = props => (
  <button className="c-button" onClick={props.onClick} type="button">
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

  // handleInput = (param, e) => {
  //   const { value } = e.target;

  //   console.log(param);

  //   if (param === "name") {
  //   }
  // };

  render() {
    return (
      <div>
        <div className="blackbg" />
        <div className="orangebg">
          <img
            src="https://i.ibb.co/0GR3kX3/upwardlyglobal.png"
            className="logo"
            width="200px"
            alt=""
          />
        </div>
        <section id="signup">
          <div className="container ">
            {/* <div className="row"> */}
            {/* <div className="col-md-10 mx-auto"> */}
            <div className="card">
              {/* <div className="row mr-0 ml-0 d-flex h-100"> */}

              {/* <div className="col-md-6 form"> */}
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
                <div className="plsgod">
                  <Button text="LOGIN" onClick={this.handleSubmit} />
                </div>
                <div className="plsbutton">
                  <Link to="/signup" className="navbar__link">
                    Don't have an account? Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* </div>{" "} */}
          {/* End of card */}
          {/* </div> */}
          {/* </div> */}
          {/* </div> */}
        </section>
      </div>
    );
  }
}

export default Login;
