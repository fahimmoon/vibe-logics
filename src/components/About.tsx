import { FaUsers, FaRegLightbulb, FaRocket, FaLaptopCode } from "react-icons/fa"

export default function About() {
  const stats = [
    { value: "2024", label: "Founded" },
    { value: "5", label: "Projects in Pakistan" },
    { value: "10+", label: "Global Collaborators" },
    { value: "1", label: "Startup Founder" }
  ]
  
  const values = [
    { 
      icon: <FaUsers className="text-3xl text-green-600" />,
      title: "Collaboration First",
      description: "Thrives by partnering with global developers & designers, despite small size."
    },
    { 
      icon: <FaRegLightbulb className="text-3xl text-emerald-500" />,
      title: "Innovation Driven",
      description: "Exploring modern technologies, providing fresh ideas for every project."
    },
    { 
      icon: <FaRocket className="text-3xl text-teal-600" />,
      title: "Startup Energy",
      description: "Agile & adaptable — delivering impact with startup speed & commitment."
    },
    { 
      icon: <FaLaptopCode className="text-3xl text-green-700" />,
      title: "Technical Precision",
      description: "Clean code, scalable architecture, future‑ready engineering standards."
    }
  ]
  
  return (
    <section className="py-24 px-6 bg-white text-gray-800">
      <div className="max-w-6xl mx-auto">
        
        {/* Intro */}
        <div className="text-center mb-16 animate-fadeInUp">
          <div className="inline-block mb-4 bg-green-100 px-4 py-2 rounded-full border border-green-200">
            <span className="text-green-700 font-medium">Our Mission</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Innovating the <span className="text-green-600">Digital Future</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            <span className="font-semibold text-green-600">VibeLogics</span> is a virtual startup founded 
            in 2024 with a mission to build **scalable, impactful digital experiences**.  
            Though small, our collaborations with global professionals multiply our strength.
          </p>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20 animate-fadeInUp delay-200">
          {stats.map((stat, idx) => (
            <div 
              key={idx} 
              className="bg-gray-50 rounded-xl p-6 text-center border border-gray-200 shadow-sm hover:shadow-md transition"
            >
              <p className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.value}</p>
              <p className="text-gray-600">{stat.label}</p>
            </div>
          ))}
        </div>
        
        {/* Core Values */}
        <div className="mb-16 animate-fadeInUp delay-400">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              These principles guide every decision, ensuring our clients receive solutions built for growth.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, i) => (
              <div 
                key={i} 
                className="relative bg-white rounded-xl p-6 border border-gray-200 shadow hover:-translate-y-1 hover:shadow-md transition"
              >
                <div className="flex items-start">
                  <div className="mr-4">{value.icon}</div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                    <p className="text-gray-600">{value.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Collaboration CTA */}
        <div className="text-center animate-fadeInUp delay-600">
          <h2 className="text-3xl font-bold mb-4">Built on Collaboration</h2>
          <p className="text-gray-600 max-w-3xl mx-auto mb-6">
            VibeLogics has completed 5 projects in Pakistan and is now collaborating at organizational scale.  
            We grow not by size, but through global teamwork and partnerships.
          </p>
          <button className="px-8 py-3 rounded-lg font-semibold text-white bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 shadow-md hover:shadow-lg transition transform hover:scale-105">
            Join Our Network
          </button>
        </div>
      </div>
    </section>
  )
}