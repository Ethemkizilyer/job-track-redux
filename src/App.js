import { BrowserRouter, Route, Routes } from "react-router-dom";
import {Landing,Error,Dashboard,Register} from "./pages/index";




function App() {
  return (
   <BrowserRouter>
   <Routes>
<Route path="/" element={<Dashboard/>}/>
<Route path="/landing" element={<Landing/>}/>
<Route path="/register" element={<Register/>}/>
<Route path="*" element={<Error/>}/>

   </Routes>
   
   </BrowserRouter>
  );
}

export default App;
