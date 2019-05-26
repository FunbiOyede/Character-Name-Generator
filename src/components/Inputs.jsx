import React, { Component } from 'react'
import Radium from 'radium';
export class Inputs extends Component {

   
  render() {
    const InputStyle = {

        color: 'black',
        fontSize: '1em',
        padding: '9px 18px 7px',
        borderWidth: '1px',
        borderStyle: 'solid',
        borderColor: 'rgb(159, 159, 159)',
    }

  
    return (
        <div style={{margin:'0 auto'}}>
                   <div style={{margin:'10px 0'}}>
                        <p>Gender</p>
                        <select  style={InputStyle} onChange={this.props.handleGender} required>
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select><br/>
                        </div>

                        <div>
                    <p>Personality</p>
                    <select style={InputStyle} onChange={this.props.handlePersonality} required>
                        <option></option>
                        <option value="Mastermind">Mastermind</option>
                        <option value="Comander">Comander</option>
                        <option value="Defender">Defender</option>
                        <option value="Adventurer">Adventurer</option>
                    </select><br/>
                        </div>

                        <div>
                <p >Power level</p>
                <select style={InputStyle} onChange={this.props.handlePowerLevel} required>
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select><br/>
            
                    </div>
                
                
                <div>
                     <p >State</p>
                     <select style={InputStyle} onChange={this.props.handleState} required>
                         <option></option>
                         <option value="Good">Good</option>
                         <option value="Bad">Bad</option>
                     </select><br/>
                     </div>
        </div>
    )
  }
}

export default Radium(Inputs);
