import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  handleChange = e => {
    console.log(e.target);
    const { name, value } = e.target;
    console.log(name);
    console.log(value);
    this.setState({
      [name]: value,
    });
    // e.preventDefualt();
    // this.setState({
    //   username: e.target.username,
    //   password: e.target.password
    // })
  }

  handleFormSubmit = e => {
    e.preventDefault();
    const {username, password} = this.state;
    if(!username || !password) {
      return;
    }

    this.props.onSubmit({username, password});
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
