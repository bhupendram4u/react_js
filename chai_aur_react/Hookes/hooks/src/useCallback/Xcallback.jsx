import { useState, useCallback } from 'react';
import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [clicked, setClicked] = useState(false);

    const handleItemClickWithCallback = useCallback((item) => {
      console.log(`With useCallback: ${item} clicked`);
    }, []);

    const handleItemClickWithoutCallback = (item) => {
      console.log(`Without useCallback: ${item} clicked`);
    };

    console.log('Parent rendered');

    return (
      <div>
        <h2>useCallback Demonstration</h2>
        <p>Click "Parent Click" to re-render parent. Check console for child re-renders.</p>
        <button onClick={() => setClicked((prev) => !prev)}>Parent Click (triggers re-render)</button>
        <p>Parent state: {clicked.toString()}</p>

        <h3>Child Components:</h3>
        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <h4>Child with useCallback function:</h4>
          <ChildComponent onItemClick={handleItemClickWithCallback} label="With useCallback" />
        </div>

        <div style={{ margin: '10px', padding: '10px', border: '1px solid #ccc' }}>
          <h4>Child with regular function:</h4>
          <ChildComponent onItemClick={handleItemClickWithoutCallback} label="Without useCallback" />
        </div>
      </div>
    );
};

export default ParentComponent;