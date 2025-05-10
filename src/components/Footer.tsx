
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-deepblue text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center gap-2">
              <div className="bg-gradient-to-r from-teal to-teal-300 rounded-lg w-8 h-8 flex items-center justify-center">
                <span className="text-deepblue font-bold">AI</span>
              </div>
              <span className="font-bold text-lg text-white">DeepFake Detector</span>
            </Link>
            <p className="mt-4 text-sm text-gray-300">
              Advanced AI technology to detect deepfakes and AI-generated media with high accuracy.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/careers" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Careers
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/blog" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/documentation" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  Documentation
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-300 hover:text-teal-400 transition-colors text-sm">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 text-sm">support@deepfakedetector.com</li>
              <li className="text-gray-300 text-sm">+1 (555) 123-4567</li>
              <li className="text-gray-300 text-sm">123 AI Street, Tech City</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              &copy; {new Date().getFullYear()} DeepFake Detector. All rights reserved.
            </p>
            <div className="flex gap-4 mt-4 md:mt-0">
              <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Terms of Service
              </Link>
              <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors text-sm">
                Privacy Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
