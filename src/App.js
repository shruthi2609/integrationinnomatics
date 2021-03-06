import {BrowserRouter as Router,Routes,Link,Route} from "react-router-dom"
import DashBoardComponent from "./Components/DashBoardComponent";
import EffectHook from "./Components/EffectHookEg";
import LoginComponent from "./Components/LoginComponent"
import UpdateProfile from "./Components/UpdateProfile";
import Login from "./GoogleComponents/Login";
import DashBoardGoogle from "./GoogleComponents/DashBoardGoogle";
function App() {
  return (
    <div>
    { /* <Router>
      <nav>
        <Link to="/signin">Login</Link>
        
      </nav>
      <Routes>
        <Route path="/signin" element={<LoginComponent></LoginComponent>}></Route>
        <Route path="/dashboard/:email" element={<DashBoardComponent></DashBoardComponent>}></Route>
        <Route path="/update" element={<UpdateProfile></UpdateProfile>}></Route>
      </Routes>

  </Router>*/}
  <Router>
  <nav>
        <Link to="/signin">Login</Link>
      </nav>
      <Routes>
        <Route path="/signin" element={<Login></Login>}></Route>
        <Route path="/dashboard" element={<DashBoardGoogle></DashBoardGoogle>}></Route>
      </Routes>
  </Router>
    </div>
  );
}

export default App;
