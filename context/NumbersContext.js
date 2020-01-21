import createDataContext from './createDataContext';
import { insertNumbers, fetchNumbers, removeNumbers } from '../helpers/db';

const NumbersReducer = (state, action) => {
    switch (action.type) {
        case 'set_numbers':
            return action.payload;
        case 'delete_numbers':
            return state.filter(singleNumber => singleNumber.id !== action.payload);
        default: 
            return state;
    }
};

const setNumbers = dispatch => {
    return async() => {
        try{
            const dbResult = await fetchNumbers();
            dispatch({ type: 'set_numbers', payload: dbResult.rows._array})
        }catch(err) {
            throw err;
        }
    }
}

const deleteNumbers = dispatch => {
    return async (numbersId) => {
        try {
            const dbResult = await removeNumbers(numbersId);
            
            if(dbResult.rowsAffected > 0){
                dispatch({ type: 'delete_numbers', payload: numbersId})
            }
        } catch (err) {
            throw err;
        }
    }
}

export const addNumbers = () => {
    return async ( min, max, amount ) => {
        try{
            await insertNumbers(min, max, amount);
        } catch ( err ){
            throw err;
        }
    };
}

export const { Context, Provider } = createDataContext(
    NumbersReducer,
    { setNumbers, deleteNumbers, addNumbers },
    []
);