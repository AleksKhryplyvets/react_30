import { useDispatch, useSelector } from "react-redux";

const Auth = () => {
    const dispatch = useDispatch();
    const state = useSelector(({auth}) => auth);
    const login = () => {
        dispatch({type: 'Login'});
    }
    const logout = () => {
        dispatch({type: 'Logout'});
    }
    return <div>
        <h2>
            Login state: {state.isAuth? 'true' : 'false'}
        </h2>
    {state.isAuth?
    <button onClick={logout}>Log out</button>:
    <button onClick={login}>Login</button>}
    </div>
}

export default Auth;
