import { Link } from "react-router-dom"
import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa"

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-10 text-center text-sm text-gray-600">
      {/* Company Info */}
      <p className="mb-4">&copy; {new Date().getFullYear()} VibeLogics. All rights reserved.</p>
      
      {/* Links Row */}
      <div className="flex flex-wrap items-center justify-center gap-6 mb-6">
        <a
          href="https://github.com/fahimmoon"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          aria-label="Fahim's GitHub"
        >
          <FaGithub /> <span>GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/fahim-ahmad-589a81246/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          aria-label="Fahim's LinkedIn"
        >
          <FaLinkedin /> <span>LinkedIn</span>
        </a>

        <a
          href="https://fahimmoon.github.io/Portfolio/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          aria-label="Fahim's Portfolio Website"
        >
          <FaGlobe /> <span>Portfolio</span>
        </a>

        <a
          href="mailto:moonhunzai83@gmai.com"
          className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors"
          aria-label="Email Fahim"
        >
          <FaEnvelope /> <span>Email</span>
        </a>
      </div>

      {/* Legal Links */}
      <div className="flex justify-center space-x-6 text-gray-500">
        <Link to="/privacy" className="hover:text-green-600">Privacy</Link>
        <Link to="/terms" className="hover:text-green-600">Terms</Link>
      </div>
    </footer>
  )
}