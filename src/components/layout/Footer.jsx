import React from 'react';

const Footer = () => (
  <footer className="bg-[#0A0A0A] text-gray-300 py-12 border-t border-gray-800">
    <div className="max-w-6xl mx-auto px-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">

        {/* Contact Information */}
        <div className="space-y-6">
          <h3 className="text-lg font-bold text-white mb-6">Contact Information</h3>
          <div className="space-y-5">
            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-violet-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span className="text-xs text-gray-300 font-medium">General inquiries</span>
              </div>
              <a href="mailto:iedc.ahalia@ahalia.ac.in" className="text-sm hover:text-violet-300 transition-colors break-words">
                iedc.ahalia@ahalia.ac.in
              </a>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-violet-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
                <span className="text-xs text-gray-300 font-medium">Vishnu (Student Lead)</span>
              </div>
              <a href="mailto:vishnu_valiyaparambath@ahalia.ac.in" className="text-sm hover:text-violet-300 transition-colors break-words">
                vishnu_valiyaparambath@ahalia.ac.in
              </a>
            </div>

            <div className="flex flex-col items-center text-center space-y-2">
              <div className="flex items-center justify-center space-x-2">
                <svg className="w-5 h-5 text-violet-300 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <span className="text-xs text-gray-300 font-medium">Nodal Officer</span>
              </div>
              <a href="mailto:lakshmy.suresh@ahalia.ac.in" className="text-sm hover:text-violet-300 transition-colors break-words">
                lakshmy.suresh@ahalia.ac.in
              </a>
            </div>
          </div>
        </div>

        {/* Quick Links */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
          <div className="space-y-2 text-sm">
            <div><a href="#" className="hover:text-violet-300 transition-colors">About IEDC</a></div>
            <div><a href="#" className="hover:text-violet-300 transition-colors">Events</a></div>
            <div><a href="#" className="hover:text-violet-300 transition-colors">Team</a></div>
            <div><a href="#" className="hover:text-violet-300 transition-colors">Gallery</a></div>
          </div>
        </div>

        {/* Logo and Copyright */}
        <div className="space-y-4">
          <div className="flex justify-center space-x-4">
            <img src="/iedc_logo.jpg" alt="IEDC Logo" className="h-10" />
            <img src="/aset_logo.jpg" alt="ASET Logo" className="h-10" />
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-300">&copy; 2025 IEDC ASET - All Rights Reserved</p>
            <p className="text-xs mt-2 text-gray-500">Innovation and Entrepreneurship Development Cell</p>
          </div>
        </div>

      </div>
    </div>
  </footer>
);

export default Footer;
