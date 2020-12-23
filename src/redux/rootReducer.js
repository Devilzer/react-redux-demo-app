import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import cookieReducer from "./cookie/cookieReducer";

const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer,
    cookie : cookieReducer
});

export default rootReducer;