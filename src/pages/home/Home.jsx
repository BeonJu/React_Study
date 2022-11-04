import React from 'react';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import Chart from '../../component/chart/Chart';
// linechart dummy data import
import { userData } from '../../dummy/Chartdata';
import WidgetsLarge from './../../component/widgetsLarge/WidgetsLarge';
import WidgetsSmall from './../../component/widgetssmall/WidgetsSmall';
import './home.css';

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* linechart를 그릴 data 값, chart component 재사용을 위하여 props 사용 */}
      <Chart
        data={userData}
        title="Salse Analytics"
        grid
        // Chartdata.js에 배열에서 key값으로 데이터 추출 해옵니다.
        datakeyName="name"
        datakeyRate="salesrate"
      />
      <div className="homeWidgets">
        <WidgetsSmall />
        <WidgetsLarge />
      </div>
    </div>
  );
}

export default Home;
