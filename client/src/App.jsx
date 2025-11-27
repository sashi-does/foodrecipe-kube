/* eslint-disable no-undef */
import './App.css'
import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ChefHat, Search, PlusCircle, Trash2, FileSearch, Edit, Menu, X } from "lucide-react"
import AppRoutes from './AppRouter'

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const location = useLocation()
  const path = location.pathname

  // Logout function
const handleLogout = () => {
  // Remove token from localStorage
  localStorage.removeItem('token');
  // Redirect to home page
  window.location.href = '/';
}


  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen)
  }

  const titleMap = {
    "/search": "Discover Delicious Recipes",
    "/add": "Share Your Culinary Creation",
    "/get": "Find Your Favorite Recipe",
    "/update": "Refine Your Recipe",
    "/delete": "Remove a Recipe",
  }

  const subtitleMap = {
    "/search": "Explore our collection of mouthwatering recipes from around the world.",
    "/add": "Add your signature dish to our growing collection of culinary masterpieces.",
    "/get": "Retrieve a specific recipe from our extensive collection.",
    "/update": "Update and improve your existing recipes.",
    "/delete": "Remove recipes that are no longer needed.",
  }

  const isStandalonePage = ["/", "/login", "/signup"].includes(path)

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-orange-50">
      {isStandalonePage  ? (
        <AppRoutes /> // Only LandingPage rendered without layout
      ) : (
        <>
          {/* Header */}
          <header className="bg-white shadow-md sticky top-0 z-50 w-full">
            <div className="container mx-auto px-4 py-4 flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <ChefHat className="h-8 w-8 text-orange-500" />
                <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                  CulinaryCanvas
                </h1>
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden md:flex space-x-1">
                <NavButton to="/search" icon={<Search className="h-4 w-4" />} label="Search" active={path === "/search"} />
                <NavButton to="/add" icon={<PlusCircle className="h-4 w-4" />} label="Add" active={path === "/add"} />
                <NavButton to="/get" icon={<FileSearch className="h-4 w-4" />} label="Get" active={path === "/get"} />
                <NavButton to="/update" icon={<Edit className="h-4 w-4" />} label="Update" active={path === "/update"} />
                <NavButton to="/delete" icon={<Trash2 className="h-4 w-4" />} label="Delete" active={path === "/delete"} />
                {/* Logout Button */}
                <NavButton to="#" icon={<X className="h-4 w-4" />} label="Logout" active={false} onClick={handleLogout} />
              </nav>

              {/* Mobile Menu Toggle */}
              <button
                className="md:hidden p-2 rounded-full hover:bg-orange-100 transition-colors"
                onClick={toggleMobileMenu}
              >
                {mobileMenuOpen ? <X className="h-6 w-6 text-orange-500" /> : <Menu className="h-6 w-6 text-orange-500" />}
              </button>
            </div>

            {/* Mobile Navigation */}
            {mobileMenuOpen && (
              <div className="md:hidden bg-white border-t border-orange-100 py-2 px-4 shadow-lg">
                <div className="flex flex-col space-y-2">
                  <MobileNavButton to="/search" icon={<Search className="h-5 w-5" />} label="Search" active={path === "/search"} />
                  <MobileNavButton to="/add" icon={<PlusCircle className="h-5 w-5" />} label="Add" active={path === "/add"} />
                  <MobileNavButton to="/get" icon={<FileSearch className="h-5 w-5" />} label="Get" active={path === "/get"} />
                  <MobileNavButton to="/update" icon={<Edit className="h-5 w-5" />} label="Update" active={path === "/update"} />
                  <MobileNavButton to="/delete" icon={<Trash2 className="h-5 w-5" />} label="Delete" active={path === "/delete"} />
                  {/* Mobile Logout Button */}
                  <MobileNavButton to="#" icon={<X className="h-5 w-5" />} label="Logout" active={false} onClick={handleLogout} />
                </div>
              </div>
            )}
          </header>

          {/* Main Content */}
          <main className="container mx-auto px-4 py-8 w-full">
            <div className="max-w-4xl mx-auto">
              <div className="mb-8 text-center">
                <h2 className="text-3xl font-bold text-gray-800 mb-2">{titleMap[path]}</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">{subtitleMap[path]}</p>
              </div>
              <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-orange-100">
                <div className="p-6 md:p-8">
                  <AppRoutes />
                </div>
              </div>
            </div>
          </main>


        </>
      )}
    </div>
  )
}

// Navigation Buttons
function NavButton({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-1 px-4 py-2 rounded-full transition-all ${
        active ? "bg-orange-500 text-white shadow-md" : "text-gray-700 hover:bg-orange-100"
      }`}
    >
      {icon}
      <span>{label}</span>
    </Link>
  )
}

function MobileNavButton({ to, icon, label, active }) {
  return (
    <Link
      to={to}
      className={`flex items-center space-x-3 w-full px-4 py-3 rounded-lg transition-all ${
        active ? "bg-orange-500 text-white shadow-sm" : "text-gray-700 hover:bg-orange-100"
      }`}
    >
      {icon}
      <span className="font-medium">{label}</span>
    </Link>
  )
}




