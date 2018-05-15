import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: "",
      valid: false
    };
  }

  handleInput = e => {
    let lines = e.target.value.trim().split("\n");

    let firstLine =
      lines.length === 3 ? lines[0].trim().split(" ").length : false;

    let secondLine =
      lines.length === 3 ? lines[1].trim().split(" ").length : false;

    let thirdLine =
      lines.length === 3 ? lines[2].trim().split(" ").length : false;
    // debugger;
    let valid =
      lines.length === 3 &&
      firstLine === 5 &&
      secondLine === 3 &&
      thirdLine === 5
        ? true
        : false;

    let poem = e.target.value;
    this.setState(
      {
        poem,
        valid: valid
      },
      () => console.log(this.state)
    );
  };

  render() {
    let valid = !this.state.valid ? (
      <div id="poem-validation-error" style={{ color: "red" }}>
        This poem is not written in the right structure!
      </div>
    ) : (
      ``
    );

    return (
      <div>
        <textarea
          rows="3"
          cols="60"
          onChange={this.handleInput}
          value={this.state.poem}
        />
        {valid}
      </div>
    );
  }
}

export default PoemWriter;
