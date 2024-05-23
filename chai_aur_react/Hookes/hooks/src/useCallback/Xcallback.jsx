import { useState } from 'react';
// import ChildComponent from './ChildComponent';

const ParentComponent = () => {
    const [items, setItems] = useState(['item1', 'item2', 'item3']);
  
    const handleItemClick = (item) => {
      console.log(`Item ${item} clicked`);
    };
  
    return (
      <div>
        {items.map((item, index) => (
          <div key={index}>
            <span>{item}</span>
            <button onClick={() => handleItemClick(item)}>Click</button>
          </div>
        ))}
      </div>
    );
  };
  
  export default ParentComponent;