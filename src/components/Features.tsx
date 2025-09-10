import { 
  FaCode, 
  FaMobileAlt, 
  FaCloud, 
  FaPalette, 
  FaObjectGroup, 
  FaDatabase 
} from "react-icons/fa"
import { Link } from "react-router-dom"


interface FeatureCardProps {
  icon: React.ElementType
  title: string
  desc: string
  isHighlighted?: boolean
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, desc, isHighlighted }) => {
  return (
    <div
      className={`
        group relative overflow-hidden
        ${isHighlighted 
          ? "border-green-500/70 bg-gradient-to-br from-green-50 to-white" 
          : "border-gray-200 bg-white"} 
        rounded-xl p-8
        shadow-md hover:shadow-xl
        border transition-all duration-500
        hover:-translate-y-2
      `}
    >
      {/* Floating accent glow */}
      <div className="absolute -top-10 -right-10 w-36 h-36 bg-green-200 rounded-full blur-3xl opacity-0 group-hover:opacity-60 transition duration-500"></div>

      {/* Icon */}
      <div className="mb-6 inline-block rounded-lg bg-gradient-to-br from-green-500 to-emerald-600 p-4 shadow-lg group-hover:shadow-green-200 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6">
        <Icon className="text-white" size={28} />
      </div>

      {/* Title + text */}
      <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-green-700 transition-colors duration-300">
        {title}
      </h3>
      <p className="text-gray-600 mb-6">{desc}</p>

      {/* Learn More link */}
      <Link
        to="/services"
        className="text-green-600 font-medium inline-flex items-center group-hover:text-green-700 transition"
      >
        Learn more
        <svg xmlns="http://www.w3.org/2000/svg" 
             className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-300" 
             fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  )
}

export default function Features() {
  const features = [
    { 
      icon: FaCode, 
      title: "Web Development", 
      desc: "Full‑stack expertise (frontend & backend) — scalable, performant, responsive platforms.", 
      isHighlighted: true
    },
    { 
      icon: FaPalette, 
      title: "UI/UX Design", 
      desc: "Wireframes to polished UIs — user‑centric, accessible, and visually consistent."
    },
    { 
      icon: FaObjectGroup, 
      title: "Template Development", 
      desc: "Landing pages, dashboards, and portfolios — reusable, customizable, and launch‑ready."
    },
    { 
      icon: FaMobileAlt, 
      title: "Mobile Applications", 
      desc: "Native and cross‑platform apps optimized for smooth iOS & Android performance."
    },
    { 
      icon: FaDatabase, 
      title: "Database Management", 
      desc: "Design, optimize, and maintain high‑performance databases for growth."
    },
    { 
      icon: FaCloud, 
      title: "Cloud & Security", 
      desc: "Secure, scalable deployments on modern cloud with enterprise‑class protection.", 
      isHighlighted: true
    }
  ]

  return (
    <section className="relative py-24 max-w-7xl mx-auto px-6">
      {/* Section heading */}
      <div className="text-center mb-16 animate-fadeInUp">
        <div className="inline-block mb-4 px-4 py-2 rounded-full border border-green-200 bg-green-100">
          <span className="text-green-700 font-medium">Why Choose Us</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">
          Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-500 to-emerald-600">Core Services</span>
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          VibeLogics may be a young startup, but we collaborate globally with developers and designers 
          to deliver clean code, engaging design, and scalable architectures.
        </p>
      </div>
      
      {/* Cards Grid */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fadeInUp delay-200">
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            desc={feature.desc}
            isHighlighted={feature.isHighlighted}
          />
        ))}
      </div>

      {/* CTA */}
      <div className="mt-16 text-center animate-fadeInUp delay-400">
        <Link
          to="/services"
          className="px-9 py-4 rounded-lg font-semibold bg-gradient-to-r from-green-500 to-emerald-600 text-white shadow-lg hover:shadow-green-300 transition-transform transform hover:scale-105"
        >
          View All Services
        </Link>
      </div>
    </section>
  )
}