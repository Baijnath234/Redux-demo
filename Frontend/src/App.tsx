import React, { useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Layout/Header";
import Sidebar from "./Components/Layout/Sidebar";
import Dashboard from "./Components/Dashboard";
import PopupFromItem from "./Components/PopupFromItemAdd";
import PopupFormItemEdit from "./Components/PopupFromItemEdit";
import Service from "./Components/userData";
import Product from "./Components/Product"
import WorkReport from './Components/WorkReport'
import ContactDetails from "./Components/ContactDetails";
import Setting from './Components/Setting'
import Login from "./Components/Login/Logout/Login";


function App() {
  const [modal, setModal] = useState(false);
const [sideBar, setSideBar] = useState(false)

const totalData = '100%';
  const averageData = '25%';

  return (
    <BrowserRouter>
     <div>
      <div>
        <Header setSideBar={setSideBar} sideBar={sideBar}/>
      </div>
      <div className="uk-flex" style={{height: "calc(100vh)", width:'100%'}}>
        <Sidebar sideBar={sideBar} />
        <PopupFromItem modal={modal} setModal={setModal} />
        <PopupFormItemEdit />
        <div className='content-padder uk-container' style={sideBar ? {width: '100%', maxHeight: "100vh", overflow:"scroll"} : {}}>
        <Routes>
         {/* <Route path="/" element={<Login />}/> */}
          <Route
            path="/dashboard"
            element={<Dashboard  totalData={totalData} averageData={averageData}/>}
          />
          <Route path="/service" element={<Service />} />
          <Route path="/product" element={<Product modal={modal} setModal={setModal} />} />
          <Route path="/workReport" element={<WorkReport/>} />
          <Route path="/contactDetails" element={<ContactDetails/>} />
          <Route path="/setting" element={<Setting/>} />
          
        </Routes>
        </div>
      </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
