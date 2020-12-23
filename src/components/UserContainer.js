import React,{useEffect} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from "../redux/user/userActions";
function UserContainer() {
    const state = useSelector(state=>state);
    const dispatch = useDispatch();
    useEffect(()=>dispatch(fetchUsers()),[]);
    return state.user.loading ? (
        <h1>
            Loading...
        </h1>
    ):state.user.error ?(
        <h2>
            {state.user.error}
        </h2>
    ):(
        <div>
            <h1>Users</h1>
            {
                state.user.users.map(user=><p>{user}</p>)
            }
        </div>
    );
}
export default UserContainer;
