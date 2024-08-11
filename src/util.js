const getRandomInt = (max)=> {
    return Math.floor(Math.random() * max);
}

const getRandomIntInRange = (min, max)=> {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}
const idCreater = () =>{
    let lastGeneratedId = 0;
  
    return function () {
      lastGeneratedId += 1;
      return lastGeneratedId;
    };
};


const camelCaseToTitleCase = (str) =>{
    return str.replace(/([A-Z])/g, ' $1')
             .trim()
             .split(' ')
             .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
             .join(' ');
  }

export {getRandomIntInRange, getRandomInt, idCreater, camelCaseToTitleCase}