'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'

const properties = [
    { id: 1, name: "Unitech Blossom", type: "Apartment", bedrooms: 3, bathrooms: 2, area: 1500, price: 250000, image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80" },
    { id: 2, name: "Unitech Pinnacle", type: "Penthouse", bedrooms: 4, bathrooms: 3, area: 2000, price: 500000, image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    { id: 3, name: "Unitech Oasis", type: "Villa", bedrooms: 5, bathrooms: 4, area: 3000, price: 750000, image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80" },
    // Add more properties as needed
]

export default function Properties() {
    const [filter, setFilter] = useState({ type: '', bedrooms: '', priceRange: '' })

    const filteredProperties = properties.filter(property => {
        return (
            (filter.type === '' || property.type === filter.type) &&
            (filter.bedrooms === '' || property.bedrooms >= parseInt(filter.bedrooms)) &&
            (filter.priceRange === '' || (
                filter.priceRange === 'low' && property.price < 300000 ||
                filter.priceRange === 'medium' && property.price >= 300000 && property.price < 600000 ||
                filter.priceRange === 'high' && property.price >= 600000
            ))
        )
    })

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
                {filteredProperties.map(property => (
                    <div key={property.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden">
                        <Image src={property.image} alt={property.name} width={400} height={300} className="w-full h-48 object-cover" />
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
        </div>
    )
}