import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);
    chars: 0
    this.state = {
      value: ""
    };
  }

  counter = ()=>{
    this.props.maxChars 
  }

  handleChange = (event) => {
    let stateCopy = this.state.value
    let charsLength = stateCopy.length + 1
    console.log(charsLength)

    if (charsLength < this.props.maxChars){
      this.setState({
        value: event.target.value
      });
      this.chars = this.props.maxChars - charsLength
    } else {
      this.setState({
        value: event.target.value
      })
    }
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input 
          type="text" 
          value={this.state.value}
          onChange={this.handleChange}
          />
          <div>Maximum Characters: {this.props.maxChars}</div>
          <div>{this.chars}</div>
      </div>
    );
  }
}

export default TwitterMessage;
