import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./components/Login";
import Register from "./components/Register";
import PostList from "./components/PostList";
import CreatePost from "./components/CreatePost";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<PostList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create" element={<CreatePost />} />
      </Routes>
    </Router>
  );
}

export default App;
