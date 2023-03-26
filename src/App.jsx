import { createStore, combineReducers} from 'redux';
import { Provider } from 'react-redux';
import {countReducer} from './redusers/ReduxCoun';
import {authReducer} from './redusers/ReduxAuth';
import Counter from './components/Counter';

function App() {
  const rootReduser = compoundReducers({
    count: countReducer,
    auth: authReducer

  })
  const store = createStore(rootReduser);
  return(
    <div>
      <Provider store={store}>
        <Counter />
      </Provider>
    </div>
  ) 
}

export default App;


