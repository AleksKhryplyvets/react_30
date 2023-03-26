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
    <Button onClick={logout}>Log out</Button>:
    <Button onClick={login}>Login</Button>}
    </div>
}

export default Auth;
