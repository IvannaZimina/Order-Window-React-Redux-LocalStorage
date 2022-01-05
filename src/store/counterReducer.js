/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import update from 'immutability-helper';
import { GOODLIST, ADD_COUNT, SUBSTRACT_COUNT, DELETE_PRODUCT } from './actiontypes';

const defaultState = {
    item: [] // {id: ..., title: ..., price: ..., image: ..., count: ...}
}

export const goodsReducer = (state = defaultState, action) => {

    // console.log('stateReducer: ', state.item);
    // console.log('actionReducer: ', action.payload)
    
    const findIdIndex = (array, good) => {
        return array.findIndex(item => item.id === good.id);
    };

    const findItem = (array, id) => {
        return array.findIndex(item => item.id === id);
    }

    switch (action.type) {
        case GOODLIST:
            {
                const idx = findIdIndex(state.item, action.payload);

                if (idx === -1) {
                    return update(state, {item: {$push: [action.payload]}});
                }
            };
        case ADD_COUNT:
            {
                const prod = findItem(state.item, action.payload.id);
                return update(state, {item: {[prod]: {count: {$set: action.payload.count}, amount: {$set: action.payload.amount} }}});
            }
        case SUBSTRACT_COUNT: 
            {
                const prod = findItem(state.item, action.payload.id);
                return update(state, {item: {[prod]: {count: {$set: action.payload.count}, amount: {$set: action.payload.amount} }}});

            };
        case DELETE_PRODUCT: 
            {
                const prod = findItem(state.item, action.payload.id);
                return update(state, {item: {$splice: [[prod, 1]] } });
            }
    }

    return state;
};