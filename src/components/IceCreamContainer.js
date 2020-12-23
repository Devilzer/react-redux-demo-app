import React from 'react'
import { useSelector,useDispatch } from "react-redux";
import { buyIcecream } from "../redux/icecream/iceCreamActions";
function IcecreamContainer() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    return (
        <div>
            <h1>
                No of Ice-Creams :- {state.icecream.numOfIceCream}
            </h1>
            <button onClick={()=>dispatch(buyIcecream())}>
                Buy IceCream
            </button>
        </div>
    )
}

export default IcecreamContainer;
