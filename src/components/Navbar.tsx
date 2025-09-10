import { useState } from "react"
import { Link } from "react-router-dom"
import { RiMenuLine, RiCloseLine } from "react-icons/ri"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6">
        <Link to="/" className="text-2xl font-extrabold text-green-600">
          VibeLogics
        </Link>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <RiCloseLine className="w-7 h-7" /> : <RiMenuLine className="w-7 h-7" />}
        </button>

        <nav className="hidden md:flex space-x-8 font-medium">
          <Link to="/" className="hover:text-green-600">Home</Link>
          <Link to="/services" className="hover:text-green-600">Services</Link>
          <Link to="/about" className="hover:text-green-600">About</Link>
          <Link to="/contact" className="hover:text-green-600">Contact</Link>
        </nav>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-md">
          <nav className="flex flex-col p-6 space-y-4">
            <Link to="/" className="hover:text-green-600" onClick={() => setOpen(false)}>Home</Link>
            <Link to="/services" className="hover:text-green-600" onClick={() => setOpen(false)}>Services</Link>
            <Link to="/about" className="hover:text-green-600" onClick={() => setOpen(false)}>About</Link>
            <Link to="/contact" className="hover:text-green-600" onClick={() => setOpen(false)}>Contact</Link>
          </nav>
        </div>
      )}
    </header>
  )
}