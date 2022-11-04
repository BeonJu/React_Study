import React from 'react';
import './sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import StorefrontIcon from '@mui/icons-material/Storefront';
import RequestPageIcon from '@mui/icons-material/RequestPage';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import FeedbackIcon from '@mui/icons-material/Feedback';
import MessageIcon from '@mui/icons-material/Message';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* sidebarWrapper: sidebar div 묶음 */}
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Dashboard </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <HomeIcon className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem">
              <TrendingUpIcon className="sidebarIcon" />
              Analystics
            </li>
            <li className="sidebarListItem">
              <MonetizationOnIcon className="sidebarIcon" />
              Sales
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> Quick </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <PersonOutlineIcon className="sidebarIcon" />
              Users
            </li>
            <li className="sidebarListItem">
              <StorefrontIcon className="sidebarIcon" />
              Produdct
            </li>
            <li className="sidebarListItem">
              <RequestPageIcon className="sidebarIcon" />
              Tansactions
            </li>
            <li className="sidebarListItem">
              <EqualizerIcon className="sidebarIcon" />
              Report
            </li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle"> notifications </h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutlineIcon className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <FeedbackIcon className="sidebarIcon" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <MessageIcon className="sidebarIcon" />
              Messages
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
