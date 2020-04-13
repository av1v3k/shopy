import {
    SEARCH_INPUT,
    PRODUCT_DATA_LOADING,
    PRODUCT_DATA_LOADED
} from '../actions/types';

const headerinitialState = {
    text: ''
};

const productinitialState = {
    loading: true,
    data: {}
};

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

export { headerReducer, productReducer };