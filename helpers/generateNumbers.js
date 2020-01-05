const arrayNumbers = [];    
const createNumber = (min, max, times) => {
    min = parseInt(min);
    max = parseInt(max);
    times = parseInt(times);

    let amountTimes = maxNumberOfPossibilities(min, max, times);

    if (amountTimes < times) times = amountTimes;
    
    let numberToInsert = generateAndCheckDuplicate(min, max);

    arrayNumbers.push(numberToInsert);
    

    if (arrayNumbers.length < times) {
        return createNumber(min, max, times);
    }else{
        let temp = [...arrayNumbers];
        arrayNumbers.length = 0;
        return temp;
    }
}

const generateAndCheckDuplicate = (min, max) => {
    let newNumber = generateNumber(min, max);

    if (isInArray(newNumber, arrayNumbers)) {
        return generateAndCheckDuplicate(min, max);
    } else {
        return newNumber;
    }
}

const maxNumberOfPossibilities = (min, max, times) => {
    return max - min + 1;
}

const generateNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const isInArray = (number, array) => {
    return array.includes(number);
}

export default createNumber;
