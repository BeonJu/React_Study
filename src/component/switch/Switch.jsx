import React from 'react';
import './switch.css';

// Ref URL   React Switch Toggle
// https://upmostly.com/tutorials/build-a-react-switch-toggle-component

const Switch = ({ isOn, handleToggle, onColor, isId }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle}
        className="react-switch-checkbox"
        // id={`react-switch-new`}
        id={isId}
        type="checkbox"
      />
      <label
        style={{
          background: isOn && onColor,
        }}
        className="react-switch-label"
        htmlFor={isId}
      >
        <span className={`react-switch-button`} />
      </label>
    </>
  );
};

export default Switch;
