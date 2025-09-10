import About from "../components/About"
import CTA from "../components/CTA"
import { FaLightbulb, FaUsersCog, FaRegHandshake, FaChartLine, FaBullseye, FaGlobe } from "react-icons/fa"
const steps = [
  {
    icon: <FaLightbulb className="text-white text-2xl" />,
    title: "Plan",
    desc: "We clarify needs, goals, and scope with agile strategies.",
    color: "from-green-500 to-emerald-600"
  },
  {
    icon: <FaUsersCog className="text-white text-2xl" />,
    title: "Build",
    desc: "Clean code with scalable architecture and modern design.",
    color: "from-emerald-500 to-teal-600"
  },
  {
    icon: <FaRegHandshake className="text-white text-2xl" />,
    title: "Collaborate",
    desc: "Continuous feedback and client collaboration throughout.",
    color: "from-teal-500 to-green-500"
  },
  {
    icon: <FaChartLine className="text-white text-2xl" />,
    title: "Deliver",
    desc: "Launch with stability, long‑term support, real results.",
    color: "from-green-500 to-emerald-700"
  },
]
export default function AboutPage() {
  return (
    
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          {/* Left */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-gray-900">
              About <span className="text-green-600">VibeLogics</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mb-8">
              Founded in <span className="font-semibold text-green-600">2024</span>, VibeLogics is a 
              <span className="font-semibold"> virtual software startup</span> — starting as a one‑man company 
              but collaborating with talented developers & designers worldwide. Despite our size, we’ve 
              delivered impactful software solutions and continue to grow via collaborations.
            </p>
          </div>

          {/* Right */}
          <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-4">Quick Facts</h3>
            <ul className="text-gray-700 space-y-3 text-lg">
              <li>✅ 5 Projects completed in Pakistan</li>
              <li>✅ Started in 2024 with a global remote vision</li>
              <li>✅ Working with established organizations</li>
              <li>✅ Future‑focused startup energy 🚀</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Main About Section (stats + values) */}
      <About />

      <section className="py-20 px-6 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto text-center mb-12">
        {/* Section Heading */}
        <div className="inline-block mb-4 bg-green-100 px-4 py-2 rounded-full border border-green-200">
          <span className="text-green-700 font-medium">Our Purpose</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          Mission & Vision
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At <span className="font-semibold text-green-600">VibeLogics</span>, everything we do is guided 
          by a strong mission and an ambitious vision for the future.  
        </p>
      </div>

      {/* Mission & Vision Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {/* Mission */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-green-600 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-900">Our Mission</h3>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            To create <span className="font-semibold">scalable, user‑friendly, 
            and secure digital solutions</span> that empower startups, organizations, 
            and global businesses to innovate and grow.
          </p>
        </div>

        {/* Vision */}
        <div className="bg-white rounded-xl p-8 border border-gray-200 shadow hover:shadow-lg transition transform hover:-translate-y-1">
          <div className="flex items-center gap-3 mb-4">
            <FaGlobe className="text-green-600 text-2xl" />
            <h3 className="text-xl font-semibold text-gray-900">Our Vision</h3>
          </div>
          <p className="text-gray-600 text-base leading-relaxed">
            To evolve from a 
            <span className="font-semibold"> startup into a global, distributed team</span>, 
            delivering <span className="italic">innovation without borders</span>, 
            shaping tomorrow’s digital experiences everywhere.
          </p>
        </div>
      </div>
    </section>

     <section className="py-20 px-6 bg-white border-t border-gray-200">
      {/* Section Header */}
      <div className="max-w-7xl mx-auto text-center mb-16">
        <div className="inline-block mb-4 bg-green-100 px-4 py-1 rounded-full border border-green-200">
          <span className="text-green-700 font-medium text-sm">Our Process</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          How We Work
        </h2>
        <p className="text-gray-600 max-w-3xl mx-auto">
          At VibeLogics, every project follows a structured approach that balances 
          flexibility with clarity, ensuring quality at every step.
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {steps.map((step, i: number) => (
          <div 
            key={i}
            className="relative bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition hover:-translate-y-1"
          >
            {/* Number */}
            <div className="absolute -top-4 left-6 bg-white px-3 py-1 rounded-full border text-sm font-semibold text-green-600 shadow">
              {`0${i + 1}`}
            </div>

            {/* Icon */}
            <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-br ${step.color} shadow-md mb-6`}>
              {step.icon}
            </div>

            {/* Title */}
            <h3 className="font-semibold text-lg text-gray-900 mb-3">{step.title}</h3>
            
            {/* Description */}
            <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
          </div>
        ))}
      </div>
    </section>

<section className="py-16 px-6 bg-gray-50 border-t border-gray-200" id="journey">
  <div className="max-w-5xl mx-auto">
    {/* Header */}
    <div className="text-center mb-12">
      <div className="inline-block mb-3 bg-green-100 px-3 py-1 rounded-full border border-green-200">
        <span className="text-green-700 font-medium text-sm">Our Journey</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-900">Growth Timeline</h2>
      <p className="text-gray-600 max-w-3xl mx-auto text-sm">
        A compact view of our startup progress, projects, and global vision.
      </p>
    </div>

    {/* Timeline */}
    <div className="relative">
      {/* vertical line */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full border-l-2 border-green-300"></div>

      {/* items */}
      <div className="space-y-12">
        {/* Item 1 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          <div className="order-1 md:w-5/12 text-right md:pr-6">
            <span className="text-green-600 font-semibold text-sm">2024</span>
            <h3 className="text-lg font-semibold text-gray-900">Launch</h3>
            <p className="text-gray-600 text-sm">
              Started as a one-man virtual startup creating scalable solutions.
            </p>
          </div>
          <div className="order-2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="order-3 md:w-5/12"></div>
        </div>

        {/* Item 2 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          <div className="order-1 md:w-5/12"></div>
          <div className="order-2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="order-3 md:w-5/12 md:pl-6 text-left">
            <span className="text-green-600 font-semibold text-sm">2024 – Present</span>
            <h3 className="text-lg font-semibold text-gray-900">Projects</h3>
            <p className="text-gray-600 text-sm">
              Delivered 5 projects in Pakistan, building trust + credibility.
            </p>
          </div>
        </div>

        {/* Item 3 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          <div className="order-1 md:w-5/12 text-right md:pr-6">
            <span className="text-green-600 font-semibold text-sm">Now</span>
            <h3 className="text-lg font-semibold text-gray-900">Collaboration</h3>
            <p className="text-gray-600 text-sm">
              Working with organizations, adding value as lean contributors.
            </p>
          </div>
          <div className="order-2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="order-3 md:w-5/12"></div>
        </div>

        {/* Item 4 */}
        <div className="flex flex-col md:flex-row items-center md:justify-between w-full">
          <div className="order-1 md:w-5/12"></div>
          <div className="order-2 w-6 h-6 bg-green-600 rounded-full border-4 border-white shadow-md z-10"></div>
          <div className="order-3 md:w-5/12 md:pl-6 text-left">
            <span className="text-green-600 font-semibold text-sm">Future</span>
            <h3 className="text-lg font-semibold text-gray-900">Vision</h3>
            <p className="text-gray-600 text-sm">
              Grow into a global, distributed team delivering borderless innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* Testimonials Section */}
<section className="py-20 px-6 bg-white">
  <div className="max-w-6xl mx-auto text-center">
    {/* Header */}
    <div className="inline-block mb-4 bg-green-100 px-4 py-2 rounded-full border border-green-200">
      <span className="text-green-700 font-medium text-sm">Testimonials</span>
    </div>
    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
      What People Say About Us
    </h2>
    <p className="text-gray-600 max-w-2xl mx-auto mb-12">
      We may be a young startup, but our collaborators and clients 
      already trust our ability to deliver scalable, secure, and delightful solutions.
    </p>

    {/* Testimonials Grid */}
    <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
      
      {/* Card 1 */}
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
        <div className="text-green-500 text-3xl mb-4">“</div>
        <p className="text-gray-700 italic">VibeLogics delivered exactly what we needed — on time, with quality.</p>
        <div className="mt-6 flex items-center justify-center">
          <img 
            src="https://i.pravatar.cc/100?img=12" 
            alt="Client" 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900">Local Startup Client</p>
            <p className="text-sm text-gray-500">Pakistan</p>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
        <div className="text-green-500 text-3xl mb-4">“</div>
        <p className="text-gray-700 italic">Even as a small startup, their professionalism was on par with corporate teams.</p>
        <div className="mt-6 flex items-center justify-center">
          <img 
            src="https://i.pravatar.cc/100?img=34" 
            alt="Partner Developer" 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900">Partner Developer</p>
            <p className="text-sm text-gray-500">Independent Collaborator</p>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="p-6 bg-gray-50 border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition transform hover:-translate-y-1">
        <div className="text-green-500 text-3xl mb-4">“</div>
        <p className="text-gray-700 italic">Great collaboration experience, highly recommend VibeLogics.</p>
        <div className="mt-6 flex items-center justify-center">
          <img 
            src="https://i.pravatar.cc/100?img=45" 
            alt="Organization Lead" 
            className="w-10 h-10 rounded-full mr-3"
          />
          <div className="text-left">
            <p className="font-semibold text-gray-900">Organization Lead</p>
            <p className="text-sm text-gray-500">Partner Organization</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      {/* CTA Section */}
      <CTA />
    </>
  )
}