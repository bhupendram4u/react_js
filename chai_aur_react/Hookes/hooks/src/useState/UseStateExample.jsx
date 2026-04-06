import { useState } from 'react';

const UseStateExample = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div>
      <h2>useState Hook Example</h2>
      <div>
        <h3>Counter: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
        <button onClick={() => setCount(count - 1)}>Decrement</button>
        <button onClick={() => setCount(0)}>Reset</button>
      </div>
      <div>
        <h3>Text Input</h3>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Type something..."
        />
        <p>You typed: {text}</p>
      </div>
    </div>
  );
};

export default UseStateExample;