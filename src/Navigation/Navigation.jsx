import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx"; 
import ContactMe from "../Pages/ContactMe.jsx";
import Projects from "../Pages/Projects.jsx";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-me" element={<ContactMe />} />
                <Route path="/projects" element={<Projects />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;