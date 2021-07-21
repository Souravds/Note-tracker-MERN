import "./App.css";
import Header from "./components/Header/Header";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import createNotePage from "./screens/CreateNote/createNotePage";
import SingleNote from "./screens/SingleNote";
import { useState } from "react";
import ProfilePage from "./screens/Profile/ProfilePage";

function App() {
  const [search, setsearch] = useState("");

  return (
    <BrowserRouter>
      <Header setsearch={setsearch} />
      <main style={{ height: "93vh" }}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/login" component={LoginPage} />
        <Route path="/register" component={RegisterPage} />
        <Route path="/profile" component={ProfilePage} />
        <Route path="/createNote" component={createNotePage} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/notes" component={() => <MyNotes search={search} />} />
      </main>
    </BrowserRouter>
  );
}

export default App;
