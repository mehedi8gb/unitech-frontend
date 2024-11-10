'use client'

import { useState } from 'react'
import { PlusCircle, Trash2 } from 'lucide-react'

export default function ProjectCreation() {
    const [project, setProject] = useState({
        name: '',
        description: '',
        location: '',
        images: [''],
        floors: [
            {
                floorNumber: 1,
                description: '',
                units: [
                    {
                        unitNumber: '',
                        size: 0,
                        price: 0,
                        status: 'Available',
                        images: [''],
                        bookingStatus: {
                            statusName: 'Available',
                            colorCode: '#00FF00'
                        }
                    }
                ]
            }
        ]
    })

    const handleProjectChange = (e) => {
        const { name, value } = e.target
        setProject(prev => ({ ...prev, [name]: value }))
    }

    const handleImageChange = (index, value) => {
        setProject(prev => {
            const newImages = [...prev.images]
            newImages[index] = value
            return { ...prev, images: newImages }
        })
    }

    const addImage = () => {
        setProject(prev => ({ ...prev, images: [...prev.images, ''] }))
    }

    const removeImage = (index) => {
        setProject(prev => {
            const newImages = prev.images.filter((_, i) => i !== index)
            return { ...prev, images: newImages }
        })
    }

    const handleFloorChange = (floorIndex, e) => {
        const { name, value } = e.target
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex] = { ...newFloors[floorIndex], [name]: value }
            return { ...prev, floors: newFloors }
        })
    }

    const addFloor = () => {
        setProject(prev => ({
            ...prev,
            floors: [
                ...prev.floors,
                {
                    floorNumber: prev.floors.length + 1,
                    description: '',
                    units: []
                }
            ]
        }))
    }

    const handleUnitChange = (floorIndex, unitIndex, e) => {
        const { name, value } = e.target
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex].units[unitIndex] = {
                ...newFloors[floorIndex].units[unitIndex],
                [name]: name === 'size' || name === 'price' ? parseFloat(value) : value
            }
            return { ...prev, floors: newFloors }
        })
    }

    const addUnit = (floorIndex) => {
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex].units.push({
                unitNumber: '',
                size: 0,
                price: 0,
                status: 'Available',
                images: [''],
                bookingStatus: {
                    statusName: 'Available',
                    colorCode: '#00FF00'
                }
            })
            return { ...prev, floors: newFloors }
        })
    }

    const handleUnitImageChange = (floorIndex, unitIndex, imageIndex, value) => {
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex].units[unitIndex].images[imageIndex] = value
            return { ...prev, floors: newFloors }
        })
    }

    const addUnitImage = (floorIndex, unitIndex) => {
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex].units[unitIndex].images.push('')
            return { ...prev, floors: newFloors }
        })
    }

    const removeUnitImage = (floorIndex, unitIndex, imageIndex) => {
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex].units[unitIndex].images = newFloors[floorIndex].units[unitIndex].images.filter((_, i) => i !== imageIndex)
            return { ...prev, floors: newFloors }
        })
    }

    const handleBookingStatusChange = (floorIndex, unitIndex, e) => {
        const { name, value } = e.target
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex].units[unitIndex].bookingStatus = {
                ...newFloors[floorIndex].units[unitIndex].bookingStatus,
                [name]: value
            }
            return { ...prev, floors: newFloors }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Project data:', project)
        // Here you would typically send the data to your backend
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Create New Project</h1>
            <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Project Name</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={project.name}
                        onChange={handleProjectChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Description</label>
                    <textarea
                        id="description"
                        name="description"
                        value={project.description}
                        onChange={handleProjectChange}
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    ></textarea>
                </div>

                <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 dark:text-gray-300">Location</label>
                    <input
                        type="text"
                        id="location"
                        name="location"
                        value={project.location}
                        onChange={handleProjectChange}
                        required
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Project Images</label>
                    {project.images.map((image, index) => (
                        <div key={index} className="flex items-center mb-2">
                            <input
                                type="text"
                                value={image}
                                onChange={(e) => handleImageChange(index, e.target.value)}
                                placeholder="Image URL"
                                className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            />
                            <button
                                type="button"
                                onClick={() => removeImage(index)}
                                className="ml-2 p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                            >
                                <Trash2 className="h-5 w-5" />
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addImage}
                        className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <PlusCircle className="h-5 w-5 mr-2" />
                        Add Image
                    </button>
                </div>

                <div>
                    <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">Floor Plans</h2>
                    {project.floors.map((floor, floorIndex) => (
                        <div key={floorIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                            <h3 className="text-lg font-medium mb-2 text-gray-900 dark:text-white">Floor {floor.floorNumber}</h3>
                            <div className="mb-4">
                                <label htmlFor={`floor-${floorIndex}-description`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Floor Description</label>
                                <input
                                    type="text"
                                    id={`floor-${floorIndex}-description`}
                                    name="description"
                                    value={floor.description}
                                    onChange={(e) => handleFloorChange(floorIndex, e)}
                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                />
                            </div>

                            <h4 className="text-md font-medium mb-2 text-gray-900 dark:text-white">Units</h4>
                            {floor.units.map((unit, unitIndex) => (
                                <div key={unitIndex} className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 mb-4">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        <div>
                                            <label htmlFor={`unit-${floorIndex}-${unitIndex}-number`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Unit Number</label>
                                            <input
                                                type="text"
                                                id={`unit-${floorIndex}-${unitIndex}-number`}
                                                name="unitNumber"
                                                value={unit.unitNumber}
                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor={`unit-${floorIndex}-${unitIndex}-size`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Size (sq ft)</label>
                                            <input
                                                type="number"
                                                id={`unit-${floorIndex}-${unitIndex}-size`}
                                                name="size"
                                                value={unit.size}
                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor={`unit-${floorIndex}-${unitIndex}-price`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Price ($)</label>
                                            <input
                                                type="number"
                                                id={`unit-${floorIndex}-${unitIndex}-price`}
                                                name="price"
                                                value={unit.price}
                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor={`unit-${floorIndex}-${unitIndex}-status`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status</label>
                                            <select
                                                id={`unit-${floorIndex}-${unitIndex}-status`}
                                                name="status"
                                                value={unit.status}
                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                            >
                                                <option value="Available">Available</option>
                                                <option value="Reserved">Reserved</option>
                                                <option value="Booked">Booked</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="mt-4">
                                        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Unit Images</label>
                                        {unit.images.map((image, imageIndex) => (
                                            <div key={imageIndex} className="flex items-center mb-2">
                                                <input
                                                    type="text"
                                                    value={image}
                                                    onChange={(e) => handleUnitImageChange(floorIndex, unitIndex, imageIndex, e.target.value)}
                                                    placeholder="Image URL"
                                                    className="flex-grow rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                />
                                                <button
                                                    type="button"
                                                    onClick={() => removeUnitImage(floorIndex, unitIndex, imageIndex)}
                                                    className="ml-2 p-2 text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300"
                                                >
                                                    <Trash2 className="h-5 w-5" />
                                                </button>
                                            </div>
                                        ))}
                                        <button
                                            type="button"
                                            onClick={() => addUnitImage(floorIndex, unitIndex)}
                                            className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                        >
                                            <PlusCircle className="h-5 w-5 mr-2" />
                                            Add Unit Image
                                        </button>
                                    </div>

                                    <div className="mt-4">
                                        <h5 className="text-sm font-medium mb-2 text-gray-900 dark:text-white">Booking Status</h5>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor={`unit-${floorIndex}-${unitIndex}-booking-status`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Status Name</label>
                                                <input
                                                    type="text"
                                                    id={`unit-${floorIndex}-${unitIndex}-booking-status`}
                                                    name="statusName"
                                                    value={unit.bookingStatus.statusName}
                                                    onChange={(e) => handleBookingStatusChange(floorIndex, unitIndex, e)}
                                                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor={`unit-${floorIndex}-${unitIndex}-color-code`} className="block text-sm font-medium text-gray-700 dark:text-gray-300">Color Code</label>
                                                <input
                                                    type="color"
                                                    id={`unit-${floorIndex}-${unitIndex}-color-code`}
                                                    name="colorCode"
                                                    value={unit.bookingStatus.colorCode}
                                                    onChange={(e) => handleBookingStatusChange(floorIndex, unitIndex, e)}
                                                    className="mt-1 block w-full h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            <button
                                type="button"
                                onClick={() => addUnit(floorIndex)}
                                className="mt-2 inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                <PlusCircle className="h-5 w-5 mr-2" />
                                Add Unit
                            </button>
                        </div>
                    ))}
                    <button
                        type="button"
                        onClick={addFloor}
                        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        <PlusCircle className="h-5 w-5 mr-2" />
                        Add Floor
                    </button>
                </div>

                <div className="pt-5">
                    <div className="flex justify-end">
                        <button
                            type="submit"
                            className="ml-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            Create Project
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}