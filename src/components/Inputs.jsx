import React, { Component } from 'react'

export class Inputs extends Component {

    
  render() {

    return (
        <div>
            <div>
                    {/* Gender */}
                        <label>Gender</label><br/>
                        <select onChange={this.props.handleGender}>
                            <option></option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select><br/>
            </div>
                {/* Personality */}
                    <label>Personality</label><br/>
                    <select onChange={this.props.handlePersonality}>
                        <option></option>
                        <option value="Mastermind">Mastermind</option>
                        <option value="Comander">Comander</option>
                        <option value="Defender">Defender</option>
                        <option value="Adventurer">Adventurer</option>
                    </select><br/>



                <label>Power level</label><br/>
                <select onChange={this.props.handlePowerLevel}>
                    <option></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    </select><br/>
            

                
                
                
                    <label>State</label><br/>
                    <select onChange={this.props.handleState}>
                        <option></option>
                        <option value="Good">Good</option>
                        <option value="Bad">Bad</option>
                    </select><br/>
        </div>
    )
  }
}

export default Inputs
