import { useDispatch, useSelector } from 'react-redux';
import Auth from './Auth';

const Counter = () => {
    const dispatch = useDispatch()
    const value = useSelector(({count}) => count);
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
            <h1>Counter: {value.count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={reset}>Reset</button>
            <Auth/>
        </div>
    )
}

export default Counter;
