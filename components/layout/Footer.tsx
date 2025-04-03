import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 py-10 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="font-bold text-lg mb-4">Our Community</h3>
            <p className="text-gray-600 mb-4">
              Work for yourself, not by yourself. Join our supportive community of independent professionals.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#why-join" className="text-gray-600 hover:text-green-500 transition-colors">
                  Why Join?
                </Link>
              </li>
              <li>
                <Link href="#who-we-are" className="text-gray-600 hover:text-green-500 transition-colors">
                  Who We Are
                </Link>
              </li>
              <li>
                <Link href="#process" className="text-gray-600 hover:text-green-500 transition-colors">
                  Process
                </Link>
              </li>
              <li>
                <Link href="#organizers" className="text-gray-600 hover:text-green-500 transition-colors">
                  Organizers
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            <div className="space-y-4">
              <Link 
                href="#slack" 
                className="inline-block bg-green-500 text-white px-4 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Join Our Slack
              </Link>
              
              <div className="flex space-x-4">
                {/* Social media icons would go here */}
                <span className="w-8 h-8 bg-gray-400 rounded-full"></span>
                <span className="w-8 h-8 bg-gray-400 rounded-full"></span>
                <span className="w-8 h-8 bg-gray-400 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-300 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} Our Community. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
