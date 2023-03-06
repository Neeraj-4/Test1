import axios from "axios"
import * as actionTypes from '../constants/ProductConstants';
const URL = '';
export const getProducts = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/products`);
         
        dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message})

    }
}
export const getProducts1 = () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/party_song`);
         
        dispatch({type:actionTypes.GET_PRODUCTS1_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_PRODUCTS1_FAIL,payload:error.message})

    }
}
export const getSearch= () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/search`);
         
        dispatch({type:actionTypes.GET_SEARCH_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_SEARCH_FAIL,payload:error.message})

    }
}
export const getArtists= () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/artists`);
        dispatch({type:actionTypes.GET_ALLARTISTS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_ALLARTISTS_FAIL,payload:error.message})

    }
}
export const getAlbums= () => async (dispatch) => {
    try {
        const {data} = await axios.get(`${URL}/Albums`);
        dispatch({type:actionTypes.GET_ALBUMS_SUCCESS,payload:data})
    } catch (error) {
        dispatch({type:actionTypes.GET_ALBUMS_FAIL,payload:error.message})

    }
}
