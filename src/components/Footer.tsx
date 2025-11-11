
import { Database } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-white py-12 border-t border-slate-800">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Database className="w-8 h-8 text-blue-400" />
              <div className="text-2xl font-bold">
                Data<span className="text-blue-400">flexus</span>
              </div>
            </div>
            <p className="text-slate-400 leading-relaxed max-w-md">
              Flexible data solutions for digital marketing. We grow with our clients 
              in every data-related aspect, helping you uncover deeper insights and 
              build trust in automation.
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#products" className="hover:text-white transition-colors">Data Import</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Data Integration</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Visualization</a></li>
              <li><a href="#products" className="hover:text-white transition-colors">Special Projects</a></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-white mb-4">Company</h3>
            <ul className="space-y-2 text-slate-400">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><Link to="/privacy-policy" className="hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms-of-service" className="hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/data-deletion" className="hover:text-white transition-colors">Data Deletion</Link></li>
              <li><Link to="/cookie-policy" className="hover:text-white transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-800 mt-12 pt-8 text-center text-slate-400">
          <p>&copy; 2024 Dataflexus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
