import Wrapper from "../assets/wrappers/Navbar";
import { FaHome,FaAlignLeft,FaUserCircle,FaCaretDown } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import Logo from "./Logo";
import { clearStore, logoutUser, toggleSidebar } from "../features/user/userSlice";
import { useState } from "react";

export const Navbar = () => {
  const [showLogout,setShowLogout]= useState(false)
  const {user}=useSelector((store)=>store.user)
  const dispatch=useDispatch()
  

  const toggle=()=>{
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className="nav-center">
        <button className="toggle-btn" type="button" onClick={toggle}>
          <FaAlignLeft />
        </button>
        <div>
          <Logo />
          <h3 className="logo-text">dashboard</h3>
        </div>
        <div className="btn-container">
          <button
            className="btn"
            type="button"
            onClick={() => setShowLogout(!showLogout)}
          >
            <FaUserCircle /> {user?.name} <FaCaretDown />
          </button>
          <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
            <button
              className="dropdown-btn"
              type="button"
              onClick={()=>dispatch(clearStore("Loggin Successful..."))}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};
