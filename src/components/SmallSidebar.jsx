import Wrapper from '../assets/wrappers/SmallSidebar'
import { FaTimes } from "react-icons/fa";
import Logo from "./Logo";
import { useDispatch, useSelector } from 'react-redux';
import { toggleSidebar } from '../features/user/userSlice';

const SmallSidebar = () => {
    const {isSidebarOpen}=useSelector((store)=>store.user)
    const dispatch= useDispatch()

    const toggle=()=>{
        dispatch(toggleSidebar())
    }
    console.log(isSidebarOpen)
  return (

    <Wrapper>
    <div className={isSidebarOpen ? "sidebar-container show-sidebar" : "sidebar-container"}>
        <div className="content">
            <button className="close-btn" onClick={toggle}>
                <FaTimes/>
            </button>
            <header>
                <Logo/>
            </header>
            <div className="nav-links">nav links</div>
        </div>
    </div>
    </Wrapper>
  )
}

export default SmallSidebar