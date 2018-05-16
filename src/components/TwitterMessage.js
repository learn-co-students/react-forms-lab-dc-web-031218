import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      input: ''
    };
  }

  handleInput = (e) => {
    this.setState({
      input: e.target.value
    })

  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
               maxLength={this.props.maxChars}
               onChange={this.handleInput} 
               value={this.state.input}/>
        <p>You have {this.props.maxChars - this.state.input.length} characters left</p>
      </div>
    );
  }
}

export default TwitterMessage;
