import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = { username: "", password: "" };
  }
  handleUsername = event => {
    this.setState({ ...this.state, username: event.target.value });
  };
  handlePassword = event => {
    this.setState({ ...this.state, password: event.target.value });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.username && this.state.password) {
      this.props.onSubmit();
    }
  };

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.handleUsername}
            />
          </label>
        </div>
        <div>
          <label>
            Password
            <input
              id="test-password"
              type="password"
              value={this.state.password}
              onChange={this.handlePassword}
            />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
