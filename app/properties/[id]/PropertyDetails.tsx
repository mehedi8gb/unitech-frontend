'use client'

import { useState, useEffect } from 'react'

import Image from 'next/image'
import Link from 'next/link'
import { MapPinIcon, PhoneIcon, EnvelopeIcon, CalculatorIcon, ShareIcon, BookmarkIcon } from '@heroicons/react/24/solid'
import {usePropertyContext} from "@/app/contexts/PropertyContext";

export default function PropertyDetails({ id }: { id: string }) {
    const { properties, recentlyViewed, addToRecentlyViewed } = usePropertyContext()
    const [activeTab, setActiveTab] = useState('photos')
    const [mortgageAmount, setMortgageAmount] = useState(200000)
    const [interestRate, setInterestRate] = useState(3.5)
    const [loanTerm, setLoanTerm] = useState(30)
    const [hasViewed, setHasViewed] = useState(false)

    const propertyId = parseInt(id)
    const property = properties.find((p: { id: number }) => p.id === propertyId) || null

    useEffect(() => {
        if (property && !hasViewed) {
            addToRecentlyViewed(property.id)
            setHasViewed(true)
        }
    }, [property, addToRecentlyViewed, hasViewed])

    const calculateMortgage = () => {
        const principal = mortgageAmount
        const monthlyRate = interestRate / 100 / 12
        const numberOfPayments = loanTerm * 12
        const monthlyPayment = (principal * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments)) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)
        return monthlyPayment.toFixed(2)
    }

    const relatedProperties = properties.filter(p => p.id !== property?.id).slice(0, 2)

    if (!property) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">Property Not Found</h1>
                <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">The property you&#39;re looking for doesn&#39;t exist or has been removed.</p>
                <Link href="/properties" className="inline-block bg-blue-600 text-white text-lg px-6 py-3 rounded-full hover:bg-blue-700 transition duration-300">
                    View All Properties
                </Link>
            </div>
        )
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">{property.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{property.address}</p>

            {/* Media Tabs */}
            <div className="mb-8">
                <div className="flex mb-4">
                    <button
                        className={`px-4 py-2 mr-2 ${activeTab === 'photos' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} rounded-t-lg transition-colors`}
                        onClick={() => setActiveTab('photos')}
                    >
                        Photos
                    </button>
                    {property.videoTour && (
                        <button
                            className={`px-4 py-2 mr-2 ${activeTab === 'video' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} rounded-t-lg transition-colors`}
                            onClick={() => setActiveTab('video')}
                        >
                            Video Tour
                        </button>
                    )}
                    {property.view360 && (
                        <button
                            className={`px-4 py-2 ${activeTab === '360' ? 'bg-blue-600 text-white' : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200'} rounded-t-lg transition-colors`}
                            onClick={() => setActiveTab('360')}
                        >
                            360° View
                        </button>
                    )}
                </div>
                <div className="bg-gray-100 dark:bg-gray-800 p-4 rounded-b-lg">
                    {activeTab === 'photos' && (
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            {property.images && property.images.map((image, index) => (
                                <Image key={index} src={image} alt={`Property image ${index + 1}`} width={400}
                                       height={300} className="rounded-lg object-cover w-full h-48"/>
                            ))}
                        </div>
                    )}
                    {activeTab === 'video' && property.videoTour && (
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe src={property.videoTour} frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen className="w-full h-full"></iframe>
                        </div>
                    )}
                    {activeTab === '360' && property.view360 && (
                        <div className="aspect-w-16 aspect-h-9">
                            <iframe src={property.view360} frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen className="w-full h-full"></iframe>
                        </div>
                    )}
                </div>
            </div>

            {/* Property Details */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                <div className="col-span-2">
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Property Details</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        <div className="grid grid-cols-3 gap-4 mb-4">
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Price</p>
                                <p className="text-2xl font-bold text-blue-600 dark:text-blue-400">${property.price.toLocaleString()}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Bedrooms</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{property.bedrooms}</p>
                            </div>
                            <div>
                                <p className="text-gray-600 dark:text-gray-400">Bathrooms</p>
                                <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{property.bathrooms}</p>
                            </div>
                        </div>
                        <div className="mb-4">
                            <p className="text-gray-600 dark:text-gray-400">Square Feet</p>
                            <p className="text-2xl font-bold text-gray-800 dark:text-gray-200">{property.area.toLocaleString()}</p>
                        </div>
                        <p className="text-gray-700 dark:text-gray-300 mb-4">{property.description}</p>
                        {property.features && (
                            <>
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Features</h3>
                                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                                    {property.features.map((feature, index) => (
                                        <li key={index}>{feature}</li>
                                    ))}
                                </ul>
                            </>
                        )}
                    </div>
                </div>
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Contact Agent</h2>
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                        {property.agent && (
                            <>
                                <div className="flex items-center mb-4">
                                    <Image src={property.agent.image} alt={property.agent.name} width={64} height={64}
                                           className="rounded-full mr-4"/>
                                    <div>
                                        <p className="font-semibold text-gray-800 dark:text-white">{property.agent.name}</p>
                                        <p className="text-gray-600 dark:text-gray-400">Real Estate Agent</p>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <p className="flex items-center text-gray-700 dark:text-gray-300">
                                        <PhoneIcon className="h-5 w-5 mr-2 text-blue-600"/> {property.agent.phone}
                                    </p>
                                    <p className="flex items-center text-gray-700 dark:text-gray-300">
                                        <EnvelopeIcon className="h-5 w-5 mr-2 text-blue-600"/> {property.agent.email}
                                    </p>
                                </div>
                            </>
                        )}
                        <form className="mt-4">
                            <input type="text" placeholder="Your Name" className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"/>
                            <input type="email" placeholder="Your Email" className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"/>
                            <textarea placeholder="Your Message" rows={4}
                                      className="w-full p-2 mb-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"></textarea>
                            <button type="submit"
                                    className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>

            {/* Interactive Map */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Neighborhood</h2>
                <div className="bg-gray-200 dark:bg-gray-700 p-4 rounded-lg">
                    <p className="text-gray-700 dark:text-gray-300 mb-2">Interactive map with nearby amenities would be displayed here.</p>
                    <p className="text-gray-700 dark:text-gray-300">For actual implementation, you would need to integrate a map service like Google Maps or Mapbox.</p>
                </div>
            </div>

            {/* Mortgage Calculator */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Mortgage Calculator</h2>
                <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Loan Amount</label>
                            <input
                                type="number"
                                value={mortgageAmount}
                                onChange={(e) => setMortgageAmount(Number(e.target.value))}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Interest Rate (%)</label>
                            <input
                                type="number"
                                value={interestRate}
                                onChange={(e) => setInterestRate(Number(e.target.value))}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                        <div>
                            <label className="block text-gray-700 dark:text-gray-300 mb-2">Loan Term (years)</label>
                            <input
                                type="number"
                                value={loanTerm}
                                onChange={(e) => setLoanTerm(Number(e.target.value))}
                                className="w-full p-2 border rounded dark:bg-gray-700 dark:text-white dark:border-gray-600"
                            />
                        </div>
                    </div>
                    <div className="text-center">
                        <p className="text-gray-700 dark:text-gray-300 mb-2">Estimated Monthly Payment:</p>
                        <p className="text-3xl font-bold text-blue-600 dark:text-blue-400">${calculateMortgage()}</p>
                    </div>
                </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-center space-x-4 mb-8">
                <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                    <ShareIcon className="h-5 w-5 mr-2"/> Share
                </button>
                <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
                    <BookmarkIcon className="h-5 w-5 mr-2"/> Download Info
                </button>
                <button className="flex items-center bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-300">
                    <BookmarkIcon className="h-5 w-5 mr-2"/> Save
                </button>
            </div>

            {/* Related Properties */}
            <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Related Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {relatedProperties.map((relatedProperty) => (
                        <div key={relatedProperty.id}
                             className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                            <Image src={relatedProperty.image} alt={relatedProperty.name} width={400} height={300}
                                   className="w-full h-48 object-cover"/>
                            <div className="p-4">
                                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">{relatedProperty.name}</h3>
                                <p className="text-gray-600 dark:text-gray-400 mb-2">${relatedProperty.price.toLocaleString()}</p>
                                <p className="text-gray-700 dark:text-gray-300">
                                    {relatedProperty.bedrooms} beds • {relatedProperty.bathrooms} baths • {relatedProperty.area.toLocaleString()} sqft
                                </p>
                                <Link href={`/properties/${relatedProperty.id}`}
                                      className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
                                    View Details
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Recently Viewed */}
            {recentlyViewed.length > 0 && (
                <div>
                    <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Recently Viewed</h2>
                    <div className="flex space-x-4 overflow-x-auto pb-4">
                        {recentlyViewed.map((id) => {
                            const recentProperty = properties.find(p => p.id === id)
                            if (!recentProperty) return null
                            return (
                                <div key={id}
                                     className="flex-shrink-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                                    <Image src={recentProperty.image} alt={recentProperty.name} width={400} height={300}
                                           className="w-full h-40 object-cover"/>
                                    <div className="p-4">
                                        <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{recentProperty.name}</h3>
                                        <Link href={`/properties/${id}`} className="text-blue-600 hover:underline">
                                            View Details
                                        </Link>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}
        </div>
    )
}