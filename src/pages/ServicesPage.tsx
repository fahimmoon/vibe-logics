import Services from "../components/Services"
import CTA from "../components/CTA"

export default function ServicesPage() {
  return (
    <div className="bg-white text-gray-800">
      {/* Heading Section */}
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 text-gray-900">
          Our <span className="text-green-600">Services</span>
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto">
          Discover how our innovative, scalable, and secure solutions can transform 
          your business into a future‑ready powerhouse.
        </p>
      </div>
      
      {/* Services Grid */}
      <Services />

      {/* Call to Action */}
      <CTA />
    </div>
  )
}