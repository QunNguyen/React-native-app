import { createStore,combineReducers } from "redux";
import reducer from "./reducer";

const RootReducers=combineReducers({
    reducer,
});

export const store=createStore(RootReducers);