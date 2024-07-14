import "./App.css";
import { Routes, Route } from "react-router-dom";
import Login from "./components/login/Login";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Signup from "./components/signup/Signup";
import PrivateRoute from "./components/PrivateRoute";
import Dashboard from "./components/dashboards/Dashboard";
import ParentDashboard from "./components/dashboards/ParentDashboard";
import StudentDashboard from "./components/dashboards/StudentDashboard";
import TeacherDashboard from "./components/dashboards/TeacherDashboard";
import Notfound from "./components/Notfound/Notfound";
import Preloader from "./components/preloader/preloader";
import { useState, useEffect } from "react";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the delay as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div>
      {loading ? (
        <Preloader />
      ) : (
        <div>
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
        <Route
          path="/dashboard"
          element={
            <PrivateRoute isLoggedIn={isLoggedIn}>
              <Dashboard />
            </PrivateRoute>
          }
        />
        <Route path="/parentDashboard" element={<ParentDashboard />} />
        <Route path="/studentDashboard" element={<StudentDashboard />} />
        <Route path="/teacherDashboard" element={<TeacherDashboard />} />

        <Route path="/*" element={<Notfound />} />
      </Routes>
      </div>
      )}
    </div>
  );
}

export default App;
