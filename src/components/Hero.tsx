import { Link } from "react-router-dom"
import { FaClock, FaShieldAlt, FaRocket, FaCode } from "react-icons/fa"
import heroImg from "../assets/hero-illustration.png" 

export default function Hero() {
  return (
    <section
      className="relative min-h-[70vh] flex items-center bg-white px-6 overflow-hidden"
      style={{ backgroundImage: `url(${heroImg})`, backgroundSize: "cover", backgroundPosition: "center" }}
    >
      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-white/85"></div>

      {/* Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto py-16 grid md:grid-cols-2 gap-12 items-center">
        
        {/* Left Content */}
        <div className="max-w-2xl text-center md:text-left">
          {/* Badge */}
          <div className="inline-block mb-4 px-5 py-1 bg-green-100 border border-green-200 rounded-full text-xs font-medium text-green-700 animate-fadeInDown">
            Virtual Startup · Global Collaboration
          </div>

          {/* Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 leading-snug animate-slideInLeft">
            Empowering <span className="text-green-600">Digital Innovation</span>{" "}
            <br className="hidden sm:block"/> with Scalable Solutions
          </h1>

          {/* Subtitle */}
          <p className="text-base md:text-lg text-gray-700 mb-8 animate-slideInLeft delay-200">
            VibeLogics builds modern software with clean code, UI/UX excellence, 
            and secure infrastructures — delivering value even as a fast‑growing virtual startup.
          </p>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start animate-fadeInUp delay-400">
            <Link 
              to="/services" 
              className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold shadow-md hover:bg-green-700 transition transform hover:scale-105 text-sm md:text-base"
            >
              Explore Services
            </Link>
            <Link 
              to="/contact" 
              className="px-6 py-3 border border-gray-300 bg-white rounded-lg font-semibold text-gray-700 hover:bg-gray-50 transition transform hover:scale-105 text-sm md:text-base"
            >
              Contact Us
            </Link>
          </div>

          {/* Trust stats */}
          <div className="mt-10 flex flex-wrap gap-6 justify-center md:justify-start text-gray-700 animate-fadeInUp delay-600">
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-green-600">5+</p>
              <p className="text-xs text-gray-500">Projects Completed</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-green-600">2024</p>
              <p className="text-xs text-gray-500">Founded</p>
            </div>
            <div className="text-center md:text-left">
              <p className="text-2xl font-bold text-green-600">Global</p>
              <p className="text-xs text-gray-500">Remote Collaboration</p>
            </div>
          </div>
        </div>

        {/* Right Content: Feature Cards */}
        <div className="grid gap-6 sm:grid-cols-2 animate-fadeInUp">
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-green-600 mb-3">
              <FaRocket size={28}/>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Fast Delivery</h3>
            <p className="text-gray-600 text-sm">
              We move quickly while maintaining high quality, helping startups launch faster.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-green-600 mb-3">
              <FaShieldAlt size={28}/>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Security First</h3>
            <p className="text-gray-600 text-sm">
              Security and scalability are built into every solution we deliver.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-green-600 mb-3">
              <FaCode size={28}/>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">Clean Code</h3>
            <p className="text-gray-600 text-sm">
              We write efficient, maintainable code that powers reliable applications.
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow hover:shadow-lg transition">
            <div className="text-green-600 mb-3">
              <FaClock size={28}/>
            </div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">On-Time Delivery</h3>
            <p className="text-gray-600 text-sm">
              Meeting deadlines is part of our culture — we respect your time and goals.
            </p>
          </div>
        </div>

      </div>
    </section>
  )
}