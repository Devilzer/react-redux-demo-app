import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { buyCookie } from "../redux/cookie/cookieActions";

function CookieContainer() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                No of Cookies :- {state.cookie.numOfCookies}
            </h1>
            <button onClick={()=>dispatch(buyCookie())}>
                Buy Cookie
            </button>
        </div>
    )
}

export default CookieContainer;
