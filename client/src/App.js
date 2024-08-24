import { useContext } from 'react';
import './App.css';
import Leftbar from './components/leftbar/leftbar';
import Navbar from './components/navbar/navbar';
import Rightbar from './components/rightbar/rightbar';
import { DarkModeContext } from './context/darkModeContext';
import Home from './pages/home/home';
import Login from './pages/login/login';
import Profile from './pages/profile/profile';
import Register from './pages/register/register';
import { BrowserRouter as Router, Routes, Route, Outlet, Navigate } from 'react-router-dom';
import { AuthContext } from './context/authContext';


function App() {
  
  const {currentUser} = useContext(AuthContext);
  const { darkMode } = useContext(DarkModeContext);
  
  const Layout = () => {
    return(
      <div className={`theme-${darkMode ? "dark" : "light"}`}>
        <Navbar />
        <div style={{ display: 'flex' }}>
          <Leftbar />
          <div style={{ flex: 6 }}>
            <Outlet />
          </div>
          <Rightbar />
        </div>
      </div>
    )
  }
  
  const ProtectedRoute = ({children}) => {
    if(!currentUser) return <Navigate to="/login"/>
    return children;  
  }

  return (
    <div>
      <Router>
          <Routes>
            <Route path="/" element={
              <ProtectedRoute>
                <Layout />
              </ProtectedRoute>
            }>
              <Route index element={<Home />}/>
              <Route path="profile/:id" element={<Profile />}/>
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
      </Router>
    </div>
  );
}

export default App;
