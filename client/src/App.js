import "./App.css";
import Header from "./components/Header/Header";
import { LandingPage } from "./screens/LandingPage";
import { BrowserRouter, Route } from "react-router-dom";
import MyNotes from "./screens/MyNotes/MyNotes";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main style={{ height: "93vh" }}>
        <Route exact path="/" component={LandingPage} />
        <Route path="/notes" component={MyNotes} />
      </main>
    </BrowserRouter>
  );
}

export default App;
