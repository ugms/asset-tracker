import React, { Component } from "react";
import "./Login.css";
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
    let value = e.target.value;
 
    console.log(param);

    if (param === "name") {
    }
  };

  render() {
    return (
      <div>

        <div>

          <div class="blackbg"></div>
          <div class="orangebg">
            <img src="https://i.ibb.co/0GR3kX3/upwardlyglobal.png"
              className="logo"
            /></div>
          <section id="login">
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
                  <div class="loginbutton">
                    <Button text="LOGIN" onClick={this.handleSubmit} /></div>

                  <div className='signup_link'>
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
      </div >
    );
  }
}
export default Login;