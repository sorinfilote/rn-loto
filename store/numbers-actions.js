export const ADD_NUMBERS = 'ADD_NUMBERS';
export const SET_NUMBERS = 'SET_NUMBERS';
export const DELETE_NUMBERS = 'DELETE_NUMBERS';

import { insertNumbers, fetchNumbers, removeNumbers } from '../helpers/db';

export const setNumbers = () => {
    return async dispatch => {
        try{
            const dbResult = await fetchNumbers();
            // console.log(dbResult);
            dispatch({ type: SET_NUMBERS, numbers: dbResult.rows._array})
        }catch(err) {
            throw err;
        }
    }
}

export const addNumbers = ( min, max, amount ) => {
    return async dispatch => {
        try{
            const dbResult = await insertNumbers(min, max, amount);
            dispatch({
                type: ADD_NUMBERS,
                numbersData: {
                    id: dbResult.insertId,
                    minNumber: min,
                    maxNumber: max,
                    amountNumber: amount
                }
            })
        } catch ( err ){
            console.log(err);
            
        }
    };
}

export const deleteNumbers = (numbersId) => {
    return async dispatch => {
        try {
            const dbResult = await removeNumbers(numbersId);
            // console.log(dbResult.rowsAffected);
            
            if(dbResult.rowsAffected > 0){
                dispatch({ type: DELETE_NUMBERS, numId: numbersId.toString()})
            }
        } catch (err) {
            throw err;
        }
    }
}
