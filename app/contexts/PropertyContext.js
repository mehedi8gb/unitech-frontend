'use client'

import React, {createContext, useState, useContext, useEffect} from 'react'

const PropertyContext = createContext()

export const usePropertyContext = () => useContext(PropertyContext)

export const PropertyProvider = ({children}) => {
  const initialProperties = [
    {
        id: 4,
        name: "Luxurious Waterfront Villa",
        type: "Villa",
        status :'ongoing',
        price: 1250000
        ,image: "/img/project1.jpg",
        address: "123 Oceanview Drive, Coastal City, State 12345",
        bedrooms: 4,
        bathrooms: 3.5,
        area: 3500,
        description: "Experience luxury living in this stunning waterfront villa. Featuring breathtaking ocean views, a private pool, and high-end finishes throughout, this property is perfect for those seeking the ultimate in comfort and style.",
        features: ["Ocean View", "Private Pool", "Gourmet Kitchen", "Home Theater", "Smart Home System"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        plans : [
            "/img/floor1.jpg",
            "/img/floor2.jpg",
        ],
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Jane Doe",
            phone: "+1 (555) 123-4567",
            email: "jane.doe@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
         iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 5,
        name: "Skyline Heights",
        type: "Apartment",
        status :'ongoing',
        price: 450000,
        image: "/img/project2.jpg",
        address: "789 Downtown Avenue, Metropolis, State 67890",
        bedrooms: 2,
        bathrooms: 2,
        area: 1200,
        description: "Modern living meets urban convenience in this sleek downtown apartment. Enjoy panoramic city views, state-of-the-art appliances, and access to premium amenities.",
        features: ["City View", "Fitness Center", "Rooftop Terrace", "Concierge Service", "Pet-Friendly"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        plans : [
            "/img/floor1.jpg",
            "/img/floor2.jpg",
        ],
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],

        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Michael Johnson",
            phone: "+1 (555) 987-6543",
            email: "michael.johnson@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
         iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 6,
        name: "Riverside Retreat",
        type: "House",
        price: 675000,
        status :'ongoing',
        image: "/img/project3.jpg",
        address: "456 River Road, Greenville, State 54321",
        bedrooms: 4,
        bathrooms: 3,
        area: 2800,
        description: "Escape to tranquility in this charming riverside home. With a spacious backyard, private dock, and rustic interior, it's the perfect blend of comfort and nature.",
        features: ["Waterfront", "Private Dock", "Fireplace", "Large Backyard", "Hardwood Floors"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Sarah Lee",
            phone: "+1 (555) 246-8135",
            email: "sarah.lee@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
        },
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
           iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 7,
        name: "Mountain View Lodge",
        type: "Cabin",
        status :'ready-to-move-in',
        price: 520000,
        image : '/img/project4.jpg',
        address: "789 Pine Ridge Road, Mountain Town, State 24680",
        bedrooms: 3,
        bathrooms: 2,
        area: 1800,
        description: "Embrace the great outdoors in this cozy mountain lodge. Featuring stunning views, a wrap-around deck, and proximity to hiking trails, it's an adventurer's dream come true.",
        features: ["Mountain View", "Wrap-around Deck", "Stone Fireplace", "Hiking Trails Nearby", "Open Floor Plan"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Robert Chen",
            phone: "+1 (555) 369-2580",
            email: "robert.chen@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
           iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 8,
        name: "Sunset Beach House",
        type: "House",
        price: 890000,
        status :'ready-to-move-in',
        image : '/img/project5.jpg',
        address: "101 Oceanfront Drive, Beachside, State 13579",
        bedrooms: 5,
        bathrooms: 4,
        area: 3200,
        description: "Live your beach dream in this stunning oceanfront property. With direct beach access, a private pool, and panoramic ocean views, every day feels like a vacation.",
        features: ["Beachfront", "Private Pool", "Ocean View", "Outdoor Kitchen", "Master Suite with Balcony"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Emily Rodriguez",
            phone: "+1 (555) 753-9514",
            email: "emily.rodriguez@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
           iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 9,
        name: "Urban Loft",
        type: "Apartment",
        status :'ready-to-move-in',
        price: 380000,
        image : '/img/project6.jpg',
        address: "567 Artisan Street, Creative District, State 97531",
        bedrooms: 1,
        bathrooms: 1,
        area: 950,
        description: "Experience city living at its finest in this stylish urban loft. High ceilings, exposed brick, and modern finishes create a perfect blend of industrial chic and comfort.",
        features: ["High Ceilings", "Exposed Brick", "Stainless Steel Appliances", "Walk-in Closet", "Bike Storage"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "David Kim",
            phone: "+1 (555) 159-7532",
            email: "david.kim@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
           iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 10,
        name: "Countryside Manor",
        type: "Estate",
        price: 1750000
        ,image : '/img/project7.jpg',
        address: "888 Rolling Hills Lane, Pastoral County, State 45678",
        bedrooms: 6,
        status :'ready-to-move-in',
        bathrooms: 5.5,
        area: 5500,
        description: "Step into luxury with this grand countryside estate. Boasting expansive grounds, a private lake, and exquisite architectural details, it's a true masterpiece of elegant living.",
        features: ["Private Lake", "Wine Cellar", "Home Gym", "Guest House", "Formal Gardens"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],

        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Alexandra Foster",
            phone: "+1 (555) 951-7532",
            email: "alexandra.foster@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80",
        },
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
           iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 11,
        name: "Eco-Friendly Treehouse",
        type: "Unique",
        price: 295000,
        image : '/img/project8.jpg',
        address: "123 Canopy Lane, Forest Hills, State 78901",
        bedrooms: 2,
        bathrooms: 1,
        status :'ready-to-move-in',
        area: 800,
        description: "Live amongst the treetops in this sustainable treehouse. Built with eco-friendly materials and powered by solar energy, it's the perfect retreat for nature lovers and environmentalists.",
        features: ["Solar Powered", "Rainwater Collection", "Organic Garden", "Composting Toilet", "360° Forest Views"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Oliver Green",
            phone: "+1 (555) 789-4561",
            email: "oliver.green@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
        },
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
           iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
    {
        id: 12,
        name: "Downtown Micro-Apartment",
        type: "Apartment",
        price: 185000,
        status :'coming-soon',
        image : '/img/project9.jpg', 
        address: "456 Compact Street, City Center, State 13579",
        bedrooms: 1,
        bathrooms: 1,
        area: 350,
        description: "Maximize efficiency in this cleverly designed micro-apartment. Perfect for urban professionals, it features smart storage solutions and multi-functional furniture to make the most of every square foot.",
        features: ["Murphy Bed", "Compact Appliances", "Built-in Storage", "Foldable Furniture", "City Views"],
        images: [
            "/img/project1.jpg",
            "/img/project2.jpg",
            "/img/project3.jpg",
            "/img/project4.jpg",
            "/img/project5.jpg",
            "/img/project6.jpg",
            "/img/project7.jpg",
            "/img/project8.jpg",
            "/img/project9.jpg",
        ],
        videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
        agent: {
            name: "Sophia Lee",
            phone: "+1 (555) 321-7890",
            email: "sophia.lee@unitechholdings.com",
            image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
        },
        
        details :  [
            {
              icon: "📍",
              label: "Address",
              value: "Plot # 17/A, Road # 126, Gulshan"
            },
            {
              icon: "📏",
              label: "Land Area",
              value: "6.43 Katha"
            },
            {
              icon: "🏢",
              label: "No. of Floors",
              value: "G + 9"
            },
            {
              icon: "🏠",
              label: "Apartment/Floor",
              value: "1"
            },
            {
              icon: "📐",
              label: "Apartment Size",
              value: "3000+ sft"
            }
          ],
          iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
    },
];
    const [properties, setProperties] = useState([])
    const [filteredProperties,setFilteredProperties] = useState([])
    const [ongoingProperties, setOngoingProperties ] = useState([{
      id: 4,
      name: "Luxurious Waterfront Villa",
      type: "Villa",
      status :'ongoing',
      price: 1250000
      ,image: "/img/project1.jpg",
      address: "123 Oceanview Drive, Coastal City, State 12345",
      bedrooms: 4,
      bathrooms: 3.5,
      area: 3500,
      description: "Experience luxury living in this stunning waterfront villa. Featuring breathtaking ocean views, a private pool, and high-end finishes throughout, this property is perfect for those seeking the ultimate in comfort and style.",
      features: ["Ocean View", "Private Pool", "Gourmet Kitchen", "Home Theater", "Smart Home System"],
      images: [
          "/img/project1.jpg",
          "/img/project2.jpg",
          "/img/project3.jpg",
          "/img/project4.jpg",
          "/img/project5.jpg",
          "/img/project6.jpg",
          "/img/project7.jpg",
          "/img/project8.jpg",
          "/img/project9.jpg",
      ],
      plans : [
          "/img/floor1.jpg",
          "/img/floor2.jpg",
      ],
      
      details :  [
          {
            icon: "📍",
            label: "Address",
            value: "Plot # 17/A, Road # 126, Gulshan"
          },
          {
            icon: "📏",
            label: "Land Area",
            value: "6.43 Katha"
          },
          {
            icon: "🏢",
            label: "No. of Floors",
            value: "G + 9"
          },
          {
            icon: "🏠",
            label: "Apartment/Floor",
            value: "1"
          },
          {
            icon: "📐",
            label: "Apartment Size",
            value: "3000+ sft"
          }
        ],
      videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
      agent: {
          name: "Jane Doe",
          phone: "+1 (555) 123-4567",
          email: "jane.doe@unitechholdings.com",
          image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
       iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
  },
  {
      id: 5,
      name: "Skyline Heights",
      type: "Apartment",
      status :'ongoing',
      price: 450000,
      image: "/img/project2.jpg",
      address: "789 Downtown Avenue, Metropolis, State 67890",
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      description: "Modern living meets urban convenience in this sleek downtown apartment. Enjoy panoramic city views, state-of-the-art appliances, and access to premium amenities.",
      features: ["City View", "Fitness Center", "Rooftop Terrace", "Concierge Service", "Pet-Friendly"],
      images: [
          "/img/project1.jpg",
          "/img/project2.jpg",
          "/img/project3.jpg",
          "/img/project4.jpg",
          "/img/project5.jpg",
          "/img/project6.jpg",
          "/img/project7.jpg",
          "/img/project8.jpg",
          "/img/project9.jpg",
      ],
      plans : [
          "/img/floor1.jpg",
          "/img/floor2.jpg",
      ],
      details :  [
          {
            icon: "📍",
            label: "Address",
            value: "Plot # 17/A, Road # 126, Gulshan"
          },
          {
            icon: "📏",
            label: "Land Area",
            value: "6.43 Katha"
          },
          {
            icon: "🏢",
            label: "No. of Floors",
            value: "G + 9"
          },
          {
            icon: "🏠",
            label: "Apartment/Floor",
            value: "1"
          },
          {
            icon: "📐",
            label: "Apartment Size",
            value: "3000+ sft"
          }
        ],

      videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
      agent: {
          name: "Michael Johnson",
          phone: "+1 (555) 987-6543",
          email: "michael.johnson@unitechholdings.com",
          image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
      },
       iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
  },
  {
      id: 6,
      name: "Riverside Retreat",
      type: "House",
      price: 675000,
      status :'ongoing',
      image: "/img/project3.jpg",
      address: "456 River Road, Greenville, State 54321",
      bedrooms: 4,
      bathrooms: 3,
      area: 2800,
      description: "Escape to tranquility in this charming riverside home. With a spacious backyard, private dock, and rustic interior, it's the perfect blend of comfort and nature.",
      features: ["Waterfront", "Private Dock", "Fireplace", "Large Backyard", "Hardwood Floors"],
      images: [
          "/img/project1.jpg",
          "/img/project2.jpg",
          "/img/project3.jpg",
          "/img/project4.jpg",
          "/img/project5.jpg",
          "/img/project6.jpg",
          "/img/project7.jpg",
          "/img/project8.jpg",
          "/img/project9.jpg",
      ],
      videoTour: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      view360: "https://momento360.com/e/u/9303cb7c912a47c4b1a32d0d3b6f72a7?utm_campaign=embed&utm_source=other&heading=0&pitch=0&field-of-view=75&size=medium",
      agent: {
          name: "Sarah Lee",
          phone: "+1 (555) 246-8135",
          email: "sarah.lee@unitechholdings.com",
          image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=688&q=80",
      },
      
      details :  [
          {
            icon: "📍",
            label: "Address",
            value: "Plot # 17/A, Road # 126, Gulshan"
          },
          {
            icon: "📏",
            label: "Land Area",
            value: "6.43 Katha"
          },
          {
            icon: "🏢",
            label: "No. of Floors",
            value: "G + 9"
          },
          {
            icon: "🏠",
            label: "Apartment/Floor",
            value: "1"
          },
          {
            icon: "📐",
            label: "Apartment Size",
            value: "3000+ sft"
          }
        ],
         iframeSrc : 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3653.8726079100343!2d90.49742627116395!3d23.680513306609488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755b737e6878c79%3A0x6c3461f0b276ea3b!2sJannatul%20Ferdaous%20Jame%20Mosque!5e0!3m2!1sbn!2sbd!4v1731652540127!5m2!1sbn!2sbd'
  }]);
    const [filter, setFilter] = useState("ongoing")
    const [recentlyViewed, setRecentlyViewed] = useState(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('recentlyViewed')
            return saved ? JSON.parse(saved) : []
        }
    })
 
    useEffect(()=>{
      setFilteredProperties( properties.filter(property => {
        return property?.status ===filter;
    }))
    },[properties,filter])

    const addToRecentlyViewed = (propertyId) => {
        setRecentlyViewed((prev) => {
            // Avoid re-render loops by checking if the item is already at the top
            if (prev[0] === propertyId) return prev;

            const updated = [propertyId, ...prev.filter((id) => id !== propertyId)].slice(0, 4);
            localStorage.setItem('recentlyViewed', JSON.stringify(updated));
            return updated;
        });
    };
    async function fetchProjects() {
      try {
          // Make the API request
          const response = await fetch('http://localhost:8000/api/project', {
              method: 'GET', // Change method if needed (POST, PUT, etc.)
              headers: {
                  'Content-Type': 'application/json', // Set headers if required
                  'Authorization': 'Bearer YOUR_ACCESS_TOKEN', // Include token if needed
              },
          });
  
          // Check if the response is successful
          if (!response.ok) {
              throw new Error(`Error: ${response.status} - ${response.statusText}`);
          }
  
          // Parse JSON response
          const projects = await response.json(); 
          console.log(projects.data);
          setOngoingProperties(projects.data.filter((project)=>{return project.status ==='ongoing'}))
          setProperties(projects.data)
          return projects;
      } catch (error) {
          console.error('Failed to fetch projects:', error.message);
          return null;
      }
  }
  

    useEffect(() => {
        const storedRecentlyViewed = JSON.parse(localStorage.getItem('recentlyViewed') || '[]')
        setRecentlyViewed(storedRecentlyViewed)
    }, [])
    useEffect(()=>{
      fetchProjects()
    },[])
    return (
        <PropertyContext.Provider value={{
            properties,
            filteredProperties,
            filter,
            setFilter,
            recentlyViewed,
            addToRecentlyViewed,
            ongoingProperties,
            setProperties, 
        }}>
            {children}
        </PropertyContext.Provider>
    )
}