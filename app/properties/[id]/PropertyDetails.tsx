"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import ImageSlider from './ImageSlider'
import LocationMap from './LocationMap';
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon,
  CalculatorIcon,
  ShareIcon,
  BookmarkIcon,
} from "@heroicons/react/24/solid";
import { usePropertyContext } from "@/app/contexts/PropertyContext";
import AnimatedImageLightbox  from './ImageWithLightBox'
import HorizontalImageSlider from './HorizontalImageSlider'
import PropertyInfo from './PropertyInfo' 
export default function PropertyDetails({ property }) {
  const { recentlyViewed, addToRecentlyViewed, properties } = usePropertyContext();
  // const [activeTab, setActiveTab] = useState('photos')

  useEffect(() => {
    addToRecentlyViewed(property.id);
  }, [property.id, addToRecentlyViewed]);
 
  function convertToTitleCase(str) {
    return str
      .split('-') // Split the string by hyphens
      .map(word => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize each word
      .join(' '); // Join the words with spaces
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Thumbnail image */}
      <AnimatedImageLightbox  property={property}/>
      {/* Property Details */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mb-8">
        <div className="col-span-2 mt-4">
          <div className="ml-2">
            <h1 className="text-4xl font-bold mb-4 text-gray-800 dark:text-white">{property.name}</h1>
            <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{property.address}</p>
          </div>

          <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
            <p className="text-gray-700 dark:text-gray-300 mb-4">{property.description}</p>
            <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Status</h3>
            <p>{convertToTitleCase(property.status)}</p>
            {property.features && (
              <>
                <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white mt-4">Features</h3>
                <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
                  {property.features.map((feature, index) => (
                    <li key={index}>{feature}</li>
                  ))}
                </ul>
              </>
            )}
          </div>
          
        </div>
        <PropertyInfo className="lg:mt-24 mt-8" propertyDetails={property.details} />
      </div>
   
      <h3 className="text-2xl font-bold m-4 text-gray-800 dark:text-white text-center">Map</h3>
      <LocationMap src={property.iframe} />
      <h3 className="text-2xl font-bold m-4 text-gray-800 dark:text-white text-center">Feature Images</h3>
      {/* Media Tabs */} 
      <ImageSlider images={property.images} />

     {/* Floor planes */}

     {property.plans && (
        <>
     <h3 className="text-2xl font-bold m-4 text-gray-800 dark:text-white  text-center">Plans</h3>
     
     <HorizontalImageSlider images={property.plans}/>
        </>
     )}

      {/* Action Buttons */}
      <div className="flex justify-center space-x-4 mb-8">
        <button className="flex items-center bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          <ShareIcon className="h-5 w-5 mr-2" /> Share
        </button>
        <button className="flex items-center bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300">
          <BookmarkIcon className="h-5 w-5 mr-2" /> Download Info
        </button>
        <button className="flex items-center bg-yellow-600 text-white px-4 py-2 rounded hover:bg-yellow-700 transition duration-300">
          <BookmarkIcon className="h-5 w-5 mr-2" /> Save
        </button>
      </div>

      {/* Recently Viewed */}
      {recentlyViewed.length > 0 && (
        <div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white">Recently Viewed</h2>
          <div className="flex space-x-4 overflow-x-auto pb-4">
            {recentlyViewed.map((id) => {

              const recentProperty = properties.find((p) => p?.id === id);

              if (!recentProperty) return null;
              return (
                <div
                  key={id}
                  className="flex-shrink-0 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
                >
                  <Image
                    src={recentProperty.image}
                    alt={recentProperty.name}
                    width={256}
                    height={160}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold mb-2 text-gray-800 dark:text-white">{recentProperty.name}</h3>
                    <Link href={`/properties/${id}`} className="text-blue-600 hover:underline">
                      View Details
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
