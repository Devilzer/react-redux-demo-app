import React from 'react';
import { useSelector , useDispatch} from "react-redux";
import { buyCake } from "../redux/cake/cakeActions";

function HooksCakeContainer() {
    const state = useSelector(state => state);
    const dispatch = useDispatch();
    // const numOfCakes = useSelector((state)=>(state.numOfCakes));
    return (
        <div>
            <h1>
                No of Cakes - {state.numOfCakes}
            </h1>
            <button onClick = {()=>dispatch(buyCake())}>
                Buy cake
            </button>
        </div>
    )
}

export default HooksCakeContainer;
