const initialState = {
    numOfIceCream : 25
};

const reducer = (state = initialState,action)=>{
    switch (action.type) {
        case "BUY_ICECREAM":
            return{
                ...state,
                numOfIceCream : state.numOfIceCream -1
            };
        default:
            return state;
    }
};

export default reducer;