import React, { Component } from "react";
import fire from "./config/fire";

class Login extends Component {
  constructor(props) {
    super(props)
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this)
    this.signup = this.signup.bind(this)
    this.state = {
      email: "",
      password: "",
    }
  }

login(e) {
  e.preventDefault();
  fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
  .then((u) => {})
  .catch((err) => {
    console.log(err);
  })
}

signup(e) {
  e.preventDefault();
  fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).catch((error) => {
    console.log(error)
  })
}


handleChange(e) {
  this.setState({ [e.target.name] : e.target.value});
}

render() {
  return (
    <div>
    <form>
    <div>
    <label>Email address</label>
    <input value={this.state.email} onChange={this.handleChange} type="email" name="email" placeholder="Enter email" />
    </div>
    <div>
    <label>Password</label>
    <input value={this.state.password} onChange={this.handleChange} type="password" name="password" placeholder="password" />
    </div>
    <button type="submit" onClick={this.login} >Login</button>
    <button onClick={this.signup}>Signup</button>
    </form>
    </div>
    );
  }
}

export default Login;