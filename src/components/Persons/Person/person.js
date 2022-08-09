import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./person.css";
import withClass from "../../../hoc/withClass";
import Aux from "../../../hoc/Aux1";
import {AuthContet} from '../../../containers/App'

class Person extends Component {
  constructor(props) {
    super(props);
    console.log("[Person.js] Inside Constructor", props);
    this.inputElement = React.createRef();
  }

  componentWillMount() {
    console.log("[Person.js] Inside componentWillMount()");
  }

  componentDidMount() {
    console.log("[Person.js] Inside componentDidMount()");
    if(this.props.position === 0){
        this.inputElement.current.focus();
    }
  }

    focus(){
      this.inputElement.current.focus(); 
    }


  render() {
    return (
      <Aux>
        <div className="Person">  
        <AuthContet.Consumer>
        {auth=>auth ? <p> i'm Authentication </p>:null}
        </AuthContet.Consumer>
          <p onClick={this.props.click}>
            I am {this.props.name} and i am {this.props.age} year Old!
          </p>
          <p>{this.props.children}</p>
          <input
          // ref={(inp)=>{this.inputElement = inp }}
          ref={this.inputElement}
            type="text"
            onChange={this.props.changed}
            value={this.props.name}
          />
        </div>
      </Aux>
    );
  }
}

Person.propTypes ={
  click:PropTypes.func,
  name:PropTypes.string,
  age:PropTypes.number,
  changed:PropTypes.func
}

export default withClass(Person);
// export default Person ;

// const person = (this.props) => {
//   // const rnd = Math.random();
//   // if (rnd > 0.7) {
//   //   throw new Error('Something is Wrong');
//   // }

//   // return <p>I am a {this.props.name} and i am {Math.floor(Math.random()*30)} year Old!</p>

// };
