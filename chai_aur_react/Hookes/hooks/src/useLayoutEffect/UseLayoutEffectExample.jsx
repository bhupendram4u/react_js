import { useState, useLayoutEffect, useRef } from 'react';

const UseLayoutEffectExample = () => {
  const [width, setWidth] = useState(0);
  const elementRef = useRef(null);

  useLayoutEffect(() => {
    if (elementRef.current) {
      setWidth(elementRef.current.offsetWidth);
    }
  }, []);

  return (
    <div>
      <h2>useLayoutEffect Hook Example</h2>
      <div
        ref={elementRef}
        style={{
          width: '50%',
          height: '100px',
          backgroundColor: 'lightblue',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto'
        }}
      >
        Resize me!
      </div>
      <p>Element width: {width}px</p>
      <p>useLayoutEffect runs synchronously after DOM mutations but before paint</p>
    </div>
  );
};

export default UseLayoutEffectExample;