import { combineReducers } from "redux";

import cakeReducer from "./cake/cakeReducer";
import iceCreamReducer from "./icecream/iceCreamReducer";
import cookieReducer from "./cookie/cookieReducer";
import userReducer from "./user/userReducer";
const rootReducer = combineReducers({
    cake : cakeReducer,
    icecream : iceCreamReducer,
    cookie : cookieReducer,
    user : userReducer
});

export default rootReducer;