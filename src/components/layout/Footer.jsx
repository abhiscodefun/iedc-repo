import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <div className="space-y-3">
              <div>
                <p className="font-semibold">IEDC SNGCE</p>
                <a href="mailto:iedc@sngce.ac.in" className="text-gray-300 hover:text-white transition-colors">
                  iedc@sngce.ac.in
                </a>
              </div>
              <div>
                <p className="font-semibold">Student Lead</p>
                <a href="mailto:studentlead@sngce.ac.in" className="text-gray-300 hover:text-white transition-colors">
                  studentlead@sngce.ac.in
                </a>
              </div>
              <div>
                <p className="font-semibold">Nodal Officer</p>
                <a href="mailto:nodalofficer@sngce.ac.in" className="text-gray-300 hover:text-white transition-colors">
                  nodalofficer@sngce.ac.in
                </a>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Location</h3>
            <p className="text-gray-300">
              SNGCE, Kadayiruppu<br />
              North Paravur<br />
              Ernakulam, Kerala
            </p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              {/* Add your social media links here */}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} IEDC SNGCE. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
