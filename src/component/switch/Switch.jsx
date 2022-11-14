import React from 'react';
import './switch.css';

// Ref URL   React Switch Toggle
// https://upmostly.com/tutorials/build-a-react-switch-toggle-component

const Switch = ({ isOn, handleToggle_enable, onColor, isId }) => {
  return (
    <>
      <input
        checked={isOn}
        onChange={handleToggle_enable}
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
