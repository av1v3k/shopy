import {
    SEARCH_INPUT,
    PRODUCT_DATA_LOADING,
    PRODUCT_DATA_LOADED,
    CART_ADD_DATA
} from '../actions/types';

const headerinitialState = {
    text: ''
};

const productinitialState = {
    loading: true,
    data: {}
};

const cartState = {
    total: 0,
    products: []
}

function headerReducer(state = headerinitialState, action) {
    switch (action.type) {
        case SEARCH_INPUT:
            return { ...state, ...{ "text": action.text } }
        default:
            return state;
    }
}

function productReducer(state = productinitialState, action) {
    switch (action.type) {
        case PRODUCT_DATA_LOADING:
            return { ...state, ...{ "loading": action.loading } }
        case PRODUCT_DATA_LOADED:
            const fetcheddata = { data: action.data };
            return (
                { ...state, ...fetcheddata }
            )
        default:
            return state;
    }
}

function cartReducer(state = cartState, action) {
    debugger;
    switch (action.type) {
        case CART_ADD_DATA:
            let s = state.products,
                total = state.total, t=[];
            let inc = { name: action.data.name, count: 1 };

            let y = s.find((item) => {
                return item.name === inc.name
            });

            if (y) {
                total = total + 1;
                // inc['count'] = inc['count'] + 1;
            } else {
                total = total + 1;
                inc.count = 1;
                t.push(inc);
            }
            s.forEach(item => {
                item.name === inc.name ? item.count = item.count + 1 : (() => {})();
            })
            let dummyObject = {};
            dummyObject.total = total;
            dummyObject.products = [...s, ...t];
            let newState = Object.assign({}, state, dummyObject);
            return newState;
        default:
            return state;
    }
}

export { headerReducer, productReducer, cartReducer };