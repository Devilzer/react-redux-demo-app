const initialState = {
    numOfCookies : 50
};

const reducer =  (state = initialState ,action) =>{
    switch (action.type) {
        case "BUY_COOKIE":
            return{
                ...state,
                numOfCookies : state.numOfCookies -action.payload
            };
        default:
            return state;
    }
};

export default reducer;