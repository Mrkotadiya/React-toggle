// import React from "react";

// import classes from './Cookpit.css';

// const cockpit = (props) => {

//     const aclasses =[];
//     let btnClass = '';
//     if (props.showPersons) {
//         btnClass = 'Green';
//     }
    
//     if(props .persons.length <=2){
//       aclasses.push('Green');   // classes=['red','bold']
//     }
//     if(props.persons.length <=1){
//       aclasses.push('bold');   // classes=['red','bold']
//     }
//     if(props.persons.length === 0){
//       aclasses.push('red');     // classes=['red']
//       // document.write(element);     // Page Empty
//     }


//   return (
//     <div className={classes.Cockpit} >
//       <h1>Hi This is React App.</h1>
//       <p className={aclasses.join(" ")}>This is Really Working</p>
//       <button  className={btnClass} onClick={props.clicked}>
//         Toggle Person
//       </button>
//     </div>
//   );
// };

// export default cockpit;



import React from 'react';
import  './Cookpit.css';

const cockpit = ( props ) => {
    const assignedClasses = [];
  
    if ( props.persons.length <= 2 ) {
      assignedClasses.push("Green"); // classes = ['red']
    }
    if ( props.persons.length <= 1 ) {
      assignedClasses.push( 'bold' ); // classes = ['red', 'bold']
    }
    if ( props.persons.length === 0 ) {
      assignedClasses.push( 'red' ); // classes = ['red', 'bold']
      // const appTitle="Hello "
    }
    return (
      <div className='title'>
            <h1>{ props.appTitle }</h1>
            <p className={assignedClasses.join( ' ' )}>This is really working!</p>
            <button 
            className='btn'
            onClick={props.clicked}>Toggle Persons</button>
        </div>
    );
};

export default cockpit;