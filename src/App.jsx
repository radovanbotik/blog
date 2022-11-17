import "./App.css";
import { Routes, Route } from "react-router-dom";
import SharedLayout from "./pages/SharedLayout";
import Error from "./pages/Error";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";

function App() {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/newpost" element={<CreatePost />} />
        <Route path="/login" element={<Login />} />
      </Route>
      <Route path="*" element={<Error />} />
    </Routes>
  );
}

export default App;
