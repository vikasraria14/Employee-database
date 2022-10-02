import Home from "./Components/Home";
import './App.css'
import {
  BrowserRouter as Router,
  Routes, Route
} from "react-router-dom"
import ViewEmployee from "./Components/ViewEmployee";
import EditEmployee from "./Components/EditEmployee";
const App = () => {
  return (
    <div className="main">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/employee/:id" element={<ViewEmployee/>}/>
          <Route path="/employee/edit/:id" element={<EditEmployee/>}/>
        </Routes>
      </Router>

    </div>
  )
}
export default App;