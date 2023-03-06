
import * as actionType from '../constants/ProductConstants';
export const getProductsReducer = (state = { products: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS_SUCCESS:
            return { products: action.payload }
        case actionType.GET_PRODUCTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getProducts1Reducer = (state = { party_song: [] }, action) => {
    switch (action.type) {
        case actionType.GET_PRODUCTS1_SUCCESS:
            return { party_song: action.payload }
        case actionType.GET_PRODUCTS1_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};

export const getSearchReducer = (state = { search: [] }, action) => {
    switch (action.type) {
        case actionType.GET_SEARCH_SUCCESS:
            return { search: action.payload }
        case actionType.GET_SEARCH_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getArtistsReducer = (state = { AllArtist: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALLARTISTS_SUCCESS:
            return { AllArtist: action.payload }
        case actionType.GET_ALLARTISTS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};
export const getAlbumsReducer = (state = { AllAlbums: [] }, action) => {
    switch (action.type) {
        case actionType.GET_ALBUMS_SUCCESS:
            return { AllAlbums: action.payload }
        case actionType.GET_ALBUMS_FAIL:
            return { error: action.payload }
        default:
            return state
    }
};