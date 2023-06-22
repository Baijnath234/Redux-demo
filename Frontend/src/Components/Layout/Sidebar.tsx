import React from 'react';
import {FcSelfServiceKiosk, FcAbout, FcContacts, FcSettings, FcDocument, FcPrivacy} from 'react-icons/fc';
import {MdProductionQuantityLimits , MdDashboardCustomize} from 'react-icons/md';
import {FaUserCog} from 'react-icons/fa';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import {useState, useEffect} from 'react';
import  translation  from '../../Translation/translate.json'

const Sidebar = (props: any) => {
    // console.log(props.sideBar)

    const [content, setContent] = useState<any>({});
    const custom = useSelector((state: any) => state.custom);
  
    useEffect(() => {
      switch (custom.Language) {
        case "english":
          setContent(translation.Language.english);
          break;
        case "Hindi":
          setContent(translation.Language.Hindi);
          break;
        case "Japanese":
          setContent(translation.Language.Japanese);
          break;
        default:
          setContent(translation.Language.english);
          break;
      }
    },[custom.Language]);
  
  return (
    <div className={props.sideBar ? "open-sidebar" : "close-sidebar"}>
        <div>
    
          <ul className="uk-list">
            <Link className="uk-flex icon" to="/dashboard "><MdDashboardCustomize/><li>{content.SidebarContent1}</li></Link> 
            <Link className="uk-flex icon" to="/service"><FcSelfServiceKiosk/><li>{content.SidebarContent2}</li></Link>
            <Link className="uk-flex icon" to="/product"><MdProductionQuantityLimits/> <li>{content.SidebarContent3}</li></Link>
            <Link className="uk-flex icon" to="/workReport"><FcAbout/><li>{content.SidebarContent4}</li></Link>
            <Link className="uk-flex icon" to="/contactDetails"><FcContacts/><li>{content.SidebarContent5}</li></Link>
            <Link className="uk-flex icon" to="/setting"><FcSettings/> <li>{content.SidebarContent6}</li></Link>
          </ul>
          <hr />
          <ul className="uk-list-2">
            <Link className="uk-flex icon" to="##"><FaUserCog/><li>{content.List1}</li></Link>
            <Link className="uk-flex icon" to="##"><FcDocument/><li>{content.List2}</li></Link>
            <Link className="uk-flex icon" to="##"><FcPrivacy/><li>{content.List3}</li></Link>
          </ul>
          </div>
    </div>
  )
}

export default Sidebar
