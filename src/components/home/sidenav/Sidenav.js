import React from 'react'
import SidenavTitle from './SidenavTitle';

const Sidenav = () => {
  return (
    <div className="px-7 py-4">
      <SidenavTitle title="P" subTitle="rojects" />
      <ul>
        <li className="sidenavLi">Swift IOS Weather App</li>
        <li className="sidenavLi">POS System</li>
        <li className="sidenavLi">Pet Stop E-commerce</li>
        <li className="sidenavLi">Movie Folio</li>
        <li className="sidenavLi">Silk Harmony E-Commerce</li>
        <li className="sidenavLi">Student Enrollment System</li>
        <li className="sidenavLi">JavaFX Rally System</li>
        <li className="sidenavLi">Swift IOS Weather App</li>
        <li className="sidenavLi">Tgencon-Wordpress</li>
        <li className="sidenavLi">PalletChoice-Wordpress</li>
        <li className="sidenavLi">Tax Services-Wordpress</li>
        <li className="sidenavLi">Machinery-Wordpress</li>
        <li className="sidenavLi">KAYTS HVAC-Wordpress</li>
        <li className="sidenavLi">Figma UI Design - POS System</li>
      </ul>
      <SidenavTitle title="R" subTitle="each Me" />
      <ul>
        <li className="sidenavLi">076-440-9972</li>
        <li className="sidenavLi">ganeshamoorthykavinesh186@gmail.com</li>
      </ul>
    </div>
  );
}

export default Sidenav