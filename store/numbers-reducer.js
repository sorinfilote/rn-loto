import { ADD_NUMBERS, SET_NUMBERS, DELETE_NUMBERS } from './numbers-actions';
import Number from '../models/numbers';

const initialState = {
    numbers: []
}

export default (state = initialState, action) => {
    switch(action.type){
        case SET_NUMBERS:
            return {
                numbers: action.numbers.map(num => new Number(num.id.toString(), num.min, num.max, num.amount))
            }
        case ADD_NUMBERS:
            const newNumber = new Number(
                action.numbersData.id.toString(),
                action.numbersData.minNumber,
                action.numbersData.maxNumber,
                action.numbersData.amountNumber,
                )
            return {
                numbers: state.numbers.concat(newNumber)
            }
        case DELETE_NUMBERS:
            const newState = [...state.numbers].filter(num => {
                return num.id !== action.numId;
            });
            
            return {
                numbers: newState
            } 
        default: 
            return state;
    }
}