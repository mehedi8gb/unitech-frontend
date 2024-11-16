'use client';

import { useState, useEffect } from 'react';
import { MoonIcon, SunIcon, PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import './globals.css';
import Head from 'next/head';
import { PropertyProvider } from './contexts/PropertyContext';
import Cookies from 'js-cookie';
import { Button } from '@headlessui/react';

export default function RootLayout({ children }) {
    const [darkMode, setDarkMode] = useState(false);
    const pathname = usePathname();
 
    const [user,setUser] = useState(false)
    const router = useRouter();
    const isDashboard = pathname.startsWith('/dashboard');
    useEffect(()=>{
            setUser(Cookies.get('user') ? JSON.parse(Cookies.get('user')) : false)
    },[])
    useEffect(() => {
        if (darkMode) {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        document.title = 'Unitech Holdings Ltd';
    }, []);

    const handleLogout = async () => {
        Cookies.remove('user');
        router.push('/login');
    };

    return (
        <html lang="en">
            <Head>
                <title>Unitech Holdings Ltd</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <body className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-300">
                <PropertyProvider>
                    {/* Header */}
                    <header className="bg-white dark:bg-gray-800 shadow-md">
                        <div className="container mx-auto px-4 py-6 flex justify-between items-center">
                            <div className="flex items-center">
                                <Image
                                    src="https://via.placeholder.com/150x40"
                                    alt="Unitech Holdings Ltd Logo"
                                    width={150}
                                    height={40}
                                />
                                <span className="ml-2 text-2xl font-semibold text-gray-800 dark:text-white">
                                    Unitech Holdings Ltd
                                </span>
                            </div>
                            <nav className="hidden md:flex space-x-6">
                                {user && (
                                    <Link
                                        href="/dashboard"
                                        className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                    >
                                        Dashboard
                                    </Link>
                                )}
                                <Link
                                    href="/"
                                    className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Home
                                </Link>
                                <Link
                                    href="/properties"
                                    className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Properties
                                </Link>
                                <Link
                                    href="/about"
                                    className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    About
                                </Link>
                                <Link
                                    href="/contact"
                                    className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                >
                                    Contact
                                </Link>
                            </nav>
                            <div className="flex items-center space-x-4">
                                <div className="flex space-x-4">
                                    {user ? (
                                        <Button
                                            className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </Button>
                                    ) : (
                                        <Link
                                            href="/login"
                                            className="text-lg text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                                        >
                                            Login
                                        </Link>
                                    )}
                                </div>
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

                    {/* Main content with animation */}
                    <AnimatePresence mode="wait">
                        <motion.main
                            key={pathname}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.3 }}
                        >
                            {children}
                        </motion.main>
                    </AnimatePresence>

                    {/* Footer */}
                    {!isDashboard && (
                        <footer className="bg-gray-800 text-white py-12">
                            <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                                    <div>
                                        <Image
                                            src="https://via.placeholder.com/150x40"
                                            alt="Unitech Holdings Ltd Logo"
                                            width={120}
                                            height={30}
                                        />
                                        <p className="mt-4 text-lg text-gray-400">Redefining urban living since 1988</p>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                                        <ul className="space-y-2 text-lg">
                                            <li>
                                                <Link href="/about" className="text-gray-400 hover:text-white">
                                                    About Us
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/properties" className="text-gray-400 hover:text-white">
                                                    Our Properties
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact" className="text-gray-400 hover:text-white">
                                                    Contact Us
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
                                        <ul className="space-y-2 text-lg">
                                            <li className="flex items-center">
                                                <PhoneIcon className="h-5 w-5 mr-2" /> 16550
                                            </li>
                                            <li className="flex items-center">
                                                <EnvelopeIcon className="h-5 w-5 mr-2" /> info@unitechholdings.com
                                            </li>
                                            <li>123 Real Estate Street, Dhaka, Bangladesh</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                                        <div className="flex space-x-4">
                                            {/* Add social media links */}
                                            <a href="#" className="text-gray-400 hover:text-white">...</a>
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
    );
}
