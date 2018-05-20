import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = { value: "" };
  }

  handleMessageInput = event => {
    this.setState({ ...this.state, value: event.target.value }, () =>
      console.log(this.state.value.length)
    );
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleMessageInput}
        />
        <span> {this.props.maxChars - this.state.value.length}</span>
      </div>
    );
  }
}

export default TwitterMessage;
