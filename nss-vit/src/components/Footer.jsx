import React from 'react';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-blue-800 py-8 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">About</h3>
            <p className="text-blue-200 text-sm">
              Empowering communities with impactful events and initiatives. Join us in making a difference!
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Quick Links</h3>
            <ul>
              <li>
                <NavLink
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-secondary transform scale-105'
                        : 'text-blue-200 hover:text-secondary hover:scale-105'
                    }`
                  }
                  to={`/`}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/team`}
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-secondary transform scale-105'
                        : 'text-blue-200 hover:text-secondary hover:scale-105'
                    }`
                  }
                >
                  Team
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/events`}
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-secondary transform scale-105'
                        : 'text-blue-200 hover:text-secondary hover:scale-105'
                    }`
                  }
                >
                  Events
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/gallery`}
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-secondary transform scale-105'
                        : 'text-blue-200 hover:text-secondary hover:scale-105'
                    }`
                  }
                >
                  Gallery
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/camp`}
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-secondary transform scale-105'
                        : 'text-blue-200 hover:text-secondary hover:scale-105'
                    }`
                  }
                >
                  Camp
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/achievements`}
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-secondary transform scale-105'
                        : 'text-blue-200 hover:text-secondary hover:scale-105'
                    }`
                  }
                >
                  Achievements
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={`/developers`}
                  className={({ isActive }) =>
                    `text-sm transition-all duration-300 ease-in-out ${
                      isActive
                        ? 'text-secondary transform scale-105'
                        : 'text-blue-200 hover:text-secondary hover:scale-105'
                    }`
                  }
                >
                  Meet the Devs
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Contact</h3>
            <p className="text-blue-200 text-sm flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 -960 960 960" width="20px" fill="#B7B7B7">
                <path d="M168-192q-29.7 0-50.85-21.16Q96-234.32 96-264.04v-432.24Q96-726 117.15-747T168-768h624q29.7 0 50.85 21.16Q864-725.68 864-695.96v432.24Q864-234 842.85-213T792-192H168Zm312-240L168-611v347h624v-347L480-432Zm0-85 312-179H168l312 179Zm-312-94v-85 432-347Z"/>
              </svg>
              <NavLink to="mailto:nss@vit.edu.in" className="hover:text-secondary transition">
                nss@vit.edu.in
              </NavLink>
            </p>
            <a
              href="https://maps.app.goo.gl/oJhhiCnnoGVbvR2G9"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-200 text-sm flex items-center gap-2 hover:text-secondary transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="48px" viewBox="0 -960 960 960" width="48px" fill="#B7B7B7">
                <path d="M480.09-490q28.91 0 49.41-20.59 20.5-20.59 20.5-49.5t-20.59-49.41q-20.59-20.5-49.5-20.5t-49.41 20.59q-20.5 20.59-20.5 49.5t20.59 49.41q20.59 20.5 49.5 20.5ZM480-159q133-121 196.5-219.5T740-552q0-117.79-75.29-192.9Q589.42-820 480-820t-184.71 75.1Q220-669.79 220-552q0 75 65 173.5T480-159Zm0 79Q319-217 239.5-334.5T160-552q0-150 96.5-239T480-880q127 0 223.5 89T800-552q0 100-79.5 217.5T480-80Zm0-480Z"/>
              </svg>
              Vidyalankar Institute of Technology, Vidyalankar College Marg, Wadala(E), Mumbai-400 037
            </a>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <NavLink
                to="https://www.instagram.com/nss_vit/"
                className="text-blue-200 hover:text-pink-500 transition"
                aria-label="Instagram"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="currentColor" width="32" height="32" viewBox="0 0 32 32">
                  <path d="M10.202,2.098c-1.49,.07-2.507,.308-3.396,.657-.92,.359-1.7,.84-2.477,1.619-.776,.779-1.254,1.56-1.61,2.481-.345,.891-.578,1.909-.644,3.4-.066,1.49-.08,1.97-.073,5.771s.024,4.278,.096,5.772c.071,1.489,.308,2.506,.657,3.396,.359,.92,.84,1.7,1.619,2.477,.779,.776,1.559,1.253,2.483,1.61,.89,.344,1.909,.579,3.399,.644,1.49,.065,1.97,.08,5.771,.073,3.801-.007,4.279-.024,5.773-.095s2.505-.309,3.395-.657c.92-.36,1.701-.84,2.477-1.62s1.254-1.561,1.609-2.483c.345-.89,.579-1.909,.644-3.398,.065-1.494,.081-1.971,.073-5.773s-.024-4.278-.095-5.771-.308-2.507-.657-3.397c-.36-.92-.84-1.7-1.619-2.477s-1.561-1.254-2.483-1.609c-.891-.345-1.909-.58-3.399-.644s-1.97-.081-5.772-.074-4.278,.024-5.771,.096m.164,25.309c-1.365-.059-2.106-.286-2.6-.476-.654-.252-1.12-.557-1.612-1.044s-.795-.955-1.05-1.608c-.192-.494-.423-1.234-.487-2.599-.069-1.475-.084-1.918-.092-5.656s.006-4.18,.071-5.656c.058-1.364,.286-2.106,.476-2.6,.252-.655,.556-1.12,1.044-1.612s.955-.795,1.608-1.05c.493-.193,1.234-.422,2.598-.487,1.476-.07,1.919-.084,5.656-.092,3.737-.008,4.181,.006,5.658,.071,1.364,.059,2.106,.285,2.599,.476,.654,.252,1.12,.555,1.612,1.044s.795,.954,1.051,1.609c.193,.492,.422,1.232,.486,2.597,.07,1.476,.086,1.919,.093,5.656,.007,3.737-.006,4.181-.071,5.656-.06,1.365-.286,2.106-.476,2.601-.252,.654-.556,1.12-1.045,1.612s-.955,.795-1.608,1.05c-.493,.192-1.234,.422-2.597,.487-1.476,.069-1.919,.084-5.657,.092s-4.18-.007-5.656-.071M21.779,8.517c.002,.928,.755,1.679,1.683,1.677s1.679-.755,1.677-1.683c-.002-.928-.755-1.679-1.683-1.677,0,0,0,0,0,0-.928,.002-1.678,.755-1.677,1.683m-12.967,7.496c.008,3.97,3.232,7.182,7.202,7.174s7.183-3.232,7.176-7.202c-.008-3.97-3.233-7.183-7.203-7.175s-7.182,3.233-7.174,7.203m2.522-.005c-.005-2.577,2.08-4.671,4.658-4.676,2.577-.005,4.671,2.08,4.676,4.658,.005,2.577-2.08,4.671-4.658,4.676-2.577,.005-4.671-2.079-4.676-4.656h0"/>
                </svg>
              </NavLink>
              <NavLink
                to="https://www.youtube.com/@nss-vitvidyalankarinstitut5393/videos"
                className="text-blue-200 hover:text-red-600 transition"
                aria-label="YouTube"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.87 4 12 4 12 4s-6.87 0-8.59.46a2.78 2.78 0 0 0-1.95 1.96C1 8.13 1 12 1 12s0 3.87.46 5.59a2.78 2.78 0 0 0 1.95 1.96C5.13 20 12 20 12 20s6.87 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96C23 15.87 23 12 23 12s0-3.87-.46-5.59zM10 15V9l6 3-6 3z" />
                </svg>
              </NavLink>
              <NavLink
                to="https://www.facebook.com/people/NSS-VIT/100064835765369/"
                className="text-blue-200 hover:text-secondary transition"
                aria-label="Facebook"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.1 3.66 9.32 8.44 10v-7.1H8.31v-2.9h2.13V9.87c0-2.1 1.27-3.25 3.22-3.25.93 0 1.9.17 1.9.17v2.1h-1.07c-1.06 0-1.4.66-1.4 1.33v1.6h2.39l-.38 2.9h-2.01v7.1c4.78-.68 8.44-4.9 8.44-10z" />
                </svg>
              </NavLink>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-blue-700 pt-4 text-center">
          <p className="text-sm text-blue-200" id="contact">
            © {currentYear} NSS VIT. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;