import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      msgValue: ""
    };
  }

  handleMessage = e => {
    this.setState({
      msgValue: e.target.value
    });
  };

  render() {
    // const { maxChars } = this.props;
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          onChange={this.handleMessage}
          value={this.state.msgValue}
        />
        <div>{this.props.maxChars - this.state.msgValue.length}</div>
      </div>
    );
  }
}

export default TwitterMessage;
