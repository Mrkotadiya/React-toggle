import React, { PureComponent } from "react";
import "./App.css";
import Persons from "../components/Persons/Persons";
import Cockpit from "../components/Cookpit/Cookpit";
import withClass from "../hoc/withClass";
import Aux from "../hoc/Aux1";

export const AuthContet = React.createContext(false);


class App extends PureComponent {
  constructor(props) {
    super(props);
    console.log("[ App.js] Inside Constructor", props);
    this.state = {
      persons: [
        { id: "asfa1", name : "Vinay", age: 28 },
        { id: "vasdf1", name: "Nirbhay", age: 29 },
        { id: "asdf11", name: "Saurabh", age: 26 },
      ],
      otherState: "some other value",
      showPersons: false,
      toggleClicked: 0,
      authenticated : false
    };
  }
  //

  componentWillMount() {
    console.log("[ App.js] Inside componentWillMount()");
  }
  componentDidMount() {
    console.log("[ App.js] Inside componentDidMount");
  }

  // shouldComponentUpdate(nextProps,nextState){
  //   console.log('[Update App.js] Inside shouldComponentUpdate',nextProps,nextState);
  //   return nextState.persons !== this.state.persons ||
  //         nextState.showPersons !== this.state.showPersons;
  // }
  
  componentWillReceiveProps(nextProps) {
    console.log("[Update App.js] inside ComponentWillReciveProps", nextProps);
  }

  componentWillUpdate(nextProps,nextState){
    console.log("[Update App.js] inside componentWillUpdate ",nextProps,nextState)
  }

  static  getDerivedStateFromProps(nextProps,prevState){
    console.log("[Update App.js] inside getDerivedStateFromProps ",nextProps,prevState)
    return prevState;
  
  }

  getSnapshotBeforeUpdate(){
    console.log("[Update App.js] inside getSnapshotBeforeUpdate ")
  }

  componentDidUpdate() {
    console.log("[UPDATE App.js] Inside componentDidUpdate");
  }

  // state = {
  //   persons: [
  //     { id: "asfa1", name: "Vinay", age: 28 },
  //     { id: "vasdf1", name: "Nirbhay", age: 29 },
  //     { id: "asdf11", name: "Saurabh", age: 26 },
  //   ],
  //   otherState: "some other value",
  //   showPersons: false,
  // };

  nameChangedHandler = (event, id) => {
    const personIndex = this.state.persons.findIndex((p) => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex],
    };

    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({ persons: persons });
  };

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  togglePersonsHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({
      showPersons: !doesShow,
      toggleClicked: this.state.toggleClicked + 1,
    });
  };

  // **   Error --------------

  // togglePersonsHandler = () => {
  //   const doesShow = this.state.showPersons;
  //   this.setState((prevState,props)=>{
  //     return {
  //       showPersons: !doesShow,
  //       toggleClicked: prevState  .state.toggleClicked + 1,

  //     }
  //   });
  // };

    // **--------------

    
    loginHendler =()=>{
      this.setState({authenticated : true});
    }


  render() {
    console.log("[ App.js] Inside Render()");
    let persons = null;
    if (this.state.showPersons) {
      persons = (
        <Persons
          persons={this.state.persons}
          clicked={this.deletePersonHandler}
          changed={this.nameChangedHandler}
          // isAuthenticated ={this.state.authenticated}
        />
      );
    }

    return (
      <Aux>
        
        <button onClick={() => {this.setState({ showPersons: true });}}className="btnShowPersons">
          {/* {" "} */}
          Show Persons
        </button>
        <Cockpit
          appTitle={this.props.title}
          showPersons={this.state.showPersons}
          persons={this.state.persons}
          login={this.loginHendler}
          clicked={this.togglePersonsHandler}
        />
      <AuthContet.Provider value={this.state.authenticated}> {persons}</AuthContet.Provider>
       
      </Aux>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default withClass(App);
