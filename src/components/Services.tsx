import { FiCode, FiSmartphone, FiDatabase, FiServer } from "react-icons/fi"
import { FaPalette, FaObjectGroup } from "react-icons/fa"

interface ServiceCardProps {
  title: string
  description: string
  icon: React.ReactNode
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="text-green-600 mb-4 text-3xl">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  )
}

export default function Services() {
  const services = [
    {
      title: "Web Development",
      description: "End-to-end development including both frontend and backend. We build responsive, scalable web applications that deliver seamless experiences across devices.",
      icon: <FiCode />,
    },
    {
      title: "UI/UX Design",
      description: "Crafting delightful user experiences with wireframes, prototypes, and visual design systems to help your product stand out.",
      icon: <FaPalette />,
    },
    {
      title: "Template Development",
      description: "Building reusable, customizable templates (landing pages, dashboards, portfolios, and more) so you can launch faster with quality.",
      icon: <FaObjectGroup />,
    },
    {
      title: "Mobile Applications",
      description: "Native & cross-platform mobile apps crafted for high performance and usability on Android and iOS.",
      icon: <FiSmartphone />,
    },
    {
      title: "Database Management",
      description: "Designing and maintaining databases that scale, ensuring reliability, security, and performance.",
      icon: <FiDatabase />,
    },
    {
      title: "Cloud & Security Solutions",
      description: "Optimized deployments on cloud platforms, with enterprise-grade cybersecurity to keep your systems resilient.",
      icon: <FiServer />,
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Heading */}
        <div className="text-center mb-14">
      
          <p className="text-gray-600 max-w-3xl mx-auto">
            From web development to design, we provide end‑to‑end solutions 
            for startups and organizations — with a strong focus on performance, usability, and security.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s, i) => (
            <ServiceCard
              key={i}
              title={s.title}
              description={s.description}
              icon={s.icon}
            />
          ))}
        </div>
      </div>
    </section>
  )
}