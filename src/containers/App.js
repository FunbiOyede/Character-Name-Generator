import React, { Component } from 'react';
import Inputs from '../components/Inputs';
import Button from '../components/Button';
import Name from '../components/Names';
import GenerateName from '../generators/Generate';
import Data , {femaleNames} from '../generators/Data';
import './App.css';
import Header from '../components/Header'
import Radium, {StyleRoot} from 'radium';
//using StyleRoot for accessing advance features from radium like media queries
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

 
 
  

fecthName = (gender) =>{
 
  if(gender === ""){
    this.setState({
      generatedName:"You dint input anything"
    })
  }
  else{
    if(gender === "Male"){
      this.setState({
        generatedName:GenerateName(Data)
      })
    }
    else{
      this.setState({
        generatedName:GenerateName(femaleNames)
      })
    }
  }
     
}


 
  

  render() {  
    return (
      <StyleRoot>
        <div className="App">
          <Header />
          <Inputs
          handleGender={this.handleGender}
          handlePersonality={this.handlePersonality}
          handleState={this.handleState}
          handlePowerLevel={this.handlePowerLevel}
          />
          <Button fecthName={() => this.fecthName(this.state.gender)}/>
          <Name generatedName={this.state.generatedName}/>
        </div>
      </StyleRoot>
    );
  }
}

export default Radium(App);
