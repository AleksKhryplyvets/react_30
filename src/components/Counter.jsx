import { useDispatch, useSelector } from 'react-redux';
import Auth from './Auth';

const Counter = () => {
    const dispatch = useDispatch()
    const state = useSelector(({count}) => count);
    console.log(state);
    const increment = () => {
        dispatch({ type: "Increment" });
    };
    const decrement = () => {
      dispatch({ type: "Decrement" });
    };
    const reset  = () => {
      dispatch({ type: "Reset" });
    };
    return (
        <div>
            <h1>Counter: {state.count}</h1>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={reset}>Reset</Button>
            <Auth/>
        </div>
    )
}

export default Counter;
