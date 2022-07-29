import React  from "react";

import  "./person.css"

const person = (props)=>{

    // return <p>I am a {props.name} and i am {Math.floor(Math.random()*30)} year Old!</p>
    return (
            <div className="Personx" > 
                <p onClick={props.click} >I am {props.name} and i am {props.age} year Old!</p>
                <p>{ props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}/>
            </div>
    )

};

export default person;



 