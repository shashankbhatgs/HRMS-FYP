import { BrowserRouter, Route, Routes } from "react-router-dom"
import FacultyLogin from "./pages/FacultyLogin"
import FacultyRegister from "./pages/FacultyRegister"
import DashBoard from "./pages/DashBoard"
import StaffLogin from "./components/StaffLogin";
import Profile from "./components/Profile"; 
import Notification from "./components/Notification"
import StaffStatus from "./components/StaffStatus"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/faculty-login" exact Component={FacultyLogin} />
          <Route path="/faculty-register" exact Component={FacultyRegister} />
          <Route path="/dashboard" exact Component={DashBoard} />
          <Route path="/staff-login" exact Component={StaffLogin} />
          <Route path="/profile" exact Component={Profile} />
          <Route path="/notifications" exact Component={Notification} />
          <Route path="/staff-status" exact Component={StaffStatus} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
