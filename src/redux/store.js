import { combineReducers, createStore } from "redux";
import messages  from "./message/messages"


const rootReducer = combineReducers({
    messages
})

const store = createStore(rootReducer)

export default store;