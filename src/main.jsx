import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Sig from './Sig';
import CGU from './CGU';
import Auth from './Auth';
import NosServices from './NosServices';
import Partners from './Partners';

import {
  HashRouter,Router, Route, Routes,
  createHashRouter
} from "react-router-dom";

import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter >
      <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/home" element={<App/>}/>
        <Route path="/services" element={<NosServices/>}/> 
        <Route path="/partners" element={<Partners/>}/>
        <Route path="/cgu" element={<CGU/>}/>
        <Route path="/auth" element={<Auth/>}/>
        <Route path="/sig" element={<Sig/>}/>
        <Route path="/Auth" element={<Auth/>}/>
        <Route path="/Sig" element={<Sig/>}/>
      </Routes>
    </HashRouter>
  )
  
  /**<React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)**/
