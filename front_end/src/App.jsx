import { Route, Routes } from "react-router-dom"
import CaptainLogin from "./pages/CaptainLogin"
import CaptainSignUp from "./pages/CaptainSignUp"
import Home from "./pages/Home"
import UserDashboard from "./pages/UserDashboard"
import UserLogin from "./pages/UserLogin"
import UserSignUp from "./pages/UserSignUp"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/userSignUp" element={<UserSignUp />} />
        <Route path="/userLogin" element={<UserLogin />} />
        <Route path="/captainLogin" element={<CaptainLogin />} />
        <Route path="/captainSignUp" element={<CaptainSignUp />} />
        <Route path="/userDashboard" element={<UserDashboard/>} />
      </Routes>
    </div>
  )
}

export default App
