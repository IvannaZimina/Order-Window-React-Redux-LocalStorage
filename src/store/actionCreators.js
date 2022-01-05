import { GOODLIST, ADD_COUNT, SUBSTRACT_COUNT, DELETE_PRODUCT } from './actiontypes';

export const goodsActionCreator = (payload, dispatch) => {
    dispatch({ type: GOODLIST, payload })
};

export const addProductActionCreator = (payload, dispatch) => {
    dispatch({ type: ADD_COUNT, payload })
};

export const substractProductActionCreator = (payload, dispatch) => {
    dispatch({ type: SUBSTRACT_COUNT, payload })
};

export const deleteProductActionCreator = (payload, dispatch) => {
    dispatch({ type: DELETE_PRODUCT, payload })
};