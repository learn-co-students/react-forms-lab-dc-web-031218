import React from "react";

class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }
  onSubmit = (event) =>{
    event.preventDefault()
    if (this.state.username !== "" || this.state.password !== ""){
      this.props.onSubmit()
    } 
  }

  handleUsername = (event) =>{
    this.setState({
      value: event.target.value
    })
  }

  handlePassword = (event)=>{
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div>
          <label>
            Username
            <input 
              id="test-username" 
              type="text" 
              value ={this.state.username}
              onChange={this.handleUsername}
                />
              }
          </label>
        </div>
        <div>
          <label>
            Password
            <input 
              id="test-password" 
              type="password" 
              value ={this.state.password}
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
