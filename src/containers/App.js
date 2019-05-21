import React, { Component } from 'react';
import Inputs from '../components/Inputs';
import Button from '../components/Button';
import Name from '../components/Names';
import GenerateName from '../generators/Generate';
import Data , {femaleNames} from '../generators/Data';
import './App.css';

class App extends Component {

  state = {
    gender:"",
    personality:"",
    humanState:"",
    powerLevel:""
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
  
  if(gosh === "Male")
  {
    this.setState({
      generatedName:GenerateName(Data)
    })
  
  }else{
   this.setState({
     generatedName:GenerateName(femaleNames)
   })
}
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
        {/* <Data generatedName={this.state.generatedName}/> */}
        <Name generatedName={this.state.generatedName}/>
      </div>
    );
  }
}

export default App;
