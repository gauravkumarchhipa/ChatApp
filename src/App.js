import "./style.scss";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
function App() {

  const {currentUser} = useContext(AuthContext);
  
  const ProtectedRoute = ({children}) =>{
    if(!currentUser){
      return <Navigate to="/login" />
    }
    return children
  }
  return (
    < >
      <Router>
        <Routes>
          <Route path="/">
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route index element={<ProtectedRoute><Home/></ProtectedRoute>}/>
          </Route>
        </Routes>
      </Router>

       
     
    </>
  );
}

export default App;
