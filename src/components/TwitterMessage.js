import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      maxChars: props.maxChars,
      charsRemaining: props.maxChars
    };
  }

  handleChange = e => {
    let remaining = this.state.maxChars - e.target.value.length;
    this.setState({
      value: e.target.value,
      charsRemaining: remaining
    });
  };

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleChange}
          value={this.state.value}
        />
        <p>Characters remaining: {this.state.charsRemaining}</p>
      </div>
    );
  }
}

export default TwitterMessage;
