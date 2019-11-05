import React, { Component } from "react";
import "./Register.scss";
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

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: { value: "" },
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
          <section id="register">
            <div className="container ">

              <div className="card">

                <div className="card-title">

                  <h2>register</h2>
                </div>
                <div className="card-body">
                  <form className="form">

                    <Input
                      type="text"
                      placeholder="NAME"
                      value={this.state.name.value}
                      onKeyUp={e => this.handleInput("name", e)}
                    />

                    <Input
                      type="text"
                      placeholder="USERNAME/Email"
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
                  <div class="register_button">
                    <Button
                      text="register" onClick={this.handleSubmit} /></div>

                  <div className='login_link_container'>
                    <Link to="/Login" className="login_link">Already Have an Account?<br /> <span className='register_now_span'>  Login Here</span>
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