import { useReducer } from 'react';

// Reducer function
const counterReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    case 'RESET':
      return { count: 0 };
    case 'SET':
      return { count: action.payload };
    default:
      return state;
  }
};

const UseReducerExample = () => {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <h2>useReducer Hook Example</h2>
      <div>
        <h3>Count: {state.count}</h3>
        <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
        <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
        <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
        <button onClick={() => dispatch({ type: 'SET', payload: 10 })}>Set to 10</button>
      </div>
      <p>useReducer is useful for complex state logic with multiple actions</p>
    </div>
  );
};

export default UseReducerExample;