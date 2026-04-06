import { useState, useMemo } from 'react';

const UseMemoExample = () => {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState('');

  // Expensive calculation - memoized
  const expensiveValue = useMemo(() => {
    console.log('Computing expensive value...');
    let result = 0;
    for (let i = 0; i < 100000000; i++) {
      result += i;
    }
    return result + count;
  }, [count]);

  return (
    <div>
      <h2>useMemo Hook Example</h2>
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment Count</button>
      </div>
      <div>
        <h3>Expensive Value: {expensiveValue}</h3>
        <p>Changing count triggers expensive calculation</p>
      </div>
      <div>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type here (doesn't trigger expensive calc)"
        />
        <p>Input: {input}</p>
      </div>
      <p>Check console to see when expensive calculation runs</p>
    </div>
  );
};

export default UseMemoExample;