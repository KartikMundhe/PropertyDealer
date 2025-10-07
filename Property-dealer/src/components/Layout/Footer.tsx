import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-100 font-[Poppins] border-t border-gray-300">
      {/* Main Footer Section */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* Company Info */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">PropertyDealer</h2>
          <p className="text-gray-600 text-sm leading-relaxed">
            Your trusted partner in buying, selling, and renting properties. 
            We make real estate transactions smooth and transparent with expert guidance.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li><a href="/" className="hover:text-blue-600 transition">Home</a></li>
            <li><a href="/services" className="hover:text-blue-600 transition">Services</a></li>
            <li><a href="/properties" className="hover:text-blue-600 transition">Properties</a></li>
            
            <li><a href="/about" className="hover:text-blue-600 transition">About Us</a></li>
            <li><a href="/contact" className="hover:text-blue-600 transition">Contact</a></li>
          </ul>
        </div>

        {/* Social Media */}
        <div>
          <h2 className="text-lg font-semibold text-gray-800 mb-4">Follow Us</h2>
          <div className="flex space-x-5 text-gray-600">
            <a href="#" className="hover:text-blue-600 transition"><Facebook size={22} /></a>
            <a href="#" className="hover:text-blue-600 transition"><Twitter size={22} /></a>
            <a href="#" className="hover:text-blue-600 transition"><Instagram size={22} /></a>
            <a href="#" className="hover:text-blue-600 transition"><Linkedin size={22} /></a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-200 py-4 text-center text-gray-600 text-sm border-t border-gray-300">
        © {new Date().getFullYear()} PropertyDealer. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

