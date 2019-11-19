import React, { Component } from "react";
import { Link, Redirect } from "react-router-dom";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      userLoggedIn: false
    };
  }

  componentDidMount() {
    console.log("I was triggered during componentDidMount");
  }

  handleSubmit(e) {
    e.preventDefault();
    const { username, password } = this.state;
    const data = { username, password };
    console.log(data);
    fetch("/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    })
      .then(res => {
        const response = res.json();
        console.log(response, "Testing");
        this.setState({ userLoggedIn: true });
      })
      .catch(err => {
        console.log(err);
      });
  }

  render() {
    const { username, password, userLoggedIn } = this.state;
    return (
      <div>
        {userLoggedIn && <Redirect to="/Dashboard" />}

        <div>
          <div className="blackbg" />
          <div className="orangebg">
            <img
              src="https://i.ibb.co/0GR3kX3/upwardlyglobal.png"
              className="logo"
              alt="upwardly global logo"
            />
          </div>
          <section id="register">
            <div className="container ">
              <div className="card">
                <div className="card-title">
                  <h2>login</h2>
                </div>
                <div className="card-body">
                  <div className="form">
                    <input
                      className="c-input"
                      type="text"
                      placeholder="USERNAME"
                      value={username}
                      onChange={e =>
                        this.setState({ username: e.target.value })}
                    />

                    <input
                      className="c-input"
                      type="password"
                      placeholder="PASSWORD"
                      value={password}
                      onChange={e =>
                        this.setState({ password: e.target.value })}
                    />
                  </div>
                  <div className="login_button">
                    <button
                      label="Button"
                      type="button"
                      className="c-button"
                      text="Login"
                      onClick={e => this.handleSubmit(e)}
                    >
                      Login
                    </button>
                  </div>

                  <div className="login_link_container">
                    <Link to="/Register" className="registration_link">
                      Don't Have an Account?
                      <br />
                      <span className="register_now_span"> Register Here</span>
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
