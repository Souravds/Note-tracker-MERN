import "./App.css";
import Header from "./components/Header/Header";
import { LandingPage } from "./screens/LandingPage/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";
import LoginPage from "./screens/LoginPage/LoginPage";
import RegisterPage from "./screens/RegisterPage/RegisterPage";
import createNotePage from "./screens/CreateNote/createNotePage";
import SingleNote from "./screens/SingleNote";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ height: "93vh" }}>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/login" component={LoginPage} />
        <Route exact path="/register" component={RegisterPage} />
        <Route exact path="/createNote" component={createNotePage} />
        <Route path="/note/:id" component={SingleNote} />
        <Route path="/notes" component={MyNotes} />
      </main>
    </BrowserRouter>
  );
}

export default App;
