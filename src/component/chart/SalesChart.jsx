import React from 'react';
// yarn add recharts  https://recharts.org/en-US/ 차트를 그려주는 라이브러리 설치
import './saleschart.css';
// import { ... } from ''recharts; recharts 라이브러리 안에 사용할 클래스(alias명) 선언
import {
  // 차트 종류
  // AreaChart
  // BarChart
  // LineChart
  // ComposedChart
  // PieChart
  // RadarChart
  // RadialBarChart
  // ScatterChart
  // FunnelChart
  // Treemap
  // SankeyChart
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import Switch from '../switch/Switch';
import { useState } from 'react';

function SalesChart({
  title,
  data,
  datakeyName,
  datakeyRateInBound,
  datakeyRateOutBound,
  grid,
}) {
  // Switch Toggle 체크 박스를 클릭 시 각 각 동작 하기 위하여 setValue를 1~3까지 선언 했습니다.
  // value1의 디폴트 값이 true인 이유는 화면 처음 랜더링시 5 min 그래프를 그려 주기 위함임
  const [value1, setValue1] = useState(true);
  const [value2, setValue2] = useState(false);
  const [value3, setValue3] = useState(false);
  // react-switch-new-01 ~ 03 버튼을 하나 클릭 시 다른 버튼은 off 되는 이벤트
  const onTrueVal1 = () => {
    setValue1((value1) => (value1 = true));
  };
  const onTrueVal2 = () => {
    setValue2((value2) => (value2 = true));
  };
  const onTrueVal3 = () => {
    setValue3((value3) => (value3 = true));
  };
  const onFalseVal1 = () => {
    setValue1((value1) => (value1 = false));
  };
  const onFalseVal2 = () => {
    setValue2((value2) => (value2 = false));
  };
  const onFalseVal3 = () => {
    setValue3((value3) => (value3 = false));
  };

  return (
    <div className="SalesChart">
      <div className="chartSwitch">
        <h3 className="chartTitle">{title}</h3>
        {/*  aspect 는 width / height 의 비율을 지정 */}
        {/* SW toggle 로 Hours, Day, Month Traffic Chart Change 
        Ref site : https://xiubindev.tistory.com/97
        */}
        <Switch
          isOn={value1}
          onColor="#EF476F"
          isId="react-switch-new-01"
          handleToggle_enable={() => {
            onTrueVal1();
            onFalseVal2();
            onFalseVal3();
          }}
        />
        <Switch
          isOn={value2}
          onColor="#06D6A0"
          isId="react-switch-new-02"
          handleToggle_enable={() => {
            onFalseVal1();
            onTrueVal2();
            onFalseVal3();
          }}
        />
        <Switch
          isOn={value3}
          onColor="#FF8000"
          isId="react-switch-new-03"
          handleToggle_enable={() => {
            onFalseVal1();
            onFalseVal2();
            onTrueVal3();
          }}
        />
      </div>

      <ResponsiveContainer aspect={4 / 1} width="100%">
        {/* linechart에 데이터를 넣고 x축 y축 값을 지정 */}

        <LineChart data={data}>
          {/* X축 const data.name이 key 값이 된다. stroke는 x축의 색상 코드이다 */}
          <XAxis dataKey={datakeyName} stroke="#5550bd" />
          <Line type="monotone" dataKey={datakeyRateInBound} stroke="#66FF66" />
          <Line
            type="monotone"
            dataKey={datakeyRateOutBound}
            stroke="#0000FF"
          />
          {/* 마우스로 그래프 hover시 data 출력 */}
          <Tooltip />
          {/* 데카르트 좌표?   */}
          {/* <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" /> */}
          {/* props로 grid를 받을아서 grid가 있을 경우에만 109라인 명렁어 활성화 */}
          {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export default SalesChart;
