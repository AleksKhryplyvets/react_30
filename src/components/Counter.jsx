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
            <button onClick={hendleCountIncrement}>Increment</button>
            <button onClick={hendleCountDecrement}>Decrement</button>
            <button onClick={hendleCountReset}>Reset</button>
        </div>
    )
}

export default Counter;
