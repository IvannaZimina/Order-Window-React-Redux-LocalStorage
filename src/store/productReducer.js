/* eslint-disable no-lone-blocks */
/* eslint-disable no-fallthrough */
/* eslint-disable default-case */
import update from 'immutability-helper';
import { PRODUCT_LIST, LOADING, LOAD_FAILED } from './actiontypes';

const defaultState = {
    loadingStatus: '',
    productList: []
}

export const productReducer = (state = defaultState, action) => {

    // console.log('stateReducer: ', state.item);
    // console.log('productReducer: ', action.payload)

    switch (action.type) {
        case LOADING:
            {
                return update(state, { loadingStatus: {$set: action.payload} })
            }
        case LOAD_FAILED:
            {
                return update(state, { loadingStatus: {$set: action.payload} })
            }
        case PRODUCT_LIST:
            {
                return update(state, {
                    loadingStatus: {$set: 'ok'},
                    productList: {$set: action.payload}});
            }
    }

    return state;
};