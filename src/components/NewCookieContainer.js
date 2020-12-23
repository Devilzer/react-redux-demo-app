import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import { buyCookie } from "../redux/cookie/cookieActions";

function NewCookieContainer() {
    const [number,setNumber] = useState(1);
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                No of Cookies :- {state.cookie.numOfCookies}
            </h1>
            <input type='number' value = {number} onChange={e=>setNumber(e.target.value)}/>
            <button onClick={()=>dispatch(buyCookie(number))}>
                Buy {number} Cookie
            </button>
        </div>
    )
}

export default NewCookieContainer;
