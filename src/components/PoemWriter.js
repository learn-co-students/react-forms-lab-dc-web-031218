import React from "react";

class PoemWriter extends React.Component {
  constructor() {
    super();

    this.state = {
      poem: ''
    };
  }

  poemHandler = (e) =>{
    this.setState({
      poem: e.target.value
    })
  }

  validPoem  = ()=>{
    let lines = this.state.poem.split(/\r*\n/).map(l=>l.trim());
    if(lines.length === 3){
      let firstFlag = lines[0].split(' ').length === 5;
      let secondFlag = lines[1].split(' ').length === 3;
      let thirdFlag = lines[2].split(' ').length === 5;
      if(lines[0].split(' ').length === 5 &&
         lines[1].split(' ').length === 3 &&
         lines[2].split(' ').length === 5){
        return true
      }
    }else {
      return false
    }
  }

  render() {
    return (
      <div>
        <textarea rows="3" cols="60" 
                   onChange={this.poemHandler}/>
        {
          this.validPoem()? null : <div id="poem-validation-error" style={{ color: "red" }}>
          This poem is not written in the right structure!</div>
        }
        
      </div>
    );
  }
}

export default PoemWriter;
