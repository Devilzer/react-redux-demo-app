import React from 'react';
import { useSelector} from "react-redux";

function HooksCakeContainer() {
    const numOfCakes = useSelector((state)=>(state.numOfCakes));
    return (
        <div>
            <h1>
                No of Cakes - {numOfCakes}
            </h1>
            <button>
                Buy cake
            </button>
        </div>
    )
}

export default HooksCakeContainer;
