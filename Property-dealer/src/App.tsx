import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import PropertyPage from "./Pages/Propertypage";
import BookProperty from "./Pages/BookProperty";
import Upcoming from "./Pages/Upcoming";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        <Navbar />

        {/* Routes */}
        <div className="flex-grow mt-16"> {/* mt-16 ensures content not hidden behind navbar */}
          <Routes>
            <Route path="/" element={<h1 className="p-6">Home Page</h1>} />
            <Route path="/services" element={<h1 className="p-6">Services</h1>} />
            <Route path="/properties" element={<PropertyPage />} />
            
            <Route path="/book-property/:id" element={<BookProperty />} />
             <Route path="/upcoming" element={<Upcoming />} />
           
           
      
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

export default App;

