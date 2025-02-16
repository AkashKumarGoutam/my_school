import React from "react";

function Home() {
  return (
    // <div className="bg-gray-900 text-white ">
    //   <div className="flex justify-between p-36">
    //     <div>
    //       <div className="w-1/2">
    //         <h1 className="text-4xl py-6">Welcome to School</h1>
    //         <h1>
    //           Welcome to Get In Touch, a revolutionary E-learning platform
    //           designed to bring quality education to your fingertips. Whether
    //           you are a student, professional, or lifelong learner, our platform
    //           offers a wide range of courses tailored to meet your educational
    //           need
    //         </h1>
    //       </div>
    //       <div className="py-8 ">
    //         <Link to="/dashboard" className="bg-blue-800 py-2 px-6 rounded-xl">
    //           Get Start
    //         </Link>
    //       </div>
    //     </div>
    //     <div>
    //       <img
    //         src="https://png.pngtree.com/thumb_back/fh260/background/20190223/ourmid/pngtree-school-season-teaching-building-background-material-buildingteachers-daycampusbuildingclassroomopening-season-image_66055.jpg"
    //         className="rounded-xl"
    //         alt="img"
    //       />
    //     </div>
    //   </div>
    // </div>




<>
<section id="hero" class="bg-neutral-900 text-white min-h-screen pt-16">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 py-16">
        <div class="flex flex-col justify-center animate__animated animate__fadeInLeft">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            Welcome to <span class="text-yellow-400">MAG School</span>
          </h1>
          <p class="text-lg md:text-xl mb-8 text-gray-300">
            Nurturing minds, building futures, and creating leaders of tomorrow through excellence in education.
          </p>
          <div class="flex flex-wrap gap-4">
            <a href="#admissions" class="bg-yellow-400 text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors animate__animated animate__pulse animate__infinite">
              Apply Now
            </a>
            <a href="#about" class="border-2 border-yellow-400 text-yellow-400 px-8 py-3 rounded-full font-semibold hover:bg-yellow-400 hover:text-neutral-900 transition-colors">
              Learn More
            </a>
          </div>
        </div>
        
        <div class="flex items-center justify-center animate__animated animate__fadeInRight">
          <div class="bg-neutral-800 p-6 rounded-lg shadow-2xl">
            <div class="grid grid-cols-2 gap-4">
              <div class="bg-neutral-700 p-4 rounded-lg text-center">
                <h3 class="text-3xl font-bold text-yellow-400">500+</h3>
                <p class="text-sm mt-2">Students</p>
              </div>
              <div class="bg-neutral-700 p-4 rounded-lg text-center">
                <h3 class="text-3xl font-bold text-yellow-400">50+</h3>
                <p class="text-sm mt-2">Teachers</p>
              </div>
              <div class="bg-neutral-700 p-4 rounded-lg text-center">
                <h3 class="text-3xl font-bold text-yellow-400">95%</h3>
                <p class="text-sm mt-2">Success Rate</p>
              </div>
              <div class="bg-neutral-700 p-4 rounded-lg text-center">
                <h3 class="text-3xl font-bold text-yellow-400">25+</h3>
                <p class="text-sm mt-2">Years Experience</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div class="absolute bottom-0 left-0 w-full overflow-hidden">
      <svg class="relative block w-full h-16" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="fill-neutral-100"></path>
      </svg>
    </div>
  </section>




  {/* about */}
  <section id="about" class="bg-neutral-100 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold text-neutral-900 mb-4">About MAG School</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div class="space-y-6 animate__animated animate__fadeInLeft">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Our Vision</h3>
            <p class="text-neutral-700">To be a leading educational institution that nurtures innovative thinkers and future leaders through comprehensive education and character development.</p>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Our Mission</h3>
            <p class="text-neutral-700">To provide excellent education through modern teaching methodologies, fostering creativity, critical thinking, and moral values in our students.</p>
          </div>
        </div>

        <div class="space-y-6 animate__animated animate__fadeInRight">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Key Features</h3>
            <ul class="space-y-3 text-neutral-700">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Modern Infrastructure &amp; Digital Classrooms
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Experienced Faculty Members
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Comprehensive Management System
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Interactive Learning Environment
              </li>
            </ul>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Administration</h3>
            <p class="text-neutral-700 mb-4">Led by experienced administrators and educators who are committed to maintaining high academic standards and fostering a positive learning environment.</p>
            <a href="#contact" class="inline-flex items-center text-yellow-600 hover:text-yellow-700">
              Meet Our Team
              <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* academic */}
  <section id="academics" class="bg-neutral-900 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold mb-4">Academic Programs</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Primary Section --> */}
        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp">
          <div class="text-yellow-400 mb-4">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Primary Section</h3>
          <ul class="space-y-3 text-gray-300">
            <li>Grades 1-9</li>
            <li>Foundation Learning</li>
            <li>Activity Based Learning</li>
            <li>Personal Development</li>
          </ul>
          {/* <button class="mt-6 bg-yellow-400 text-neutral-900 px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">View Schedule</button> */}
        </div>

        {/* <!-- Middle Section --> */}
        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp" >
          <div class="text-yellow-400 mb-4">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Secondary Section</h3>
          <ul class="space-y-3 text-gray-300">
            <li>Grades 9-12</li>
            <li>Advanced Concepts</li>
            <li>Project Based Learning</li>
            <li>Skill Development</li>
          </ul>
          {/* <button class="mt-6 bg-yellow-400 text-neutral-900 px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">View Schedule</button> */}
        </div>

        {/* <!-- Secondary Section --> */}
        <div class="bg-neutral-800 rounded-xl p-6 hover:transform hover:scale-105 transition-transform duration-300 animate__animated animate__fadeInUp" >
          <div class="text-yellow-400 mb-4">
            <svg class="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
            </svg>
          </div>
          <h3 class="text-2xl font-semibold mb-4">Higher Courses Section</h3>
          <ul class="space-y-3 text-gray-300">
            <li>Graduation & Master</li>
            <li>Specialized Streams</li>
            <li>Career Guidance</li>
            <li>Good Placement</li>
          </ul>
          {/* <button class="mt-6 bg-yellow-400 text-neutral-900 px-6 py-2 rounded-full hover:bg-yellow-500 transition-colors">View Schedule</button> */}
        </div>
      </div>

      {/* <!-- Time Table Preview --> */}
      {/* <div class="mt-16 bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInUp">
        <h3 class="text-2xl font-semibold mb-6">Current Time Table</h3>
        <div class="overflow-x-auto">
          <table class="w-full text-left">
            <thead class="bg-neutral-700">
              <tr>
                <th class="p-4">Time</th>
                <th class="p-4">Monday</th>
                <th class="p-4">Tuesday</th>
                <th class="p-4">Wednesday</th>
                <th class="p-4">Thursday</th>
                <th class="p-4">Friday</th>
              </tr>
            </thead>
            <tbody class="text-gray-300">
              <tr class="border-b border-neutral-700">
                <td class="p-4">8:00 - 9:00</td>
                <td class="p-4">Mathematics</td>
                <td class="p-4">Science</td>
                <td class="p-4">English</td>
                <td class="p-4">History</td>
                <td class="p-4">Geography</td>
              </tr>
              <tr class="border-b border-neutral-700">
                <td class="p-4">9:00 - 10:00</td>
                <td class="p-4">Science</td>
                <td class="p-4">English</td>
                <td class="p-4">Mathematics</td>
                <td class="p-4">Geography</td>
                <td class="p-4">History</td>
              </tr>
              <tr>
                <td class="p-4">10:00 - 11:00</td>
                <td class="p-4">English</td>
                <td class="p-4">Mathematics</td>
                <td class="p-4">Science</td>
                <td class="p-4">Computer</td>
                <td class="p-4">Physical Ed</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div> */}
    </div>
  </section>

  {/* admission */}
  <section id="admissions" class="bg-neutral-100 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold text-neutral-900 mb-4">Admissions</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* <!-- Admission Information --> */}
        <div class="space-y-8 animate__animated animate__fadeInLeft">
          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Admission Process</h3>
            <ol class="space-y-4 text-neutral-700">
              <li class="flex items-center">
                <span class="bg-yellow-400 text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">1</span>
                <span>Fill out the online application form</span>
              </li>
              <li class="flex items-center">
                <span class="bg-yellow-400 text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">2</span>
                <span>Submit required documents</span>
              </li>
              <li class="flex items-center">
                <span class="bg-yellow-400 text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">3</span>
                <span>Entrance assessment test</span>
              </li>
              <li class="flex items-center">
                <span class="bg-yellow-400 text-neutral-900 rounded-full w-8 h-8 flex items-center justify-center mr-4 font-bold">4</span>
                <span>Personal interview</span>
              </li>
            </ol>
          </div>

          <div class="bg-white p-6 rounded-lg shadow-lg">
            <h3 class="text-2xl font-semibold text-neutral-900 mb-4">Required Documents</h3>
            <ul class="space-y-3 text-neutral-700">
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Birth Certificate
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Previous School Records
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Medical Records
              </li>
              <li class="flex items-center">
                <svg class="w-5 h-5 text-yellow-400 mr-3" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"></path>
                </svg>
                Passport Size Photos
              </li>
            </ul>
          </div>
        </div>

        {/* <!-- Admission Form --> */}
        <div class="bg-white p-8 rounded-lg shadow-lg animate__animated animate__fadeInRight">
          <h3 class="text-2xl font-semibold text-neutral-900 mb-6">Admission Inquiry Form</h3>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Student's Name</label>
                <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" required=""/>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Grade Applying For</label>
                <select class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" required="">
                  <option>Select Grade</option>
                  <option>Grade 1</option>
                  <option>Grade 2</option>
                  <option>Grade 3</option>
                  <option>Grade 4</option>
                  <option>Grade 5</option>
                </select>
              </div>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Parent's Name</label>
                <input type="text" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" required=""/>
              </div>
              <div>
                <label class="block text-sm font-medium text-neutral-700 mb-2">Contact Number</label>
                <input type="tel" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" required=""/>
              </div>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">Email Address</label>
              <input type="email" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" required=""/>
            </div>

            <div>
              <label class="block text-sm font-medium text-neutral-700 mb-2">Message</label>
              <textarea rows="4" class="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-yellow-400 focus:border-yellow-400" required=""></textarea>
            </div>

            <button type="submit" class="w-full bg-yellow-400 text-neutral-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Submit Application
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>


  {/* our faculty */}
  <section id="faculty" class="bg-neutral-900 text-white py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold mb-4">Our Faculty</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      {/* <!-- Leadership Team --> */}
      <div class="mb-16">
        <h3 class="text-2xl font-semibold mb-8 text-center">Leadership Team</h3>
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* <!-- Principal --> */}
          <div class="bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp">
            <div class="w-24 h-24 mx-auto mb-4 bg-neutral-700 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">Dr. Akash Kumar Goutam</h4>
            <p class="text-yellow-400 mb-4">Principal</p>
            <p class="text-gray-400 text-sm mb-4">Ph.D. in Education Management</p>
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-gray-400 hover:text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* <!-- Vice Principal --> */}
          <div class="bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp" >
            <div class="w-24 h-24 mx-auto mb-4 bg-neutral-700 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">Dr. Mansi Gautam</h4>
            <p class="text-yellow-400 mb-4">Vice Principal</p>
            <p class="text-gray-400 text-sm mb-4">M.Ed. in Educational Leadership</p>
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-gray-400 hover:text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
            </div>
          </div>

          {/* <!-- Head of Academics --> */}
          <div class="bg-neutral-800 rounded-xl p-6 text-center animate__animated animate__fadeInUp" >
            <div class="w-24 h-24 mx-auto mb-4 bg-neutral-700 rounded-full flex items-center justify-center">
              <svg class="w-12 h-12 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
              </svg>
            </div>
            <h4 class="text-xl font-semibold mb-2">Prof. Manvendra Pratap Singh</h4>
            <p class="text-yellow-400 mb-4">Head of Academics</p>
            <p class="text-gray-400 text-sm mb-4">Ph.D. in Curriculum Development</p>
            <div class="flex justify-center space-x-4">
              <a href="#" class="text-gray-400 hover:text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"></path></svg>
              </a>
              <a href="#" class="text-gray-400 hover:text-yellow-400">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- Department Stats --> */}
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8 mb-16">
        <div class="bg-neutral-800 p-6 rounded-xl text-center animate__animated animate__fadeIn">
          <h4 class="text-3xl font-bold text-yellow-400">25+</h4>
          <p class="text-gray-400">English Faculty</p>
        </div>
        <div class="bg-neutral-800 p-6 rounded-xl text-center animate__animated animate__fadeIn">
          <h4 class="text-3xl font-bold text-yellow-400">20+</h4>
          <p class="text-gray-400">Science Faculty</p>
        </div>
        <div class="bg-neutral-800 p-6 rounded-xl text-center animate__animated animate__fadeIn">
          <h4 class="text-3xl font-bold text-yellow-400">15+</h4>
          <p class="text-gray-400">Mathematics Faculty</p>
        </div>
        <div class="bg-neutral-800 p-6 rounded-xl text-center animate__animated animate__fadeIn">
          <h4 class="text-3xl font-bold text-yellow-400">30+</h4>
          <p class="text-gray-400">Support Staff</p>
        </div>
      </div>

      {/* <!-- Join Us Banner --> */}
      <div class="bg-neutral-800 rounded-xl p-8 text-center animate__animated animate__fadeIn">
        <h3 class="text-2xl font-semibold mb-4">Join Our Teaching Staff</h3>
        <p class="text-gray-400 mb-6">We're always looking for passionate educators to join our team</p>
        <a href="#contact" class="inline-block bg-yellow-400 text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors">
          Apply Now
        </a>
      </div>
    </div>
  </section>

  {/* our facilities */}
  <section id="facilities" class="bg-neutral-100 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold text-neutral-900 mb-4">Our Facilities</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Smart Classrooms --> */}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
          <div class="bg-neutral-900 p-6 flex items-center justify-center h-48">
            <svg class="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Smart Classrooms</h3>
            <p class="text-neutral-600">Interactive digital boards, projectors, and modern learning tools in every classroom.</p>
          </div>
        </div>

        {/* <!-- Library --> */}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp" >
          <div class="bg-neutral-900 p-6 flex items-center justify-center h-48">
            <svg class="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Modern Library</h3>
            <p class="text-neutral-600">Extensive collection of books, digital resources, and quiet study areas.</p>
          </div>
        </div>

        {/* <!-- Science Labs --> */}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp" >
          <div class="bg-neutral-900 p-6 flex items-center justify-center h-48">
            <svg class="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Science Labs</h3>
            <p class="text-neutral-600">Well-equipped laboratories for Physics, Chemistry, and Biology experiments.</p>
          </div>
        </div>

        {/* <!-- Computer Lab --> */}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp">
          <div class="bg-neutral-900 p-6 flex items-center justify-center h-48">
            <svg class="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Computer Lab</h3>
            <p class="text-neutral-600">State-of-the-art computers with high-speed internet and latest software.</p>
          </div>
        </div>

        {/* <!-- Sports Facilities --> */}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp" >
          <div class="bg-neutral-900 p-6 flex items-center justify-center h-48">
            <svg class="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Sports Complex</h3>
            <p class="text-neutral-600">Indoor and outdoor sports facilities including basketball court and playing field.</p>
          </div>
        </div>

        {/* <!-- Cafeteria --> */}
        <div class="bg-white rounded-xl shadow-lg overflow-hidden animate__animated animate__fadeInUp" >
          <div class="bg-neutral-900 p-6 flex items-center justify-center h-48">
            <svg class="w-24 h-24 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          </div>
          <div class="p-6">
            <h3 class="text-xl font-semibold mb-2">Modern Cafeteria</h3>
            <p class="text-neutral-600">Spacious dining area serving nutritious meals in hygienic conditions.</p>
          </div>
        </div>
      </div>

      {/* <!-- Additional Amenities --> */}
      <div class="mt-16 bg-white rounded-xl shadow-lg p-8 animate__animated animate__fadeIn">
        <h3 class="text-2xl font-semibold mb-6 text-center">Additional Amenities</h3>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6">
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p class="text-neutral-600">CCTV Security</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
              </svg>
            </div>
            <p class="text-neutral-600">Power Backup</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path>
              </svg>
            </div>
            <p class="text-neutral-600">Medical Room</p>
          </div>
          <div class="text-center">
            <div class="w-16 h-16 bg-yellow-400 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg class="w-8 h-8 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
            </div>
            <p class="text-neutral-600">Transport Facility</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  {/* school news */}
  <section id="news" class="bg-neutral-900 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold text-white mb-4">School News &amp; Updates</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* <!-- Latest News --> */}
        <div class="col-span-1 md:col-span-2 space-y-8">
          <div class="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInLeft">
            <span class="text-yellow-400 text-sm">Latest Update</span>
            <h3 class="text-xl font-semibold text-white mt-2 mb-4">Annual Day Celebrations 2024</h3>
            <p class="text-gray-300 mb-4">Join us for our grand Annual Day celebrations featuring cultural performances, awards ceremony, and student exhibitions.</p>
            <div class="flex justify-between items-center">
              <span class="text-gray-400 text-sm">March 15, 2024</span>
              <button class="text-yellow-400 hover:text-yellow-500 flex items-center">
                Read More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>

          <div class="bg-neutral-800 rounded-xl p-6 hover:shadow-lg transition-shadow animate__animated animate__fadeInLeft">
            <span class="text-yellow-400 text-sm">Academic Achievement</span>
            <h3 class="text-xl font-semibold text-white mt-2 mb-4">100% Results in Board Exams</h3>
            <p class="text-gray-300 mb-4">Our students have achieved outstanding results in the recent board examinations with multiple distinctions.</p>
            <div class="flex justify-between items-center">
              <span class="text-gray-400 text-sm">March 10, 2024</span>
              <button class="text-yellow-400 hover:text-yellow-500 flex items-center">
                Read More
                <svg class="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* <!-- Upcoming Events --> */}
        <div class="bg-neutral-800 rounded-xl p-6 animate__animated animate__fadeInRight">
          <h3 class="text-xl font-semibold text-white mb-6">Upcoming Events</h3>
          
          <div class="space-y-6">
            <div class="flex items-start space-x-4">
              <div class="bg-yellow-400 text-neutral-900 rounded-lg p-3 text-center min-w-[60px]">
                <span class="text-sm font-bold">MAR</span>
                <div class="text-2xl font-bold">20</div>
              </div>
              <div>
                <h4 class="text-white font-semibold">Parent-Teacher Meeting</h4>
                <p class="text-gray-400 text-sm">9:00 AM - 2:00 PM</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-yellow-400 text-neutral-900 rounded-lg p-3 text-center min-w-[60px]">
                <span class="text-sm font-bold">APR</span>
                <div class="text-2xl font-bold">05</div>
              </div>
              <div>
                <h4 class="text-white font-semibold">Science Exhibition</h4>
                <p class="text-gray-400 text-sm">10:00 AM - 4:00 PM</p>
              </div>
            </div>

            <div class="flex items-start space-x-4">
              <div class="bg-yellow-400 text-neutral-900 rounded-lg p-3 text-center min-w-[60px]">
                <span class="text-sm font-bold">APR</span>
                <div class="text-2xl font-bold">15</div>
              </div>
              <div>
                <h4 class="text-white font-semibold">Sports Day</h4>
                <p class="text-gray-400 text-sm">8:00 AM - 3:00 PM</p>
              </div>
            </div>
          </div>

          <button class="w-full mt-8 bg-yellow-400 text-neutral-900 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
            View All Events
          </button>
        </div>
      </div>

      {/* <!-- Newsletter Subscription --> */}
      <div class="mt-16 bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeIn">
        <div class="text-center">
          <h3 class="text-2xl font-semibold text-white mb-4">Subscribe to Our Newsletter</h3>
          <p class="text-gray-400 mb-6">Stay updated with the latest news and events from MAG School</p>
          <form class="max-w-md mx-auto flex gap-4">
            <input type="email" placeholder="Enter your email" class="flex-1 px-4 py-2 rounded-lg bg-neutral-700 text-white border border-neutral-600 focus:outline-none focus:border-yellow-400"/>
            <button type="submit" class="bg-yellow-400 text-neutral-900 px-6 py-2 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Subscribe
            </button>
          </form>
        </div>
      </div>
    </div>
  </section>

  {/* gallary */}
  <section id="gallery" class="bg-neutral-100 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold text-neutral-900 mb-4">School Gallery</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      {/* <!-- Gallery Filter --> */}
      <div class="flex flex-wrap justify-center gap-4 mb-12 animate__animated animate__fadeIn">
        <button class="px-6 py-2 rounded-full bg-yellow-400 text-neutral-900 font-semibold" onclick="filterGallery('all')">All</button>
        <button class="px-6 py-2 rounded-full bg-neutral-200 hover:bg-yellow-400 text-neutral-700 hover:text-neutral-900 font-semibold transition-colors" onclick="filterGallery('events')">Events</button>
        <button class="px-6 py-2 rounded-full bg-neutral-200 hover:bg-yellow-400 text-neutral-700 hover:text-neutral-900 font-semibold transition-colors" onclick="filterGallery('campus')">Campus</button>
        <button class="px-6 py-2 rounded-full bg-neutral-200 hover:bg-yellow-400 text-neutral-700 hover:text-neutral-900 font-semibold transition-colors" onclick="filterGallery('sports')">Sports</button>
      </div>

      {/* <!-- Gallery Grid --> */}
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* <!-- Gallery Items --> */}
        <div class="group relative overflow-hidden rounded-xl bg-neutral-800 h-64 animate__animated animate__fadeInUp">
          <div class="absolute inset-0 flex items-center justify-center">
            {/* <svg class="w-24 h-24 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg> */}
            <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"/>
          </div>
          <div class="absolute inset-0 bg-gray-400 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <p class="text-neutral-900 font-semibold">Annual Day Celebration</p>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl bg-neutral-800 h-64 animate__animated animate__fadeInUp" >
          <div class="absolute inset-0 flex items-center justify-center">
            {/* <svg class="w-24 h-24 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg> */}
                        <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"/>

          </div>
          <div class="absolute inset-0 bg-gray-400 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <p class="text-neutral-900 font-semibold">Science Exhibition</p>
          </div>
        </div>

        <div class="group relative overflow-hidden rounded-xl bg-neutral-800 h-64 animate__animated animate__fadeInUp" >
          <div class="absolute inset-0 flex items-center justify-center">
            {/* <svg class="w-24 h-24 text-neutral-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
            </svg> */}
                        <img src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"/>

          </div>
          <div class="absolute inset-0 bg-gray-400 bg-opacity-0 group-hover:bg-opacity-75 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
            <p class="text-neutral-900 font-semibold">Sports Day</p>
          </div>
        </div>
      </div>

      {/* <!-- Load More Button --> */}
      <div class="text-center mt-12">
        <button class="bg-yellow-400 text-neutral-900 px-8 py-3 rounded-full font-semibold hover:bg-yellow-500 transition-colors animate__animated animate__fadeIn">
          Load More
        </button>
      </div>
    </div>

    {/* <script>
      function filterGallery(category) {
        // Add your gallery filtering logic here
        console.log('Filtering gallery by:', category);
      }
    </script> */}
  </section>

  {/* contact us */}
  <section id="contact" class="bg-neutral-900 py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16 animate__animated animate__fadeIn">
        <h2 class="text-4xl font-bold text-white mb-4">Contact Us</h2>
        <div class="w-24 h-1 bg-yellow-400 mx-auto"></div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* <!-- Contact Information --> */}
        <div class="space-y-8 animate__animated animate__fadeInLeft">
          <div class="bg-neutral-800 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-white mb-6">Get in Touch</h3>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="bg-yellow-400 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Address</h4>
                  <p class="text-gray-400">Alpha 2 Main Market , Greater Noida , 201310</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-yellow-400 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Email</h4>
                  <p class="text-gray-400">info@MAGschool.com</p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="bg-yellow-400 p-3 rounded-lg">
                  <svg class="w-6 h-6 text-neutral-900" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
                  </svg>
                </div>
                <div>
                  <h4 class="text-white font-semibold">Phone</h4>
                  <p class="text-gray-400">+91 700-483-4415</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-neutral-800 rounded-xl p-6">
            <h3 class="text-xl font-semibold text-white mb-6">Office Hours</h3>
            <div class="space-y-3 text-gray-400">
              <p>Monday - Friday: 8:00 AM - 4:00 PM</p>
              <p>Saturday: 8:00 AM - 12:00 PM</p>
              <p>Sunday: Closed</p>
            </div>
          </div>
        </div>

        {/* <!-- Contact Form --> */}
        <div class="bg-neutral-800 rounded-xl p-8 animate__animated animate__fadeInRight">
          <h3 class="text-xl font-semibold text-white mb-6">Send us a Message</h3>
          <form class="space-y-6">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label class="block text-gray-400 text-sm mb-2">First Name</label>
                <input type="text" class="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" required=""/>
              </div>
              <div>
                <label class="block text-gray-400 text-sm mb-2">Last Name</label>
                <input type="text" class="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" required=""/>
              </div>
            </div>

            <div>
              <label class="block text-gray-400 text-sm mb-2">Email Address</label>
              <input type="email" class="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" required=""/>
            </div>

            <div>
              <label class="block text-gray-400 text-sm mb-2">Subject</label>
              <input type="text" class="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" required=""/>
            </div>

            <div>
              <label class="block text-gray-400 text-sm mb-2">Message</label>
              <textarea rows="4" class="w-full px-4 py-2 bg-neutral-700 border border-neutral-600 rounded-lg text-white focus:outline-none focus:border-yellow-400" required=""></textarea>
            </div>

            <button type="submit" class="w-full bg-yellow-400 text-neutral-900 py-3 rounded-lg font-semibold hover:bg-yellow-500 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>

      {/* <!-- Map --> */}
      <div class="mt-16 bg-neutral-800 rounded-xl p-4 h-[400px] animate__animated animate__fadeIn">
        <div class="w-full h-full bg-neutral-700 rounded-lg flex items-center justify-center">
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1759.585575603582!2d77.51892815706219!3d28.479667925792516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1739703807481!5m2!1sen!2sin" width="1200" height="350"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>        </div>
      </div>
    </div>
  </section>
</>
  );
}

export default Home;
