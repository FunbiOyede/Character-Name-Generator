import React from 'react';

//using radium
import Radium from 'radium';
 const Button = (props) => {
  const btn ={
    padding:"12px 30px 11px",
    borderRadius:"4px",
    outline:"none",
    marginTop:"10px",
    color:"#fff",
    border:"2px solid black",
    backgroundColor:"black",
    //implementing radium
    ":hover":{
      backgroundColor:"#1a73e8",
      border:"2px solid #1a73e8",
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