import React, { Component } from "react";
import "./App.css";
import Person from "./Person/person";
 
class App extends Component {
  state = {
    persons: [
      { id :"asd1",name: "Vinay", age: 23 },
      { id :"grrdfg",name: "Nirbhay", age: 20 },
      { id :"asdesresr3",name: "Saurabh", age: 24 },
    ],
    otherState: "Some other Values",
    showPersons:false
  };
  
  nameChangeHandler = (event,id) => {
    const personIndex=this.state.persons.findIndex(p=>{
      return p.id === id;
    });

    const person={
      ...this.state.persons[personIndex]
    };

    // const person = Object.assign({},this.s tate.persons[personIndex])
    person.name=event.target.value;
    const persons=[...this.state.persons];
    persons[personIndex]=person;

    this.setState({ persons : persons });
  }

  deletePersonHandler =(personIndex)=>{
    //  const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons:persons})
  }

  togglePersonHandler=()=>{
    const doesShow= this.state.showPersons;
    this.setState({showPersons:!doesShow})
  }
  render() {
    const style = {
      backgroundColor: 'red',
      color:"white",
      font: 'inherit',
      border: '1px solid ',
      padding: '8px',
      cursor: 'pointer'
      // ':hover':{
      //   backgroundColor :'rgb(245, 100, 100)',
      //   color:'black's
      // }
    };   

    let persons = null;

    if(this.state.showPersons){
      persons =(
        <div>
          { 
            this.state.persons.map((person,index)=>{
              return <Person  
              click={()=>this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event)=>this.nameChangeHandler(event,person.id)}
               />
            })}
      </div> 
      );
      style.backgroundColor ="Green";
    
    }        

    // let classes = ['red','bold'].join(' ');

    const classes =[];
    const element = document.createElement("p").innerHTML="This is Emtpty Page.";

   
    if(this.state.persons.length <=2){
      classes.push('Green');   // classes=['red','bold']
    }
    if(this.state.persons.length <=1){
      classes.push('bold');   // classes=['red','bold']
    }
    if(this.state.persons.length <=0){
      classes.push('red');     // classes=['red']
      document.write(element);     // Page Empty
    }

    return (
      <div className="App">
        <h1>Hi This is React App.</h1>
        <p className={classes.join(' ')}>This is Really Working</p>
        <button 
        style={style} 
        onClick={this.togglePersonHandler}>Toggle Person</button>
      {persons}
      </div> 
    );
  }
}

export default App;