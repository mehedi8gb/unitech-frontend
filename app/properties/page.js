'use client'

import { usePropertyContext } from '../contexts/PropertyContext'
import Image from 'next/image'
import Link from 'next/link'

export default function Properties() {
    const { filteredProperties, filter, setFilter } = usePropertyContext()

    // Ensure filteredProperties is an array, even if it's undefined
    const properties = Array.isArray(filteredProperties) ? filteredProperties : []

    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">Our Properties</h1>

            {/* Filter Section */}
            <div className="mb-8 p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
                <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Filter Properties</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <select
                        className="p-2 border rounded text-lg"
                        value={filter.type}
                        onChange={(e) => setFilter({...filter, type: e.target.value})}
                    >
                        <option value="">All Types</option>
                        <option value="Apartment">Apartment</option>
                        <option value="Penthouse">Penthouse</option>
                        <option value="Villa">Villa</option>
                    </select>
                    <select
                        className="p-2 border rounded text-lg"
                        value={filter.bedrooms}
                        onChange={(e) => setFilter({...filter, bedrooms: e.target.value})}
                    >
                        <option value="">All Bedrooms</option>
                        <option value="1">1+</option>
                        <option value="2">2+</option>
                        <option value="3">3+</option>
                        <option value="4">4+</option>
                    </select>
                    <select
                        className="p-2 border rounded text-lg"
                        value={filter.priceRange}
                        onChange={(e) => setFilter({...filter, priceRange: e.target.value})}
                    >
                        <option value="">All Prices</option>
                        <option value="low">Under $300,000</option>
                        <option value="medium">$300,000 - $600,000</option>
                        <option value="high">Over $600,000</option>
                    </select>
                </div>
            </div>

            {/* Property Listings */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {properties.map(property => (
                    <div key={property.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <Image
                            src={property.image}
                            alt={property.name}
                            width={400}
                            height={300}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-6">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{property.name}</h3>
                            <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">{property.type}</p>
                            <div className="flex justify-between mb-4 text-lg">
                                <span className="text-gray-600 dark:text-gray-300">{property.bedrooms} beds</span>
                                <span className="text-gray-600 dark:text-gray-300">{property.bathrooms} baths</span>
                                <span className="text-gray-600 dark:text-gray-300">{property.area} sqft</span>
                            </div>
                            <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-4">${property.price.toLocaleString()}</p>
                            <Link href={`/properties/${property.id}`} className="block text-center bg-blue-600 text-white text-lg px-4 py-2 rounded-full hover:bg-blue-700 transition duration-300">
                                View Details
                            </Link>
                        </div>
                    </div>
                ))}
            </div>

            {properties.length === 0 && (
                <div className="text-center text-gray-600 dark:text-gray-400 mt-8">
                    <p className="text-2xl">No properties found matching your criteria.</p>
                    <p className="mt-2">Try adjusting your filters to see more results.</p>
                </div>
            )}
        </div>
    )
}