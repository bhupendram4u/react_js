import { useRef, forwardRef, useImperativeHandle } from 'react';

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef();

  useImperativeHandle(ref, () => ({
    focus: () => {
      inputRef.current.focus();
    },
    clear: () => {
      inputRef.current.value = '';
    },
    getValue: () => {
      return inputRef.current.value;
    }
  }));

  return <input ref={inputRef} type="text" placeholder="Type something..." />;
});

CustomInput.displayName = 'CustomInput';

const UseImperativeHandleExample = () => {
  const inputRef = useRef();

  const handleFocus = () => {
    inputRef.current.focus();
  };

  const handleClear = () => {
    inputRef.current.clear();
  };

  const handleGetValue = () => {
    alert(`Input value: ${inputRef.current.getValue()}`);
  };

  return (
    <div>
      <h2>useImperativeHandle Hook Example</h2>
      <CustomInput ref={inputRef} />
      <div style={{ marginTop: '10px' }}>
        <button onClick={handleFocus}>Focus Input</button>
        <button onClick={handleClear}>Clear Input</button>
        <button onClick={handleGetValue}>Get Value</button>
      </div>
      <p>useImperativeHandle customizes the instance value exposed by ref</p>
    </div>
  );
};

export default UseImperativeHandleExample;