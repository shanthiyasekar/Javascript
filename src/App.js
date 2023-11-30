import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EmpListing from "./EmpListing";
import EmpEdit from "./EmpEdit";
import EmpCreate from "./EmpCreate";
import EmpDetail from "./EmpDetail";
function App() {

  
  return (
    <div className="App">
      <h1>ReactJs Crud Operation</h1>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<EmpListing />}></Route>
          <Route path="/employee/create" element={<EmpCreate/>}></Route>
          <Route path="/employee/detail/:empid" element={<EmpDetail/>}></Route>
          <Route path="/employee/edit/:empid" element={<EmpEdit/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
