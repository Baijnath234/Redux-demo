import React from 'react';
import {FcSelfServiceKiosk, FcAbout, FcContacts, FcSettings, FcDocument, FcPrivacy} from 'react-icons/fc';
import {MdProductionQuantityLimits , MdDashboardCustomize} from 'react-icons/md';
import {FaUserCog} from 'react-icons/fa';
import { Link } from "react-router-dom";

const Sidebar = (props: any) => {
    console.log(props.sideBar)
  return (
    <div className={props.sideBar ? "open-sidebar" : "close-sidebar"}>
        <div>
    
          <ul className="uk-list">
            <Link className="uk-flex icon" to="/dashboard "><MdDashboardCustomize/><li>Dashboard</li></Link> 
            <Link className="uk-flex icon" to="/service"><FcSelfServiceKiosk/><li>User Details</li></Link>
            <Link className="uk-flex icon" to="/product"><MdProductionQuantityLimits/> <li>Add New Product</li></Link>
            <Link className="uk-flex icon" to="/workReport"><FcAbout/><li>Work Report</li></Link>
            <Link className="uk-flex icon" to="/contactDetails"><FcContacts/><li>Contact Details</li></Link>
            <Link className="uk-flex icon" to="/setting"><FcSettings/> <li>Settings</li></Link>
          </ul>
          <hr />
          <ul className="uk-list-2">
            <Link className="uk-flex icon" to="##"><FaUserCog/><li>Edit Profile</li></Link>
            <Link className="uk-flex icon" to="##"><FcDocument/><li>Documentation</li></Link>
            <Link className="uk-flex icon" to="##"><FcPrivacy/><li>Privacy & Policy</li></Link>
          </ul>
          </div>
    </div>
  )
}

export default Sidebar
