import {combineReducers, createStore,applyMiddleware} from "redux";
import {composeWithDevTools} from "redux-devtools-extension";
import { getProductsReducer,getProducts1Reducer,getSearchReducer, getArtistsReducer, getAlbumsReducer } from "./reducers/ProductReducers";
import thunk from 'redux-thunk';
const reducer = combineReducers({
    getProducts:getProductsReducer,
    getProducts1:getProducts1Reducer ,
    getSearch:getSearchReducer,
    getArtists:getArtistsReducer,
    getAlbums:getAlbumsReducer
})
const middleware = [thunk];
const Store = createStore(
reducer,composeWithDevTools(applyMiddleware(...middleware))
)
export default Store;