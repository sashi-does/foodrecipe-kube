import {
    ChefHat,
    Search,
    PlusCircle,
    Clock,
    Utensils,
    Award,
    ArrowRight,
    Instagram,
    Twitter,
    Facebook,
    Github,
  } from "lucide-react"
  import { Link } from "react-router-dom"

  export default function LandingPage() {
    return (
      <div className="min-h-screen w-full bg-white flex flex-col justify-between">
        {/* Header/Navigation */}
        <header className="bg-white shadow-sm sticky top-0 z-50">
          <div className="w-full px-6 py-4 flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <ChefHat className="h-8 w-8 text-orange-500" />
              <h1 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                Food Recipie
              </h1>
            </div>
  

  
            <div className="flex items-center space-x-4">
              <Link to="/login" className="text-gray-700 hover:text-orange-500 transition-colors">
              <button className="hidden md:block px-4 py-2 text-orange-500 font-medium hover:text-orange-600 transition-colors">
                Log in
              </button>
              </Link>
              <Link to="/signup" className="hidden md:block px-4 py-2 text-orange-500 font-medium hover:text-orange-600 transition-colors">
              <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-full hover:from-orange-600 hover:to-red-600 transition-all shadow-md hover:shadow-lg">
                Get Started
              </button>
              </Link>
            </div>
          </div>
        </header>
  
        {/* Hero Section */}
        <section className="relative overflow-hidden flex-grow">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-orange-100 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute top-48 -left-24 w-80 h-80 bg-amber-100 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute -bottom-24 right-48 w-64 h-64 bg-red-100 rounded-full opacity-70 blur-3xl"></div>
          </div>
  
          <div className="relative z-10 w-full px-6 py-24 md:py-32">
            <div className="flex flex-col md:flex-row items-center max-w-7xl mx-auto">
              <div className="w-full md:w-1/2 mb-12 md:mb-0">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                  <span className="block">Discover & Share</span>
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600">
                    Delicious Recipes
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg">
                  Your ultimate platform for finding, creating, and sharing culinary masterpieces from around the world.
                </p>
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                  <button className="px-8 py-4 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-xl hover:from-orange-600 hover:to-red-600 transition-all shadow-lg hover:shadow-xl flex items-center justify-center">
                    <span>Start Cooking</span>
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </button>
                  <button className="px-8 py-4 bg-white text-gray-700 font-medium rounded-xl border border-gray-200 hover:bg-gray-50 transition-all shadow-md hover:shadow-lg">
                    Explore Recipes
                  </button>
                </div>
  
                <div className="mt-12 flex items-center">

                  <div className="ml-4">
                    <p className="text-sm font-medium text-gray-900">Joined by 10,000+ food lovers</p>
                    <div className="flex items-center mt-1">
                      {[1, 2, 3, 4, 5].map((i) => (
                        <svg key={i} className="w-4 h-4 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                      <span className="ml-1 text-sm text-gray-500">4.9/5 from 2,000+ reviews</span>
                    </div>
                  </div>
                </div>
              </div>
  
              <div className="w-full md:w-1/2 relative">
                <div className="relative mx-auto w-full max-w-md">
                  <div className="absolute inset-0 bg-gradient-to-r from-orange-500/20 to-red-500/20 rounded-3xl transform rotate-3 scale-105"></div>
                  <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
                    <div className="bg-gradient-to-r from-orange-500 to-red-500 px-6 py-4">
                      <h3 className="text-xl font-bold text-white">Featured Recipe</h3>
                    </div>
                    <div className="p-6 space-y-4">
                      <h4 className="font-bold text-xl text-gray-800">Homemade Margherita Pizza</h4>
  
                      <div className="flex items-start">
                        <ChefHat className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-gray-900">Instructions</h5>
                          <p className="text-gray-700">
                            Stretch dough, add sauce, fresh mozzarella, and basil. Bake at 500°F until crust is golden.
                          </p>
                        </div>
                      </div>
  
                      <div className="flex items-start">
                        <Utensils className="h-5 w-5 text-orange-500 mt-1 mr-2 flex-shrink-0" />
                        <div>
                          <h5 className="font-medium text-gray-900">Ingredients</h5>
                          <ul className="list-disc list-inside text-gray-700 grid grid-cols-2 gap-1">
                            <li>Pizza dough</li>
                            <li>Tomato sauce</li>
                            <li>Fresh mozzarella</li>
                            <li>Fresh basil</li>
                            <li>Olive oil</li>
                            <li>Salt and pepper</li>
                          </ul>
                        </div>
                      </div>
  
                      <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center mr-3">
                            <span className="text-orange-600 font-medium">I</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Cuisine</p>
                            <p className="font-medium text-gray-900">Italian</p>
                          </div>
                        </div>
  
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center mr-3">
                            <span className="text-green-600 font-medium">V</span>
                          </div>
                          <div>
                            <p className="text-sm text-gray-500">Dietary</p>
                            <p className="font-medium text-gray-900">Vegetarian</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* Features Section */}
        <section id="features" className="w-full px-6 py-24 bg-gradient-to-b from-white to-amber-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Everything You Need to Cook Like a Pro</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                CulinaryCanvas provides all the tools you need to discover, create, and share amazing recipes.
              </p>
            </div>
  
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <FeatureCard
                icon={<Search className="h-8 w-8 text-orange-500" />}
                title="Find Recipes"
                description="Search our extensive collection of recipes by ingredient, cuisine, or dietary preference."
              />
              <FeatureCard
                icon={<PlusCircle className="h-8 w-8 text-orange-500" />}
                title="Create & Share"
                description="Add your own recipes to our collection and share them with the community."
              />
              <FeatureCard
                icon={<Clock className="h-8 w-8 text-orange-500" />}
                title="Save Time"
                description="Quickly find recipes that match your available ingredients and time constraints."
              />
              <FeatureCard
                icon={<Award className="h-8 w-8 text-orange-500" />}
                title="Premium Recipes"
                description="Access exclusive recipes from professional chefs and culinary experts."
              />
            </div>
  
            <div className="mt-24 bg-white rounded-3xl shadow-xl overflow-hidden border border-orange-100">
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-8 md:p-12 flex items-center">
                  <div>
                    <h3 className="text-2xl md:text-3xl font-bold mb-4">How It Works</h3>
                    <div className="space-y-6">
                      <StepItem
                        number="01"
                        title="Search for Recipes"
                        description="Find recipes based on ingredients you have, cuisine type, or dietary preferences."
                      />
                      <StepItem
                        number="02"
                        title="Create Your Own"
                        description="Add your signature dishes to our growing collection of culinary masterpieces."
                      />
                      <StepItem
                        number="03"
                        title="Save Favorites"
                        description="Keep track of recipes you love for quick access whenever you need them."
                      />
                      <StepItem
                        number="04"
                        title="Share with Friends"
                        description="Share your favorite recipes with friends and family with just a few clicks."
                      />
                    </div>
                  </div>
                </div>
  
                <div className="bg-gradient-to-br from-orange-500 to-red-500 p-8 md:p-12 flex items-center">
                  <div className="text-white">
                    <h3 className="text-2xl md:text-3xl font-bold mb-6">Why Choose CulinaryCanvas?</h3>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Extensive collection of recipes from around the world</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>User-friendly interface for easy recipe management</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Advanced search functionality to find exactly what you need</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Community of food lovers sharing their culinary creations</span>
                      </li>
                      <li className="flex items-start">
                        <svg className="h-6 w-6 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>Regular updates with new features and recipes</span>
                      </li>
                    </ul>
  
                    <button className="mt-8 px-6 py-3 bg-white text-orange-500 font-medium rounded-xl hover:bg-orange-50 transition-all shadow-md hover:shadow-lg">
                      Learn More
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
  
        {/* CTA Section */}
        <section className="w-full px-6 py-24 relative overflow-hidden">
          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-orange-100 rounded-full opacity-70 blur-3xl"></div>
            <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-amber-100 rounded-full opacity-70 blur-3xl"></div>
          </div>
  
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-3xl overflow-hidden shadow-2xl">
              <div className="px-6 py-24 md:p-12 text-center md:text-left md:flex md:items-center md:justify-between">
                <div className="md:max-w-2xl mb-8 md:mb-0">
                  <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                    Ready to Start Your Culinary Journey?
                  </h2>
                  <p className="text-white/90 text-lg mb-0 md:pr-12">
                    Join thousands of food enthusiasts who are discovering, creating, and sharing amazing recipes every
                    day.
                  </p>
                </div>
  
                <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
                  <button className="px-8 py-4 bg-white text-orange-500 font-medium rounded-xl hover:bg-orange-50 transition-all shadow-lg hover:shadow-xl">
                    Get Started Free
                  </button>
                  <button className="px-8 py-4 bg-orange-600 text-white font-medium rounded-xl border border-orange-400 hover:bg-orange-700 transition-all shadow-lg hover:shadow-xl">
                    View Recipes
                  </button>
                </div>
              </div>
            </div>
  
            <div className="mt-24 text-center">
              <h3 className="text-2xl md:text-3xl font-bold mb-12">Trusted by Home Cooks Worldwide</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                {["Tasty", "FoodNetwork", "Epicurious", "AllRecipes"].map((brand) => (
                  <div key={brand} className="flex items-center justify-center">
                    <span className="text-xl md:text-2xl font-bold text-gray-400">{brand}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
  
        {/* Footer */}
        <footer className="bg-gray-900 text-white">
          <div className="w-full px-6 py-12">
            <div className="max-w-7xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                <div>
                  <div className="flex items-center space-x-2 mb-6">
                    <ChefHat className="h-8 w-8 text-orange-500" />
                    <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-500">
                      CulinaryCanvas
                    </h2>
                  </div>
                  <p className="text-gray-400 mb-6">
                    Your ultimate platform for finding, creating, and sharing culinary masterpieces from around the world.
                  </p>
                  <div className="flex space-x-4">
                    <SocialLink icon={<Facebook className="h-5 w-5" />} />
                    <SocialLink icon={<Twitter className="h-5 w-5" />} />
                    <SocialLink icon={<Instagram className="h-5 w-5" />} />
                    <SocialLink icon={<Github className="h-5 w-5" />} />
                  </div>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                  <ul className="space-y-4">
                    <FooterLink>Home</FooterLink>
                    <FooterLink>About Us</FooterLink>
                    <FooterLink>Features</FooterLink>
                    <FooterLink>Pricing</FooterLink>
                    <FooterLink>Contact</FooterLink>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold mb-6">Resources</h3>
                  <ul className="space-y-4">
                    <FooterLink>Blog</FooterLink>
                    <FooterLink>Recipes</FooterLink>
                    <FooterLink>Chefs</FooterLink>
                    <FooterLink>Cooking Tips</FooterLink>
                    <FooterLink>FAQs</FooterLink>
                  </ul>
                </div>
  
                <div>
                  <h3 className="text-lg font-semibold mb-6">Subscribe</h3>
                  <p className="text-gray-400 mb-4">
                    Subscribe to our newsletter to get updates on new recipes and features.
                  </p>
                  <form className="space-y-2">
                    <input
                      type="email"
                      placeholder="Your email address"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 text-white"
                    />
                    <button
                      type="submit"
                      className="w-full px-4 py-3 bg-gradient-to-r from-orange-500 to-red-500 text-white font-medium rounded-lg hover:from-orange-600 hover:to-red-600 transition-all"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
  
              <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
                <p className="text-gray-400 text-sm mb-4 md:mb-0">
                  © {new Date().getFullYear()} CulinaryCanvas. All rights reserved.
                </p>
                <div className="flex space-x-6">
                  <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                    Privacy Policy
                  </span>
                  <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                    Terms of Service
                  </span>
                  <span className="text-gray-400 text-sm hover:text-white transition-colors cursor-pointer">
                    Cookie Policy
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
  }
  
  // Component for navigation links
  function NavLink({ href, children }) {
    return (
      <a href={href} className="text-gray-600 hover:text-orange-500 font-medium transition-colors">
        {children}
      </a>
    )
  }
  
  // Component for feature cards
  function FeatureCard({ icon, title, description }) {
    return (
      <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-100 hover:shadow-xl transition-shadow">
        <div className="bg-orange-50 w-16 h-16 rounded-lg flex items-center justify-center mb-4">{icon}</div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    )
  }
  
  // Component for step items
  function StepItem({ number, title, description }) {
    return (
      <div className="flex">
        <div className="mr-4">
          <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center text-orange-500 font-bold">
            {number}
          </div>
        </div>
        <div>
          <h4 className="font-bold text-lg mb-1">{title}</h4>
          <p className="text-gray-600">{description}</p>
        </div>
      </div>
    )
  }
  
  // Component for social links
  function SocialLink({ icon }) {
    return (
      <a
        href="#"
        className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-orange-500 hover:text-white transition-all"
      >
        {icon}
      </a>
    )
  }
  
  // Component for footer links
  function FooterLink({ children }) {
    return (
      <li>
        <a href="#" className="text-gray-400 hover:text-orange-500 transition-colors">
          {children}
        </a>
      </li>
    )
  }

  
