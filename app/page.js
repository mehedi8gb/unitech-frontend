'use client'

import { useState, useEffect } from 'react'
import { MoonIcon, SunIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [darkMode])

  return (
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <header className="bg-white dark:bg-gray-800 shadow-md">
          <div className="container mx-auto px-4 py-6 flex justify-between items-center">
            <div className="flex items-center">
              <Image src="https://via.placeholder.com/150x40" alt="Unitech Holdings Ltd Logo" width={150} height={40} />
              <span className="ml-2 text-2xl font-semibold text-gray-800 dark:text-white">Unitech Holdings Ltd</span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link href="/" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
              <Link href="/properties" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Properties</Link>
              <Link href="/about" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
              <Link href="/contact" className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
            </nav>
            <div className="flex items-center">
              <span className="mr-4 text-xl font-medium text-gray-600 dark:text-gray-300">16550</span>
              <button
                  onClick={() => setDarkMode(!darkMode)}
                  className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                  aria-label="Toggle dark mode"
              >
                {darkMode ? <SunIcon className="h-6 w-6" /> : <MoonIcon className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </header>

        <main>
          {/* Hero Section */}
          <section className="relative h-[80vh]">
            <Image src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" alt="Luxury Property" layout="fill" objectFit="cover" />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <div className="text-center">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Discover Your Dream Home</h1>
                <p className="text-2xl text-gray-200 mb-8">Experience luxury living with Unitech Holdings Ltd</p>
                <div className="flex justify-center space-x-4">
                  <Link href="/properties" className="bg-blue-600 text-white text-xl px-8 py-3 rounded-full hover:bg-blue-700 transition duration-300">View Properties</Link>
                  <Link href="/contact" className="bg-white text-gray-800 text-xl px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">Contact Us</Link>
                </div>
              </div>
            </div>
          </section>

          {/* Featured Properties Section */}
          <section className="py-20 bg-white dark:bg-gray-800">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">Featured Properties</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  {name: "Unitech Blossom", image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"},
                  {name: "Unitech Pinnacle", image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},
                  {name: "Unitech Oasis", image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"},
                ].map((project, index) => (
                    <div key={index} className="bg-gray-100 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:scale-105">
                      <Image src={project.image} alt={project.name} width={400} height={300} className="w-full h-64 object-cover" />
                      <div className="p-6">
                        <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{project.name}</h3>
                        <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">Luxury apartments in prime location</p>
                        <Link href="/properties" className="block text-center bg-blue-600 text-white text-lg px-6 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                          Learn More
                        </Link>
                      </div>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Why Choose Us Section */}
          <section className="py-20 bg-gray-100 dark:bg-gray-900">
            <div className="container mx-auto px-4">
              <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-800 dark:text-white">
                Why Choose Unitech Holdings Ltd?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {[
                  { title: 'Client Satisfaction', description: 'Over 10,000 happy homeowners', icon: '👨‍👩‍👧‍👦' },
                  { title: '35 Years of Excellence', description: 'Trusted name in real estate since 1988', icon: '🏆' },
                  { title: 'Quality Assurance', description: 'ISO 9001:2015 Certified for quality management', icon: '✅' },
                  { title: 'On-Time Delivery', description: 'Over 3500 units delivered on schedule', icon: '🕒' },
                  { title: 'Premium Construction', description: 'Using only the finest materials', icon: '🏗️' },
                  { title: 'Ethical Practices', description: 'Transparency in all our dealings', icon: '🤝' },
                ].map((item, index) => (
                    <div key={index} className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg text-center transition-transform duration-300 hover:scale-105">
                      <div className="text-5xl mb-6">{item.icon}</div>
                      <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">{item.title}</h3>
                      <p className="text-xl text-gray-600 dark:text-gray-300">{item.description}</p>
                    </div>
                ))}
              </div>
            </div>
          </section>

          {/* Call to Action Section */}
          <section className="py-20 bg-blue-600 text-white">
            <div className="container mx-auto px-4 text-center">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">Ready to Find Your Dream Home?</h2>
              <p className="text-2xl mb-8">Let us help you discover the perfect property for you and your family.</p>
              <Link href="/contact" className="bg-white text-blue-600 text-xl px-8 py-3 rounded-full hover:bg-gray-100 transition duration-300">
                Contact Us Today
              </Link>
            </div>
          </section>
        </main>

        <footer className="bg-gray-800 text-white py-12">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div>
                <Image src="https://via.placeholder.com/150x40" alt="Unitech Holdings Ltd Logo" width={120} height={30} />
                <p className="mt-4 text-lg text-gray-400">Redefining urban living since 1988</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-lg">
                  <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link></li>
                  <li><Link href="/properties" className="text-gray-400 hover:text-white">Our Properties</Link></li>
                  <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact Us</Link></li>
                  <li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                <ul className="space-y-2 text-lg">
                  <li className="flex items-center"><PhoneIcon className="h-5 w-5 mr-2" /> 16550</li>
                  <li className="flex items-center"><EnvelopeIcon className="h-5 w-5 mr-2" /> info@unitechholdings.com</li>
                  <li>123 Real Estate Street, Dhaka, Bangladesh</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                <div className="flex space-x-4">
                  <a href="#" className="text-gray-400 hover:text-white"><svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white"><svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0  10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg></a>
                  <a href="#" className="text-gray-400 hover:text-white"><svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg></a>
                </div>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-700 text-center text-lg text-gray-400">
              © 2024 Unitech Holdings Ltd. All Rights Reserved
            </div>
          </div>
        </footer>
      </div>
  )
}