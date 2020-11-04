import yogaReducer from "./yogaReducer";
import { createStore, combineReducers} from "redux";


const rootReducer = combineReducers({
    Details:yogaReducer
});

const store = createStore(
    rootReducer,
    window.__REDUX_DEVTOOLS_EXTENSION_ && window.__REDUX_DEVTOOLS_EXTENSION_()
);

export default store;