import React from 'react';
// import Radium from 'react'

const Header = () =>{
    const header = {
        backgroundColor:'#1a73e8',
        color:'#fff',
        marginTop:'0px',
        height:'64px',
        paddingTop:'15px',
        float:'left',
        width:'100%',
        fontSize: '24px',
        fontWeight: '400'
    
    }
    return(
        <h3 style={header}>Character Name Generator</h3>
    );
}

export default Header;