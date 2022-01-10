/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import update from 'immutability-helper';
import { GOODLIST, ADD_COUNT, SUBSTRACT_COUNT, DELETE_PRODUCT } from './actiontypes';

const defaultState = {
    orderList: []
}

export const orderReducer = (state = defaultState, action) => {

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
                const idx = findIdIndex(state.orderList, action.payload);

                if (idx === -1) {
                    return update(state, {orderList: {$push: [action.payload]}});
                }
            };
        case ADD_COUNT:
            {
                const prod = findItem(state.orderList, action.payload.id);
                return update(state, {orderList: {[prod]: {count: {$set: action.payload.count}, amount: {$set: action.payload.amount} }}});
            }
        case SUBSTRACT_COUNT: 
            {
                const prod = findItem(state.orderList, action.payload.id);
                return update(state, {orderList: {[prod]: {count: {$set: action.payload.count}, amount: {$set: action.payload.amount} }}});

            };
        case DELETE_PRODUCT: 
            {
                const prod = findItem(state.orderList, action.payload.id);
                return update(state, {orderList: {$splice: [[prod, 1]] } });
            }
    }

    return state;
};