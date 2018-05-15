import React from "react";

const isPoemValid = poem => {
  const poemLines = poem.split("\n").map(line => line.trim());
  const checkNumLines = poemLines.length === 3;
  if (poem && checkNumLines) {
    return (
      poemLines[0].split(" ").length === 5 &&
      poemLines[1].split(" ").length === 3 &&
      poemLines[2].split(" ").length === 5
    );
  } else {
    return false;
  }
};

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      content: '',
      isValid: true,
    };
  }

  handleContent = e => {
    const content = e.target.value
    this.setState({
      content,
      isValid: isPoemValid(content),
    })
  }


  render() {
    return (
      <div>
        <textarea rows="3" cols="60" value={this.state.content} onChange={this.handleContent}/>
        {!this.state.isValid ? (
          <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
          </div>
        ) : null}
      </div>
    );
  }
}

export default PoemWriter;
