import {BrowserRouter as Router,Routes,Link,Route} from "react-router-dom"
import DashBoardComponent from "./Components/DashBoardComponent";
import LoginComponent from "./Components/LoginComponent"
function App() {
  return (
    <div>
      <Router>
      <nav>
        <Link to="/signin">Login</Link>
      </nav>
      <Routes>
        <Route path="/signin" element={<LoginComponent></LoginComponent>}></Route>
        <Route path="/dashboard/:email" element={<DashBoardComponent></DashBoardComponent>}></Route>
      </Routes>

      </Router>
    </div>
  );
}

export default App;
