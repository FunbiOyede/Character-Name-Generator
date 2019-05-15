import React from 'react'

export default function Data(props) {

   const  generateForfeMale = () =>{
        const  female = [
          "Spell Binder",
          "Black Bird",
           "Pixie",
           "Vanity",
           "Hail Mary",
           "Octavia",
           "Pandora",
           "misery"
      ]
      let newName = female[Math.floor(Math.random() * female.lenght)]
      return newName;
    }
    
    const  generateForMale = () =>{
      const males = [
        "John Doe",
        "Pyro Thug",
        "Flint",
        "Corinthian",
        "Bronx",
        "Jack Of Hearths",
        "Bronco Bill",
        "Adam Warlock"
    ]
      let newName = males[Math.floor(Math.random() * males.lenght)]
      return newName;
    }



  return (
    <div>
   <h3>HeLLOW
       
   </h3>
    </div>
  )
}
