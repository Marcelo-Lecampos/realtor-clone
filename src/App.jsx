import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home} from "./pages/Home";
import { ForgotPassword} from "./pages/ForgotPassword";
import { Offers} from "./pages/Offers";
import { Profile} from "./pages/Profile";
import { SignIn} from "./pages/SignIn";
import { SignUp} from "./pages/SignUp";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
