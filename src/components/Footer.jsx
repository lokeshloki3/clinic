import { Link } from 'react-router-dom';  // Import Link from react-router-dom
import { FaInstagram, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="border-t-2 border-gray-300">
      <div className="md:mx-10">
        <div className="flex flex-col sm:grid grid-flow-col gap-14 my-10 mt-10 text-sm md:text-base">
          {/* Contact Section */}
          <div>
            <p className="text-xl md:text-2xl font-medium mb-5">
              Feel free to contact
            </p>
            <div className="flex space-x-4 mt-3">
              <a href="https://www.instagram.com/cortihear/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-gray-600 hover:text-gray-800 text-2xl md:text-3xl" />
              </a>
              <FaTwitter className="text-gray-600 hover:text-gray-800 text-2xl md:text-3xl" />
              <FaLinkedin className="text-gray-600 hover:text-gray-800 text-2xl md:text-3xl" />
            </div>
          </div>

          {/* Company Section */}
          <div className="mr-20">
            <p className="text-xl md:text-2xl font-medium mb-5">COMPANY</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <Link to="/" className="hover:text-gray-800 text-base md:text-lg">Home</Link>
              </li>
              <li>
                <Link to="/about-us" className="hover:text-gray-800 text-base md:text-lg">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-800 text-base md:text-lg">Contact</Link>
              </li>
              <li>
                <Link to="/privacy-policy" className="hover:text-gray-800 text-base md:text-lg">Privacy Policy</Link>
              </li>
            </ul>
          </div>

          {/* Get in Touch Section */}
          <div>
            <p className="text-xl md:text-2xl font-medium mb-5">GET IN TOUCH</p>
            <ul className="flex flex-col gap-2 text-gray-600">
              <li>
                <a href="tel:+918103712273" className="hover:text-gray-800 text-base md:text-lg">+91 81037 12273</a>
              </li>
              <li>
                <a href="mailto:cortihear@gmail.com" className="hover:text-gray-800 text-base md:text-lg">cortihear@gmail.com</a>
              </li>
              <li className="text-base md:text-lg">GM-13, D.D. Nagar, Kushwah Market, Gwalior - 474020</li>
              <li className="text-gray-500 text-base md:text-lg">
                <strong>Working Hours:</strong><br />
                Monday to Saturday: 10 AM - 6 PM<br />
                Sunday: Closed
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
