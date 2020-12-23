import axios from "axios";

export const fetchUserRequest = ()=>{
    return {
        type : 'FETCH_USERS_REQUEST'
    };
}

export const fetchUserScccess = (users) =>{
    return{
        type: 'FETCH_USERS_SUCCESS',
        payload : users
    }
};

export const fetchUserError = (error)=>{
    return{
        type: 'FETCH_USERS_FAILURE',
        payload : error
    }
};

//async action creater
export const fetchUsers = ()=>{
    return function(dispatch){
        dispatch(fetchUserRequest());
        axios.get('https://jsonplaceholder.typicode.com/users').then(
            (response)=>{
                //response.date for array of users
                const users = response.data.map(user=>user.name);
                dispatch(fetchUserScccess(users));
            }
        ).catch((error)=>{
            //error.message for error
            dispatch(fetchUserError(error.message));
        }
        );
    };

};