import React from 'react';
import './switch.css';

// Ref URL   React Switch Toggle
// https://upmostly.com/tutorials/build-a-react-switch-toggle-component

const Switch = ({ isOn, handleToggle_enable, onColor, isId }) => {
  return (
    <>
      <input
        // checked 상태가 isOn의 값인 true or false로 상태가 변하며 onChange가 연쇄 작용 한다
        checked={isOn}
        // 스위치 토글 버튼이 클릭 되여 켜짐으로 checked가 true로 상태가 변하면서 onChange가 실행되고
        // handleToggle_enable 함수가 실행 된다.
        onChange={handleToggle_enable}
        className="react-switch-checkbox"
        // id={`react-switch-new`}
        id={isId}
        type="checkbox"
        //  ref={}
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
