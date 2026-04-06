import { useState, useEffect } from 'react';

const UseEffectExample = () => {
  const [count, setCount] = useState(0);
  const [data, setData] = useState(null);

  // Effect runs on every render
  useEffect(() => {
    console.log('Component rendered or updated');
  });

  // Effect runs only on mount
  useEffect(() => {
    console.log('Component mounted');
    // Simulate API call
    setTimeout(() => {
      setData('Data loaded from API');
    }, 2000);
  }, []);

  // Effect runs when count changes
  useEffect(() => {
    console.log('Count changed:', count);
    document.title = `Count: ${count}`;
  }, [count]);

  return (
    <div>
      <h2>useEffect Hook Example</h2>
      <div>
        <h3>Count: {count}</h3>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
      <div>
        <h3>API Data: {data || 'Loading...'}</h3>
      </div>
      <p>Check console for useEffect logs</p>
    </div>
  );
};

export default UseEffectExample;