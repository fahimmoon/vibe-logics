import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa"

export default function ContactPage() {
  return (
    <section className="py-24 px-6 bg-white text-gray-800">
      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900 animate-fadeInDown">
          Let’s <span className="text-green-600">Connect</span>
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto animate-fadeInUp">
          We may be a young startup, but we’re collaborating with talented developers and designers worldwide.  
          Drop us a message — we’d love to hear from you.
        </p>
      </div>

      {/* Grid layout */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        
        {/* Contact Form */}
        <form className="space-y-6 bg-white border border-gray-200 rounded-xl p-8 shadow-lg transform transition duration-500 hover:shadow-2xl animate-slideInLeft">
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Name</label>
            <input
              type="text"
              placeholder="Your Full Name"
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200 transition"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Email</label>
            <input
              type="email"
              placeholder="your@email.com"
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200 transition"
            />
          </div>
          <div className="text-left">
            <label className="block text-sm font-semibold text-gray-700 mb-2">Message</label>
            <textarea
              placeholder="Tell us about your project..."
              rows={5}
              className="w-full p-4 bg-gray-50 border border-gray-300 rounded-lg focus:border-green-500 focus:ring focus:ring-green-200 transition"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 rounded-lg font-semibold shadow-md transition transform hover:scale-105"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="space-y-8 text-center md:text-left animate-slideInRight">
          <h3 className="text-2xl font-bold text-gray-900">Other Ways to Reach Us</h3>
          <p className="text-gray-600">
            Prefer direct connections? Reach out via our platforms or email directly.
          </p>

          <div className="space-y-4">
            <a
              href="mailto:moonhunzai83@gmai.com"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-700 hover:text-green-600 transition transform hover:translate-x-2"
            >
              <FaEnvelope className="text-green-600" /> moonhunzai83@gmai.com
            </a>
            <a
              href="https://github.com/fahimmoon"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-700 hover:text-green-600 transition transform hover:translate-x-2"
            >
              <FaGithub className="text-green-600" /> github.com/fahimmoon
            </a>
            <a
              href="https://www.linkedin.com/in/fahim-ahmad-589a81246/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-700 hover:text-green-600 transition transform hover:translate-x-2"
            >
              <FaLinkedin className="text-green-600" /> linkedin.com/in/fahim-ahmad
            </a>
            <a
              href="https://fahimmoon.github.io/Portfolio/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center md:justify-start gap-3 text-gray-700 hover:text-green-600 transition transform hover:translate-x-2"
            >
              <FaGlobe className="text-green-600" /> fahimmoon.github.io/Portfolio
            </a>
          </div>

          {/* Fun metric / reassurance */}
          <div className="mt-10 bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-sm">
            <p className="text-lg font-semibold text-green-600">5+ Projects Completed</p>
            <p className="text-gray-600">Delivering reliable digital solutions since 2024 🚀</p>
          </div>
        </div>
      </div>
    </section>
  )
}