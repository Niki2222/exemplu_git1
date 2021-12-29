import './App.css';
import Home from "./components/home";
import About from "./components/about";
import Contact from "./components/contact";
import Projects from "./components/projects";
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={Home} />
                <Route path={"/about"} element={About} />
                <Route path={"/contact"} element={Contact} />
                <Route path={"/projects"} element={Projects} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
