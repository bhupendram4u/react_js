import { memo, useState } from 'react';
import PropTypes from 'prop-types';

const ChildComponent = ({ onItemClick, label }) => {
    const [childCount, setChildCount] = useState(0);

    console.log(`Child Rendered - ${label} (child state: ${childCount})`);

    return (
      <div>
        <button onClick={() => onItemClick('test item')}>Click me ({label})</button>
        <button onClick={() => setChildCount(c => c + 1)}>
          Child State: {childCount}
        </button>
      </div>
    );
};

ChildComponent.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  label: PropTypes.string.isRequired,
};

export default memo(ChildComponent);