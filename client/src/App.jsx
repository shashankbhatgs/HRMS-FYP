import { BrowserRouter, Route, Routes } from "react-router-dom"
import FacultyLogin from "./pages/FacultyLogin"
import FacultyRegister from "./pages/FacultyRegister"
import DashBoard from "./pages/DashBoard"

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>
          <Route path="/faculty-login" exact Component={FacultyLogin} />
          <Route path="/faculty-register" exact Component={FacultyRegister} />
          <Route path="/dashboard" exact Component={DashBoard} />
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
