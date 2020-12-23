export const buyCookie = (number=1) =>{
    return {
        type : "BUY_COOKIE",
        payload : number
    };
};