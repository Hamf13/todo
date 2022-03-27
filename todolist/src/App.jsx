import { Route, Routes } from "react-router-dom";
import Login from "./pages/login/Index";
import Register from "./pages/register/Index";
import Main from "./pages/main/Index";

function App() {
  return (
    <div className="App">
     <Routes>
     <Route path="/"  element={<Login/>}/>
     <Route path="/register"  element={<Register/>}/>
     <Route path="/main"  element={<Main/>}/>
     </Routes>
    </div>
  );
}

export default App;
