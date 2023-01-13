import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import LandingPage from "./screens/LandingPage/LandingPage";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginScreen from "./screens/LoginScreen/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen/RegisterScreen";
import CreateNote from "./screens/CreateNote/CreateNote";
import SingleNote from "./screens/SingleNote/SingleNote";
import { useState } from "react";
function App() {
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <>
      <Router>
        <Header setSearch={setSearch} />
        <main>
          <Routes>
            <Route path="/" element={<LandingPage />} exact />
            <Route path="/login" element={<LoginScreen />} exact />
            <Route path="/register" element={<RegisterScreen />} exact />
            <Route path="/createnote" element={<CreateNote />} />
            <Route path="/note/:id" element={<SingleNote />} />
            <Route path="/mynotes" element={<MyNotes search={search} />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </>
  );
}

export default App;
