/**
 * Generates a random integer between 0 (inclusive) and max (exclusive)
 * @param max - The maximum value (exclusive)
 * @returns A random integer
 */
const getRandomInt = (max : number) : number=> {
    return Math.floor(Math.random() * max);
}


/**
 * Generates a random integer between min (inclusive) and max (exclusive)
 * @param min - The minimum value (inclusive)
 * @param max - The maximum value (exclusive)
 * @returns A random integer in the specified range
 */
const getRandomIntInRange = (min : number, max:number) : number=> {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
}


type IdGenerator = () => number;
/**
 * Creates an ID generator function that returns incrementing numbers
 * @returns A function that generates unique IDs
 */
const idCreater = (): IdGenerator => {
    let lastGeneratedId = 0;

    return function (): number {
        lastGeneratedId += 1;
        return lastGeneratedId;
    };
};

/**
 * Converts camelCase string to Title Case
 * @param str - The string to convert
 * @returns The converted string in Title Case
 */
const camelCaseToTitleCase = (str : string) :string => {
    return str.replace(/([A-Z])/g, ' $1')
        .trim()
        .split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(' ');
}

export { getRandomIntInRange, getRandomInt, idCreater, camelCaseToTitleCase }