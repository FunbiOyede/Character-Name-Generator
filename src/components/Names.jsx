import React from 'react'

const Names = (props) =>{
 const style = {
  marginTop: '1.75em',
  fontSize: '2rem',
  lineHeight: '1.63636',
  color: 'rgb(27, 27, 27)',
  fontWeight:'300',
  paddingLeft:'10px'
 }
  return (
    
    <p style={style}>{props.generatedName}</p>
  )
}

export default Names;
