import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: "",
      onSubmit: props.onSubmit
    };
  }

  usernameChangeHandler = e => {
    this.setState({
      username: e.target.value
    });
  };

  passwordChangeHandler = e => {
    this.setState({
      password: e.target.value
    });
  };

  submissionHandler = e => {
    e.preventDefault();
    if (this.state.username.length > 0 && this.state.password.length > 0) {
      let toSubmit = {
        username: this.state.username,
        password: this.state.password
      };
      this.state.onSubmit(toSubmit);
    }
  };

  render() {
    return (
      <form onSubmit={this.submissionHandler}>
        <div>
          <label>
            Username
            <input
              id="test-username"
              type="text"
              value={this.state.username}
              onChange={this.usernameChangeHandler}
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
              onChange={this.passwordChangeHandler}
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
