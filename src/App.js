import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import {Landing,Error,Register} from "./pages/index";
import "react-toastify/dist/ReactToastify.css"
import {SharedLayout,Stats,Profile,AddJob,AllJobs} from "./pages/dashboard/index";


function App() {
  return (
   <BrowserRouter>
   <Routes>
   <Route path="/" element={<SharedLayout/>}>
<Route index element={<Stats/>}/>
<Route path="all-jobs" element={<AllJobs/>}/> 
<Route path="add-job" element={<AddJob/>}/> 
<Route path="profile" element={<Profile/>}/> 
</Route>

<Route path="/register" element={<Register/>}/>
<Route path="/landing" element={<Landing/>}/>
<Route path="*" element={<Error/>}/>
</Routes>
 <ToastContainer position="top-center"/>
   </BrowserRouter>
  );
}

export default App;
