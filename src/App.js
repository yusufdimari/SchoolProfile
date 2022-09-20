import "./css/App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginPage from "./Pages/Auth/LoginPage";
import SignUpScreen from "./Pages/Auth/SignUpScreen";
import ErrorPage from "./Pages/ErrorPage";
import ExternalPage from "./Pages/ExternalPage";
import AppProvider from "./components/Auth/AppProvider";
import Schools from "./Pages/Schools";
import Profile from "./Pages/ProfileScreen";
import ProtectedRoute from "./Pages/Auth/ProtectedRoute";
import MySchool from "./Pages/MySchool";
import { ProvideAuth } from "./components/Auth/use-auth";
function App() {
  return (
    <body>
      <Router>
        <ProvideAuth>
          <Navbar />
          <Routes>
            <Route path="/SchoolProfile/login" element={<LoginPage />}></Route>
            {/* <Route path="/SchoolProfile/map" element={<Map />}></Route> */}
            <Route
              path="/SchoolProfile/signup"
              element={<SignUpScreen />}
            ></Route>
            <Route path="/SchoolProfile/" element={<Home />}></Route>
            <Route path="/SchoolProfile/home" element={<Home />}></Route>
            <Route
              path="/SchoolProfile/profile"
              element={
                <ProtectedRoute>
                  <Profile />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="/SchoolProfile/schools"
              element={
                <ProtectedRoute>
                  <Schools />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/SchoolProfile/*" element={<ErrorPage />}></Route>
            <Route path="/SchoolProfile/instagram" element={<ExternalPage />} />
          </Routes>
          <footer>
            <Footer />
          </footer>
        </ProvideAuth>
      </Router>
    </body>
  );
}

export default App;
