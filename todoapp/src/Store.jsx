import { combineReducers, createStore } from "redux";
import MyData from "./Reducers/Reducer";

const Store = createStore(combineReducers({
    listdata: MyData,
}));

export default Store;