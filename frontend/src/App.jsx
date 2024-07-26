import "./App.css";
// import { useContext } from "react";
import { Routes, Route, Outlet } from "react-router-dom";
// import { UserContext } from "./userContext";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import TopBar from "./components/navbar/TopBar";
import SideBar from "./components/navbar/SideBar";
import { UserProvider } from "./userContext";
import Signup from "./components/signup/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/dashboards/Dashboard";
import ParentDashboard from "./components/dashboards/ParentDashboard";
import StudentDashboard from "./components/dashboards/StudentDashboard";
import TeacherDashboard from "./components/dashboards/TeacherDashboard";
import Notfound from "./components/Notfound/Notfound";
import EdupreneursLandingPage from "./components/LandingPage/LandingPage";
import Preloader from "./components/preloader/preloader";
import { useState, useEffect } from "react";
import ContactUs from "./components/conatctUs/ContactUs";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div data-theme="nord">
      {loading ? (
        <Preloader />
      ) : (
        <div>
          <UserProvider>
            <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route
                path="/login"
                element={<Login setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route
                path="/signup"
                element={<Signup setIsLoggedIn={setIsLoggedIn} />}
              />
              <Route path="/*" element={<Notfound />} />
              <Route path="/landingPage" element={<EdupreneursLandingPage />} />

              {/* Routes that should use the Layout component */}
              <Route
                element={
                  <Layout
                    isLoggedIn={isLoggedIn}
                    setIsLoggedIn={setIsLoggedIn}
                  />
                }
              >
                <Route
                  path="/dashboard"
                  element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                      <Dashboard />
                    </PrivateRoute>
                  }
                />
                <Route path="/parentDashboard" element={<ParentDashboard />} />
                <Route
                  path="/studentDashboard"
                  element={<StudentDashboard />}
                />
                <Route
                  path="/teacherDashboard"
                  element={<TeacherDashboard />}
                />
                <Route
                  path="/contactus"
                  element={
                    <PrivateRoute isLoggedIn={isLoggedIn}>
                      <ContactUs />
                    </PrivateRoute>
                  }
                />
                {/* Add other routes that should use the Layout here */}
              </Route>
            </Routes>
          </UserProvider>
        </div>
      )}
    </div>
  );
}

export default App;

// Layout design for pages having sidebar and topbar
// eslint-disable-next-line react/prop-types
const Layout = ({ isLoggedIn, setIsLoggedIn }) => {
  return (
    <div
      className="w-screen h-screen"
      style={{ display: "flex", overflow: "hidden" }}
    >
      <SideBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
      <div
        className=""
        style={{ flex: "1 1 0", display: "flex", flexDirection: "column" }}
      >
        <TopBar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn} />
        <div className="" style={{ flex: "1 1 0", overflowY: "auto" }}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};
