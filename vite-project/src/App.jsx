import "./App.css";
import About from "./Components/FunctionComponents/About";
import Contact from "./Components/FunctionComponents/Contact";
import Gallery from "./Components/FunctionComponents/Gallery";
import Home from "./Components/FunctionComponents/Home";
import NavBar from "./Components/FunctionComponents/NavBar";
import UseEffect from "./Components/FunctionComponents/UseEffect";
import UseRef from "./Components/FunctionComponents/UseRef";
import ExamResults from "./Components/FunctionComponents/UseContext";
import UseMemo from "./Components/FunctionComponents/UseMemo";
import SignupForm from "./Components/FunctionComponents/Signup";
import LoginForm from "./Components/FunctionComponents/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() 
{
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/about"
            element={
              <About
                college="Kongu Engineering"
                clg1="Kongu Arts"
                clg2="Naturopathy"
              />
            }
          />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/use-effect" element={<UseEffect />}/>
          <Route path="/use-ref" element = {<UseRef />}/>
          <Route path="/use-context" element = {<ExamResults />} />
          <Route path="/use-memo" element = {<UseMemo />}/>
          <Route path="/signup" element = {<SignupForm />}/>
          <Route path="/login" element = {<LoginForm />}/>
        </Routes>
      </BrowserRouter>
    </div>
         );
}

export default App;