import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      search: ''
    };
  }

  handleChange = (event) => {
    this.setState({
      search: event.target.value
    });
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.search} onChange={this.handleChange}/>
        <p>Remaining Characters: {this.props.maxChars - this.state.search.length}</p>
      </div>
    );
  }
}

export default TwitterMessage;
