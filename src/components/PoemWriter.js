import React from "react";

class PoemWriter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      content: ""
    };
  }


  poem = (event) =>{
    this.setState({ content: event.target.value })
  }

  saveAndValidatePoem = () => {
   let formattedContent = this.state.content.split("\n");
   formattedContent = formattedContent.map(line =>
     line.trim().replace(/\s+/g, " ")
   )
   console.log(formattedContent)
   if (
     formattedContent.length === 3 &&
     formattedContent[0].split(" ").length === 5 &&
     formattedContent[1].split(" ").length === 3 &&
     formattedContent[2].split(" ").length === 5
   ) {
     return "This is a valid poem";
   } else {
     return  <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!
        </div>;
   }
 }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" onChange={this.poem} />
          {this.saveAndValidatePoem()}
      </div>
    );
  }
}

export default PoemWriter;
