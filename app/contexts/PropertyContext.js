'use client'

import React, {createContext, useState, useContext, useEffect} from 'react'

const PropertyContext = createContext()

export const usePropertyContext = () => useContext(PropertyContext)

export const PropertyProvider = ({children}) => {
    const [properties, setProperties] = useState([
        {
            id: 1,
            name: "Unitech Blossom",
            type: "Apartment",
            bedrooms: 3,
            bathrooms: 2,
            area: 1500,
            price: 250000,
            image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80"
        },
        {
            id: 2,
            name: "Unitech Pinnacle",
            type: "Penthouse",
            bedrooms: 4,
            bathrooms: 3,
            area: 2000,
            price: 500000,
            image: "https://images.unsplash.com/photo-1460317442991-0ec209397118?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 3,
            name: "Unitech Oasis",
            type: "Villa",
            bedrooms: 5,
            bathrooms: 4,
            area: 3000,
            price: 750000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
        },
        {
            id: 4,
            name: "Luxurious Waterfront Villa",
            type: "Villa",
            price: 1250000,
            address: "123 Oceanview Drive, Coastal City, State 12345",
            bedrooms: 4,
            bathrooms: 3.5,
            area: 3500,
            description: "Experience luxury living in this stunning waterfront villa. Featuring breathtaking ocean views, a private pool, and high-end finishes throughout, this property is perfect for those seeking the ultimate in comfort and style.",
            features: ["Ocean View", "Private Pool", "Gourmet Kitchen", "Home Theater", "Smart Home System"],
            images: [
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1153&q=80",
                "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Jane Doe",
                phone: "+1 (555) 123-4567",
                email: "jane.doe@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
        },
    ])

    const [filter, setFilter] = useState({type: '', bedrooms: '', priceRange: ''})
    const [recentlyViewed, setRecentlyViewed] = useState([])

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

    const addToRecentlyViewed = (propertyId) => {
        setRecentlyViewed(prev => {
            const updated = [propertyId, ...prev.filter(id => id !== propertyId)].slice(0, 4)
            localStorage.setItem('recentlyViewed', JSON.stringify(updated))
            return updated
        })
    }

    useEffect(() => {
        const storedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
        setRecentlyViewed(storedRecentlyViewed)
    }, [])

    return (
        <PropertyContext.Provider value={{
            properties,
            filteredProperties,
            filter,
            setFilter,
            recentlyViewed,
            addToRecentlyViewed
        }}>
            {children}
        </PropertyContext.Provider>
    )
}