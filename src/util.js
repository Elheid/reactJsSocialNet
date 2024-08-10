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


export {getRandomIntInRange, getRandomInt, idCreater}