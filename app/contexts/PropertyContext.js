'use client'

import React, {createContext, useState, useContext, useEffect} from 'react'

const PropertyContext = createContext()

export const usePropertyContext = () => useContext(PropertyContext)

export const PropertyProvider = ({children}) => {
    const [properties, setProperties] = useState([
        {
            id: 4,
            name: "Luxurious Waterfront Villa",
            type: "Villa",
            price: 1250000
            ,image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
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
        {
            id: 5,
            name: "Skyline Heights",
            type: "Apartment",
            price: 450000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "789 Downtown Avenue, Metropolis, State 67890",
            bedrooms: 2,
            bathrooms: 2,
            area: 1200,
            description: "Modern living meets urban convenience in this sleek downtown apartment. Enjoy panoramic city views, state-of-the-art appliances, and access to premium amenities.",
            features: ["City View", "Fitness Center", "Rooftop Terrace", "Concierge Service", "Pet-Friendly"],
            images: [
                "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=735&q=80",
                "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1080&q=80",
                "https://images.unsplash.com/photo-1536376072261-38c75010e6c9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1171&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Michael Johnson",
                phone: "+1 (555) 987-6543",
                email: "michael.johnson@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
        },
        {
            id: 6,
            name: "Riverside Retreat",
            type: "House",
            price: 675000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "456 River Road, Greenville, State 54321",
            bedrooms: 4,
            bathrooms: 3,
            area: 2800,
            description: "Escape to tranquility in this charming riverside home. With a spacious backyard, private dock, and rustic interior, it's the perfect blend of comfort and nature.",
            features: ["Waterfront", "Private Dock", "Fireplace", "Large Backyard", "Hardwood Floors"],
            images: [
                "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1600607687644-a9c2f0653f0f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Sarah Lee",
                phone: "+1 (555) 246-8135",
                email: "sarah.lee@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
            },
        },
        {
            id: 7,
            name: "Mountain View Lodge",
            type: "Cabin",
            price: 520000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "789 Pine Ridge Road, Mountain Town, State 24680",
            bedrooms: 3,
            bathrooms: 2,
            area: 1800,
            description: "Embrace the great outdoors in this cozy mountain lodge. Featuring stunning views, a wrap-around deck, and proximity to hiking trails, it's an adventurer's dream come true.",
            features: ["Mountain View", "Wrap-around Deck", "Stone Fireplace", "Hiking Trails Nearby", "Open Floor Plan"],
            images: [
                "https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1616137422495-1e9e46e2aa77?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Robert Chen",
                phone: "+1 (555) 369-2580",
                email: "robert.chen@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
        },
        {
            id: 8,
            name: "Sunset Beach House",
            type: "House",
            price: 890000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "101 Oceanfront Drive, Beachside, State 13579",
            bedrooms: 5,
            bathrooms: 4,
            area: 3200,
            description: "Live your beach dream in this stunning oceanfront property. With direct beach access, a private pool, and panoramic ocean views, every day feels like a vacation.",
            features: ["Beachfront", "Private Pool", "Ocean View", "Outdoor Kitchen", "Master Suite with Balcony"],
            images: [
                "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",

                "https://images.unsplash.com/photo-1613553507747-5f8d62ad5904?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1615529182904-14819c35db37?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1180&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Emily Rodriguez",
                phone: "+1 (555) 753-9514",
                email: "emily.rodriguez@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
        },
        {
            id: 9,
            name: "Urban Loft",
            type: "Apartment",
            price: 380000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "567 Artisan Street, Creative District, State 97531",
            bedrooms: 1,
            bathrooms: 1,
            area: 950,
            description: "Experience city living at its finest in this stylish urban loft. High ceilings, exposed brick, and modern finishes create a perfect blend of industrial chic and comfort.",
            features: ["High Ceilings", "Exposed Brick", "Stainless Steel Appliances", "Walk-in Closet", "Bike Storage"],
            images: [
                "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1617806118233-18e1de247200?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                "https://images.unsplash.com/photo-1622127922040-13cab637ee78?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "David Kim",
                phone: "+1 (555) 159-7532",
                email: "david.kim@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
        },
        {
            id: 10,
            name: "Countryside Manor",
            type: "Estate",
            price: 1750000
            ,image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "888 Rolling Hills Lane, Pastoral County, State 45678",
            bedrooms: 6,
            bathrooms: 5.5,
            area: 5500,
            description: "Step into luxury with this grand countryside estate. Boasting expansive grounds, a private lake, and exquisite architectural details, it's a true masterpiece of elegant living.",
            features: ["Private Lake", "Wine Cellar", "Home Gym", "Guest House", "Formal Gardens"],
            images: [
                "https://images.unsplash.com/photo-1505843513577-22bb7d21e455?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
                "https://images.unsplash.com/photo-1416331108676-a22ccb276e35?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1167&q=80",
                "https://images.unsplash.com/photo-1513584684374-8bab748fbf90?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Alexandra Foster",
                phone: "+1 (555) 951-7532",
                email: "alexandra.foster@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
            },
        },
        {
            id: 11,
            name: "Eco-Friendly Treehouse",
            type: "Unique",
            price: 295000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "123 Canopy Lane, Forest Hills, State 78901",
            bedrooms: 2,
            bathrooms: 1,
            area: 800,
            description: "Live amongst the treetops in this sustainable treehouse. Built with eco-friendly materials and powered by solar energy, it's the perfect retreat for nature lovers and environmentalists.",
            features: ["Solar Powered", "Rainwater Collection", "Organic Garden", "Composting Toilet", "360° Forest Views"],
            images: [
                "https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1165&q=80",
                "https://images.unsplash.com/photo-1547393931-13c227c8b533?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Oliver Green",
                phone: "+1 (555) 789-4561",
                email: "oliver.green@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
            },
        },
        {
            id: 12,
            name: "Downtown Micro-Apartment",
            type: "Apartment",
            price: 185000,
            image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            address: "456 Compact Street, City Center, State 13579",
            bedrooms: 1,
            bathrooms: 1,
            area: 350,
            description: "Maximize efficiency in this cleverly designed micro-apartment. Perfect for urban professionals, it features smart storage solutions and multi-functional furniture to make the most of every square foot.",
            features: ["Murphy Bed", "Compact Appliances", "Built-in Storage", "Foldable Furniture", "City Views"],
            images: [
                "https://images.unsplash.com/photo-1626178793926-22b28830aa30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1630699144867-37acec97df5a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
                "https://images.unsplash.com/photo-1502672023488-70e25813eb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
            ],
            videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
            view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
            agent: {
                name: "Sophia Lee",
                phone: "+1 (555) 321-7890",
                email: "sophia.lee@unitechholdings.com",
                image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
            },
        },
    ])

    const [filter, setFilter] = useState({type: '', bedrooms: '', priceRange: ''})
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('recentlyViewed')
            return saved ? JSON.parse(saved) : []
        }
    })

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
        setRecentlyViewed((prev) => {
            // Avoid re-render loops by checking if the item is already at the top
            if (prev[0] === propertyId) return prev;

            const updated = [propertyId, ...prev.filter((id) => id !== propertyId)].slice(0, 4);
            localStorage.setItem('recentlyViewed', JSON.stringify(updated));
            return updated;
        });
    };

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