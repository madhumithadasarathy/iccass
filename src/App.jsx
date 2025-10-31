import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/Header/Header.jsx";
import Footer from "./Components/Footer/Footer.jsx";

// Pages
import Home from "./Components/Home/Home.jsx";
import About from "./Components/About/About.jsx";
import AuthorInfo from "./Components/AuthorInfo/AuthorInfo.jsx";
import Committee from "./Components/Committee/Committee.jsx";
import ImportantDates from "./Components/ImportantDates/ImportantDates.jsx";
import CallForPapers from "./Components/CallForPapers/CallForPapers.jsx";
import Venue from "./Components/Venue/Venue.jsx";
import ContactUs from "./Components/ContactUs/ContactUs.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-dvh bg-gray-100 flex flex-col">
        {/* Header */}
        <div className="container mx-auto px-4 py-4">
          <Header />
        </div>

        {/* Main content */}
        <div className="flex-grow">
          <div className="container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/author-info" element={<AuthorInfo />} />
              <Route path="/committee" element={<Committee />} />
              <Route path="/important-dates" element={<ImportantDates />} />
              <Route path="/call-for-papers" element={<CallForPapers />} />
              <Route path="/venue" element={<Venue />} />
              <Route path="/contact-us" element={<ContactUs />} />
              {/* Optional: 404 */}
              <Route path="*" element={<div>Page not found</div>} />
            </Routes>
          </div>
        </div>

        {/* Full-width footer */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
