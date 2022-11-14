import React from 'react';

function RandomFunction() {
  // 500GB -> 524288000 KB로 변환하여 트래픽이 그려질 수 있는 MAX값 지정
  var inbound = parseInt(Math.random() * 524287999 + 1);
  var outbound = parseInt(Math.random() * 524287999 + 1);
  var bound = { inbound, outbound };

  return <div> {bound} </div>;
}

export default RandomFunction;
