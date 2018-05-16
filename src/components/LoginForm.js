import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: '',
      password: ''
    };
  }

  handleUsername = (e) =>{
    this.setState({
      username: e.target.value
    }, ()=>console.log("Username: ", this.state.username))

  }

  handlePassword = (e) =>{
    this.setState({
      password: e.target.value
    }, ()=>console.log("Password: ", this.state.password))
  }

  handleSubmit = (e) =>{
    e.preventDefault();

    if(!this.state.username || !this.state.password){
      return;
    }

    this.props.onSubmit(this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" 
                    onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" 
                   onChange={this.handlePassword}/>
          </label>
        </div>
        <div>
          <button type="submit">
            Log in
          </button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
