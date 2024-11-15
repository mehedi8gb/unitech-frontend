'use client'

import {useState, useEffect} from 'react'
import {MoonIcon, SunIcon, PhoneIcon, EnvelopeIcon} from '@heroicons/react/24/solid'
import Image from 'next/image'
import Link from 'next/link'
import {usePathname} from 'next/navigation'
import {motion, AnimatePresence} from 'framer-motion'
import './globals.css'
import Head from "next/head";
import {PropertyProvider} from "./contexts/PropertyContext";


export default function RootLayout({children}) {
    const [darkMode, setDarkMode] = useState(false)
    const pathname = usePathname()

    const isDashboard = pathname.startsWith('/dashboard')

    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark')
        } else {
            document.documentElement.classList.remove('dark')
        }
    }, [darkMode])
    useEffect(() => {
        document.title = "Unitech Holdings Ltd";
    }, []);
    return (
        <html lang="en">
        <Head>
             <title>Unitech Holdings Ltd</title>
            <link rel="icon" href="/favicon.ico"/>
        </Head>
        <body className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
        <PropertyProvider>
            <header className="bg-white dark:bg-gray-800 shadow-md">
                <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                    <div className="flex items-center">
                        <Image src="https://via.placeholder.com/150x40" alt="Unitech Holdings Ltd Logo" width={150}
                               height={40}/>
                        <span
                            className="ml-2 text-2xl font-semibold text-gray-800 dark:text-white">Unitech Holdings Ltd</span>
                    </div>
                    <nav className="hidden md:flex space-x-6">
                        <Link href="/"
                              className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Home</Link>
                        <Link href="/properties"
                              className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Properties</Link>
                        <Link href="/about"
                              className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">About</Link>
                        <Link href="/contact"
                              className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">Contact</Link>
                    </nav>
                    <div className="flex items-center space-x-4">
                        <div className="flex space-x-4">
                            <Link href="/login"
                                  className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400">
                                Login
                            </Link>

                        </div>
                        <button
                            onClick={() => setDarkMode(!darkMode)}
                            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white"
                            aria-label="Toggle dark mode"
                        >
                            {darkMode ? <SunIcon className="h-6 w-6"/> : <MoonIcon className="h-6 w-6"/>}
                        </button>
                    </div>
                </div>
            </header>

            <AnimatePresence mode="wait">
                <motion.main
                    key={pathname}
                    initial={{opacity: 0, y: 20}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -20}}
                    transition={{duration: 0.3}}
                >
                    {children}
                </motion.main>
            </AnimatePresence>
            {!isDashboard && (
                <footer className="bg-gray-800 text-white py-12">
                    <div className="container mx-auto px-4">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <Image src="https://via.placeholder.com/150x40" alt="Unitech Holdings Ltd Logo"
                                       width={120}
                                       height={30}/>
                                <p className="mt-4 text-lg text-gray-400">Redefining urban living since 1988</p>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                                <ul className="space-y-2 text-lg">
                                    <li><Link href="/about" className="text-gray-400 hover:text-white">About Us</Link>
                                    </li>
                                    <li><Link href="/properties" className="text-gray-400 hover:text-white">Our
                                        Properties</Link></li>
                                    <li><Link href="/contact" className="text-gray-400 hover:text-white">Contact
                                        Us</Link>
                                    </li>
                                    {/*<li><Link href="/careers" className="text-gray-400 hover:text-white">Careers</Link></li>*/}
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                                <ul className="space-y-2 text-lg">
                                    <li className="flex items-center"><PhoneIcon className="h-5 w-5 mr-2"/> 16550</li>
                                    <li className="flex items-center"><EnvelopeIcon
                                        className="h-5 w-5 mr-2"/> info@unitechholdings.com
                                    </li>
                                    <li>123 Real Estate Street, Dhaka, Bangladesh</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                        </svg>
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <svg className="h-8 w-8" fill="currentColor" viewBox="0 0 24 24">
                                            <path
                                                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-lg text-gray-400">
                            © 2024 Unitech Holdings Ltd. All Rights Reserved
                        </div>
                    </div>
                </footer>
            )}
        </PropertyProvider>
        </body>
        </html>
    )
}