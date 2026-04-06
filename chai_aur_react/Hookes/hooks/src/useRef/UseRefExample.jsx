import { useState, useRef, useEffect } from 'react';

const UseRefExample = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  useEffect(() => {
    renderCount.current += 1;
  });

  const focusInput = () => {
    inputRef.current.focus();
  };

  const incrementWithoutReRender = () => {
    renderCount.current += 1;
    console.log('Render count (no re-render):', renderCount.current);
  };

  return (
    <div>
      <h2>useRef Hook Example</h2>
      <div>
        <h3>Render Count: {renderCount.current}</h3>
        <button onClick={() => setCount(count + 1)}>Increment State (causes re-render)</button>
        <button onClick={incrementWithoutReRender}>Increment Ref (no re-render)</button>
      </div>
      <div>
        <input ref={inputRef} type="text" placeholder="Click focus button" />
        <button onClick={focusInput}>Focus Input</button>
      </div>
      <p>useRef persists values between renders without causing re-renders</p>
    </div>
  );
};

export default UseRefExample;