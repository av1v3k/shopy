import { SEARCH_INPUT, PRODUCT_DATA_LOADED, PRODUCT_DATA_LOADING } from './types';

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