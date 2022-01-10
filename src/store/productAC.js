import { PRODUCT_LIST, LOADING, LOAD_FAILED } from './actiontypes';
import axios from 'axios';

const actionOne = () => {
    const action = { type: LOADING, payload: 'isLoading' };
    return action;
};

const actionTwo = async () => {
    const url = 'https://fakestoreapi.com/products/';
    const result = await axios.get(url);

    if (result.status !== 200) {
        const action = { type: LOAD_FAILED, payload: 'loadFail' };
        return action;
    };

    const product = [];
    result.data.forEach( item => {
        const card = {
            id: item.id,
            title: item.title,
            price: item.price * 100,
            category: item.category,
            image: item.image
        }
        product.push(card);
    })

    const action = { type: PRODUCT_LIST, payload: product };
    return action;
};

export const getData = async (dispatch) => {
    dispatch(actionOne());
    dispatch(await actionTwo());
};
