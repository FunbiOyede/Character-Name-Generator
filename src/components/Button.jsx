import React from 'react';

//using radium
import Radium from 'radium';
 const Button = (props) => {
  const btn ={
    padding:"12px 30px 11px",
    borderRadius:"4px",
    outline:"none",
    marginTop:"15px",
    color:"#fff",
    border:"2px solid #1a73e8",
    backgroundColor:"#1a73e8",
    //implementing radium
    ":hover":{
      backgroundColor:"black",
      border:"2px solid black",
      cursor:"pointer"
    }
  }
  return (
    <div>
        <button  style={btn} onClick={props.fecthName}>Find me a name</button>
    </div>
  )
}

export default Radium(Button);