import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home.jsx"; 
import ContactMe from "../Pages/ContactMe.jsx";

const Navigation = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/contact-me" element={<ContactMe />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Navigation;