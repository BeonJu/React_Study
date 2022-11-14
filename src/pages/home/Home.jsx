import React from 'react';
import FeaturedInfo from '../../component/featuredInfo/FeaturedInfo';
import SalesChart from '../../component/chart/SalesChart';
import StockChart from '../../component/chart/StockChart';
// linechart dummy data import
import DomesticNetworkTrafficOneHour from '../../dummy/DomesticNetworkTrafficOneHour.json';
import { stockData } from '../../dummy/StockChartdata';

import WidgetsLarge from './../../component/widgetsLarge/WidgetsLarge';
import WidgetsSmall from './../../component/widgetssmall/WidgetsSmall';
import './home.css';

var rObj = {};
console.log(DomesticNetworkTrafficOneHour);

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      {/* linechart를 그릴 data 값, chart component 재사용을 위하여 props 사용 */}
      <div className="charts">
        <SalesChart
          data={DomesticNetworkTrafficOneHour}
          title="IDC *** 센터 국내망 Total Traffic"
          grid
          // DomesticNetworkTrafficOneHour.json 에서 key값으로 데이터 추출 해옵니다.
          datakeyName="chartLaw"
          datakeyRateInBound="inBound"
          datakeyRateOutBound="outBound"
        />
        <StockChart
          data={stockData}
          title="IDC *** 센터 해외망 Total Traffic"
          grid
          // stockData.js에 배열에서 key값으로 데이터 추출 해옵니다.
          datakeyName="name"
          datakeyRate="stockrate"
        />
      </div>
      <div className="homeWidgets">
        <WidgetsSmall />
        <WidgetsLarge />
      </div>
    </div>
  );
}

export default Home;
