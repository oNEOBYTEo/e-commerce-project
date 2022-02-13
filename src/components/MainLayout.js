import React from 'react';
import { Outlet } from 'react-router-dom'
import { NavBar } from '.';
import '../styles/mainLayout.css'

const MainLayout = () => {
  return ( 
    <div>
      <NavBar />
      <Outlet />
      <footer>
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Colombia</p>
        <i className="fas fa-phone-alt"></i>
        <p style={{display: "inline-block"}}>321-222-2222</p>
      </footer>
    </div>
   );
}
 
export default MainLayout;