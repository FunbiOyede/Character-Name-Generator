
// Tried using 
//function generateName(arrayOfnames){
// return arrayOfnames[Math.floor(Math.random() * arrayOfNames)]
// }
//but it returned undefined, dont know why but it just did.
// i found out about this and used it instead

function generateRandom(max) {
    return Math.floor(Math.random() * (max - 1));
  }

// generate function
function generateName(arrayOfnames){
return arrayOfnames[generateRandom(arrayOfnames.length)]
}

// generateName(femaleNames);


export default generateName;