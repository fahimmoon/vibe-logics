import { Link } from "react-router-dom"

export default function CTA() {
  return (
    <section className="py-20 bg-green-600 text-center text-white">
      <h2 className="text-4xl font-bold mb-4">Ready to Get Started?</h2>
      <p className="mb-8 max-w-xl mx-auto">
        Let’s work together to build clean, efficient and powerful digital experiences for your business.
      </p>
      <Link to="/contact" className="px-8 py-3 bg-white text-green-700 rounded-lg font-semibold hover:bg-gray-100 transition">
        Talk to Us
      </Link>
    </section>
  )
}