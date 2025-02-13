import React from "react";

function Footer() {
  return (
    <div>
      <footer id="footer" class="bg-neutral-900 text-white pt-20 pb-6">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        {/* <!-- School Info --> */}
        <div class="animate__animated animate__fadeIn">
          <h3 class="text-2xl font-bold mb-6">MAG School</h3>
          <p class="text-gray-400 mb-6">Nurturing minds, building futures, and creating leaders of tomorrow through excellence in education.</p>
          <div class="flex space-x-4">
            <a href="#" class="bg-neutral-800 p-2 rounded-full hover:bg-yellow-400 hover:text-neutral-900 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </a>
            <a href="#" class="bg-neutral-800 p-2 rounded-full hover:bg-yellow-400 hover:text-neutral-900 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </a>
            <a href="#" class="bg-neutral-800 p-2 rounded-full hover:bg-yellow-400 hover:text-neutral-900 transition-colors">
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
              </svg>
            </a>
          </div>
        </div>

        {/* <!-- Quick Links --> */}
        <div class="animate__animated animate__fadeIn" >
          <h4 class="text-lg font-semibold mb-6">Quick Links</h4>
          <ul class="space-y-4">
            <li><a href="#about" class="text-gray-400 hover:text-yellow-400 transition-colors">About Us</a></li>
            <li><a href="#academics" class="text-gray-400 hover:text-yellow-400 transition-colors">Academics</a></li>
            <li><a href="#admissions" class="text-gray-400 hover:text-yellow-400 transition-colors">Admissions</a></li>
            <li><a href="#facilities" class="text-gray-400 hover:text-yellow-400 transition-colors">Facilities</a></li>
            <li><a href="#contact" class="text-gray-400 hover:text-yellow-400 transition-colors">Contact</a></li>
          </ul>
        </div>

        {/* <!-- Useful Links --> */}
        <div class="animate__animated animate__fadeIn" >
          <h4 class="text-lg font-semibold mb-6">Useful Links</h4>
          <ul class="space-y-4">
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">Privacy Policy</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">Terms of Service</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">Student Portal</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">Parent Portal</a></li>
            <li><a href="#" class="text-gray-400 hover:text-yellow-400 transition-colors">Career</a></li>
          </ul>
        </div>

        {/* <!-- Newsletter --> */}
        <div class="animate__animated animate__fadeIn" >
          <h4 class="text-lg font-semibold mb-6">Newsletter</h4>
          <p class="text-gray-400 mb-4">Subscribe to our newsletter for updates</p>
          <form class="space-y-4">
            <input type="email" placeholder="Your email address" class="w-full px-4 py-2 bg-neutral-800 border border-neutral-700 rounded-lg focus:outline-none focus:border-yellow-400"/>
            <button type="submit" class="w-full bg-yellow-400 text-neutral-900 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Divider --> */}
      <div class="border-t border-neutral-800 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">© 2024 MAG School. All rights reserved.</p>
          <div class="flex space-x-6 mt-4 md:mt-0">
            <a href="#" class="text-gray-400 hover:text-yellow-400 text-sm">Privacy Policy</a>
            <a href="#" class="text-gray-400 hover:text-yellow-400 text-sm">Terms of Service</a>
            <a href="#" class="text-gray-400 hover:text-yellow-400 text-sm">Cookie Policy</a>
          </div>
        </div>
      </div>
    </div>
  </footer>
    </div>
  );
}

export default Footer;
