import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Posts from "./pages/Posts";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import { AuthProvider, useAuth } from "./components/Auth";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import RequireAuth from "./components/RequireAuth";
import Add from './components/Add';
import Edit from "./components/Edit";
import Dashboard from './components/Dashboard/Dashboard';
import Deposits from './components/Dashboard/Deposits';
import Orders from './components/Dashboard/Order';
import Title from './components/Dashboard/Title';

const App = () => {
  return (
    <Router>
      <div>
        <AuthProvider>
          <Header />
          <Routes>
            <Route
              path="/"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />
            <Route
              path="/posts"
              element={
                <RequireAuth>
                  <Posts />
                </RequireAuth>
              }
            />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route
              path="/profile"
              element={
                <RequireAuth>
                  <Profile />
                </RequireAuth>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/add" element={<Add />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/deposits" element={<Deposits />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/title" element={<Title />} />
          </Routes>
        </AuthProvider>
      </div>
    </Router>
  );
};

export default App;
