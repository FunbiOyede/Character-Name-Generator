import React, { Component } from 'react';
import Inputs from './components/Inputs';
import Button from './components/Button';
import Data from './components/Data'
import './App.css';

class App extends Component {

  state = {
    
  }
 

   
  



  // handling gender
  handleGender = (e) =>{
    this.setState({
      gender:e.target.value
    })
}

// personality

 handlePersonality = (e) =>{
  this.setState({
    personality:e.target.value
  })
 }

 handleState = (e) =>{
  this.setState({
    humanState:e.target.value
  })
 }
 handlePowerLevel = (e) =>{
  this.setState({
    powerLevel:e.target.value
  })
 }

 fecthName = (gosh) =>{
  this.DataFunction(gosh);
 }


 
  

  render() {  
    return (
      <div className="App">
        <Inputs
         handleGender={this.handleGender} 
         handlePersonality={this.handlePersonality}
         handleState={this.handleState}
         handlePowerLevel={this.handlePowerLevel}
        />
        <Button fecthName={() => this.fecthName(this.state.gender)}/>
        <Data DataFunction={this.DataFunction}/>
      </div>
    );
  }
}

export default App;
