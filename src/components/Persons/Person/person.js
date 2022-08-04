import React, { Component } from "react";

import "./person.css";

class Person extends Component {
  render() {
    return (
      <div className="Person">
        <p onClick={this.props.click}>
          I am {this.props.name} and i am {this.props.age} year Old!
        </p>
        <p>{this.props.children}</p>
        <input
          type="text"
          onChange={this.props.changed}
          value={this.props.name}
        />
      </div>
    );
  }
}
export default Person;

// const person = (this.props) => {
//   // const rnd = Math.random();
//   // if (rnd > 0.7) {
//   //   throw new Error('Something is Wrong');
//   // }

//   // return <p>I am a {this.props.name} and i am {Math.floor(Math.random()*30)} year Old!</p>

// };
