import React from 'react';
import './featuredInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">일반장애 발생</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">826건</span>
          <span className="featuredMoneyRate">
            +6
            <ArrowUpwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last 1 min</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">일반장애 처리 완료</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">823건</span>
          <span className="featuredMoneyRate">
            +3
            <ArrowUpwardIcon className="featuredIcon" />
          </span>
        </div>
        <span className="featuredSub">Compared to last 1 min</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">일반장애 미완료</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">3건</span>
          <span className="featuredMoneyRate">
            -2
            <ArrowDownwardIcon className="featuredIcon negative" />
          </span>
        </div>
        <span className="featuredSub">Compared to last 1 min</span>
      </div>
    </div>
  );
}

export default FeaturedInfo;
