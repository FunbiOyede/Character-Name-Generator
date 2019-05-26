import React from 'react';
// import Radium from 'react'

const Header = () =>{
    const header = {
        backgroundColor:'#1a73e8',
        color:'#fff',
        marginTop:'0px',
        height:'64px',
        float:'left',
        paddingTop:'20px',
        width:'100%',
        fontSize: '24px',
        fontWeight: '400',
        marginBottom:'50px'
    
    }
    return(
        <h3 style={header}>Character Name Generator</h3>
    );
}

export default Header;