import { SEARCH_INPUT, PRODUCT_DATA_LOADED, PRODUCT_DATA_LOADING, CART_ADD_DATA } from './types';

export const searchInputAction = (text) => ({
    type: SEARCH_INPUT,
    text: text
});

export const dataLoadingAction = (isLoading) => ({
    type: PRODUCT_DATA_LOADING,
    loading: isLoading
});

export const dataLoadedAction = (data) => ({
    type: PRODUCT_DATA_LOADED,
    data
});

export const cartAddAction = (data) => ({
    type: CART_ADD_DATA,
    data
})