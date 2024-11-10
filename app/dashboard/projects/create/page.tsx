'use client'

import { useState } from 'react'
import { PlusCircle, Trash2, Upload, X } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function RealEstateManagementDashboard() {
    const [project, setProject] = useState({
        name: '',
        description: '',
        location: '',
        address: '',
        price: '',
        images: ['', '', ''],
        videoTour: '',
        view360: '',
        floors: [
            {
                number: 1,
                description: '',
                units: [
                    {
                        number: '',
                        size: '',
                        price: '',
                        bedrooms: '',
                        bathrooms: '',
                        features: '',
                        status: 'Available',
                        bookingStatus: {
                            name: 'Available',
                            colorCode: '#00FF00'
                        },
                        images: ['', '', '']
                    }
                ]
            }
        ],
        agent: {
            name: '',
            contactNumber: '',
            email: '',
            photo: ''
        }
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
                    number: prev.floors.length + 1,
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
                [name]: value
            }
            return { ...prev, floors: newFloors }
        })
    }

    const addUnit = (floorIndex) => {
        setProject(prev => {
            const newFloors = [...prev.floors]
            newFloors[floorIndex].units.push({
                number: '',
                size: '',
                price: '',
                bedrooms: '',
                bathrooms: '',
                features: '',
                status: 'Available',
                bookingStatus: {
                    name: 'Available',
                    colorCode: '#00FF00'
                },
                images: ['', '', '']
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

    const handleAgentChange = (e) => {
        const { name, value } = e.target
        setProject(prev => ({
            ...prev,
            agent: { ...prev.agent, [name]: value }
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('Project data:', project)
        // Here you would typically send the data to your backend
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Real Estate Management Dashboard</h1>
            <form onSubmit={handleSubmit} className="space-y-8">
                <Tabs defaultValue="project" className="w-full">
                    <TabsList className="grid w-full grid-cols-4">
                        <TabsTrigger value="project">Project Info</TabsTrigger>
                        <TabsTrigger value="floors">Floors & Units</TabsTrigger>
                        <TabsTrigger value="agent">Agent Info</TabsTrigger>
                        <TabsTrigger value="preview">Preview</TabsTrigger>
                    </TabsList>
                    <TabsContent value="project">
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Information</CardTitle>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="name">Project Name</Label>
                                        <Input
                                            id="name"
                                            name="name"
                                            value={project.name}
                                            onChange={handleProjectChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="location">Location</Label>
                                        <Input
                                            id="location"
                                            name="location"
                                            value={project.location}
                                            onChange={handleProjectChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="address">Address</Label>
                                        <Input
                                            id="address"
                                            name="address"
                                            value={project.address}
                                            onChange={handleProjectChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="price">Price</Label>
                                        <Input
                                            id="price"
                                            name="price"
                                            type="number"
                                            value={project.price}
                                            onChange={handleProjectChange}
                                            required
                                        />
                                    </div>
                                </div>
                                <div>
                                    <Label htmlFor="description">Description</Label>
                                    <Textarea
                                        id="description"
                                        name="description"
                                        value={project.description}
                                        onChange={handleProjectChange}
                                        required
                                    />
                                </div>
                                <div>
                                    <Label>Primary Images (up to 3)</Label>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {project.images.map((image, index) => (
                                            <div key={index} className="flex items-center space-x-2">
                                                <Input
                                                    type="text"
                                                    value={image}
                                                    onChange={(e) => handleImageChange(index, e.target.value)}
                                                    placeholder={`Image URL ${index + 1}`}
                                                />
                                                <Button
                                                    type="button"
                                                    variant="outline"
                                                    size="icon"
                                                    onClick={() => handleImageChange(index, '')}
                                                >
                                                    <X className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="videoTour">Video Tour (Optional)</Label>
                                        <Input
                                            id="videoTour"
                                            name="videoTour"
                                            value={project.videoTour}
                                            onChange={handleProjectChange}
                                            placeholder="Video URL"
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="view360">360° View (Optional)</Label>
                                        <Input
                                            id="view360"
                                            name="view360"
                                            value={project.view360}
                                            onChange={handleProjectChange}
                                            placeholder="360° View URL"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="floors">
                        <Card>
                            <CardHeader>
                                <CardTitle>Floors and Units</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <Accordion type="single" collapsible className="w-full">
                                    {project.floors.map((floor, floorIndex) => (
                                        <AccordionItem value={`floor-${floorIndex}`} key={floorIndex}>
                                            <AccordionTrigger>Floor {floor.number}</AccordionTrigger>
                                            <AccordionContent>
                                                <div className="space-y-4">
                                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                        <div>
                                                            <Label htmlFor={`floor-${floorIndex}-number`}>Floor Number</Label>
                                                            <Input
                                                                id={`floor-${floorIndex}-number`}
                                                                name="number"
                                                                type="number"
                                                                value={floor.number}
                                                                onChange={(e) => handleFloorChange(floorIndex, e)}
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <Label htmlFor={`floor-${floorIndex}-description`}>Floor Description</Label>
                                                            <Input
                                                                id={`floor-${floorIndex}-description`}
                                                                name="description"
                                                                value={floor.description}
                                                                onChange={(e) => handleFloorChange(floorIndex, e)}
                                                                required
                                                            />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-semibold mb-2">Units</h4>
                                                        {floor.units.map((unit, unitIndex) => (
                                                            <Card key={unitIndex} className="mb-4">
                                                                <CardHeader>
                                                                    <CardTitle>Unit {unit.number || unitIndex + 1}</CardTitle>
                                                                </CardHeader>
                                                                <CardContent>
                                                                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-number`}>Unit Number</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-number`}
                                                                                name="number"
                                                                                value={unit.number}
                                                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-size`}>Size</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-size`}
                                                                                name="size"
                                                                                type="number"
                                                                                value={unit.size}
                                                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-price`}>Price</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-price`}
                                                                                name="price"
                                                                                type="number"
                                                                                value={unit.price}
                                                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-bedrooms`}>Bedrooms</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-bedrooms`}
                                                                                name="bedrooms"
                                                                                type="number"
                                                                                value={unit.bedrooms}
                                                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-bathrooms`}>Bathrooms</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-bathrooms`}
                                                                                name="bathrooms"
                                                                                type="number"
                                                                                value={unit.bathrooms}
                                                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-features`}>Features</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-features`}
                                                                                name="features"
                                                                                value={unit.features}
                                                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-status`}>Status</Label>
                                                                            <select
                                                                                id={`unit-${floorIndex}-${unitIndex}-status`}
                                                                                name="status"
                                                                                value={unit.status}
                                                                                onChange={(e) => handleUnitChange(floorIndex, unitIndex, e)}
                                                                                className="w-full p-2 border rounded-md dark:bg-gray-800 dark:border-gray-600"
                                                                                required
                                                                            >
                                                                                <option value="Available">Available</option>
                                                                                <option value="Reserved">Reserved</option>
                                                                                <option value="Sold">Sold</option>
                                                                            </select>
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-booking-status`}>Booking Status</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-booking-status`}
                                                                                name="name"
                                                                                value={unit.bookingStatus.name}
                                                                                onChange={(e) => handleBookingStatusChange(floorIndex, unitIndex, e)}
                                                                                required
                                                                            />
                                                                        </div>
                                                                        <div>
                                                                            <Label htmlFor={`unit-${floorIndex}-${unitIndex}-color-code`}>Color Code</Label>
                                                                            <Input
                                                                                id={`unit-${floorIndex}-${unitIndex}-color-code`}
                                                                                name="colorCode"
                                                                                type="color"
                                                                                value={unit.bookingStatus.colorCode}
                                                                                onChange={(e) => handleBookingStatusChange(floorIndex, unitIndex, e)}
                                                                                className="h-10"
                                                                                required
                                                                            />
                                                                        </div>
                                                                    </div>
                                                                    <div className="mt-4">
                                                                        <Label>Unit Images (up to 3)</Label>
                                                                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                                                            {unit.images.map((image, imageIndex) => (
                                                                                <div key={imageIndex} className="flex items-center space-x-2">
                                                                                    <Input
                                                                                        type="text"
                                                                                        value={image}
                                                                                        onChange={(e) => handleUnitImageChange(floorIndex, unitIndex, imageIndex, e.target.value)}
                                                                                        placeholder={`Image URL ${imageIndex + 1}`}
                                                                                    />
                                                                                    <Button
                                                                                        type="button"
                                                                                        variant="outline"
                                                                                        size="icon"
                                                                                        onClick={() => handleUnitImageChange(floorIndex, unitIndex, imageIndex, '')}
                                                                                    >
                                                                                        <X className="h-4 w-4" />
                                                                                    </Button>
                                                                                </div>
                                                                            ))}
                                                                        </div>
                                                                    </div>
                                                                </CardContent>
                                                            </Card>
                                                        ))}
                                                        <Button type="button" onClick={() => addUnit(floorIndex)} className="mt-2">
                                                            <PlusCircle className="mr-2 h-4 w-4" /> Add Unit
                                                        </Button>
                                                    </div>
                                                </div>
                                            </AccordionContent>
                                        </AccordionItem>
                                    ))}
                                </Accordion>
                                <Button type="button" onClick={addFloor} className="mt-4">
                                    <PlusCircle className="mr-2 h-4 w-4" /> Add Floor
                                </Button>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="agent">
                        <Card>
                            <CardHeader>
                                <CardTitle>Agent Information</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <Label htmlFor="agent-name">Agent Name</Label>
                                        <Input
                                            id="agent-name"
                                            name="name"
                                            value={project.agent.name}
                                            onChange={handleAgentChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="agent-contact">Contact Number</Label>
                                        <Input
                                            id="agent-contact"
                                            name="contactNumber"
                                            value={project.agent.contactNumber}
                                            onChange={handleAgentChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="agent-email">Email</Label>
                                        <Input
                                            id="agent-email"
                                            name="email"
                                            type="email"
                                            value={project.agent.email}
                                            onChange={handleAgentChange}
                                            required
                                        />
                                    </div>
                                    <div>
                                        <Label htmlFor="agent-photo">Photo</Label>
                                        <Input
                                            id="agent-photo"
                                            name="photo"
                                            value={project.agent.photo}
                                            onChange={handleAgentChange}
                                            placeholder="Photo URL"
                                        />
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                    <TabsContent value="preview">
                        <Card>
                            <CardHeader>
                                <CardTitle>Project Preview</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <h2 className="text-2xl font-bold">{project.name}</h2>
                                    <p>{project.description}</p>
                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <strong>Location:</strong> {project.location}
                                        </div>
                                        <div>
                                            <strong>Address:</strong> {project.address}
                                        </div>
                                        <div>
                                            <strong>Price:</strong> ${project.price}
                                        </div>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                        {project.images.map((image, index) => (
                                            image && <img key={index} src={image} alt={`Project image ${index + 1}`} className="w-full h-48 object-cover rounded-lg" />
                                        ))}
                                    </div>
                                    {project.videoTour && (
                                        <div>
                                            <strong>Video Tour:</strong> <a href={project.videoTour} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View Video Tour</a>
                                        </div>
                                    )}
                                    {project.view360 && (
                                        <div>
                                            <strong>360° View:</strong> <a href={project.view360} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">View 360° Tour</a>
                                        </div>
                                    )}
                                    <h3 className="text-xl font-bold mt-6">Floors and Units</h3>
                                    {project.floors.map((floor, floorIndex) => (
                                        <div key={floorIndex} className="border-t pt-4">
                                            <h4 className="text-lg font-semibold">Floor {floor.number}</h4>
                                            <p>{floor.description}</p>
                                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
                                                {floor.units.map((unit, unitIndex) => (
                                                    <div key={unitIndex} className="border p-4 rounded-lg">
                                                        <h5 className="font-semibold">Unit {unit.number}</h5>
                                                        <p>Size: {unit.size} sqft</p>
                                                        <p>Price: ${unit.price}</p>
                                                        <p>Bedrooms: {unit.bedrooms}</p>
                                                        <p>Bathrooms: {unit.bathrooms}</p>
                                                        <p>Features: {unit.features}</p>
                                                        <p>Status: <span style={{color: unit.bookingStatus.colorCode}}>{unit.bookingStatus.name}</span></p>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                    <h3 className="text-xl font-bold mt-6">Agent Information</h3>
                                    <div className="flex items-center space-x-4">
                                        {project.agent.photo && (
                                            <img src={project.agent.photo} alt={project.agent.name} className="w-16 h-16 rounded-full object-cover" />
                                        )}
                                        <div>
                                            <p><strong>Name:</strong> {project.agent.name}</p>
                                            <p><strong>Contact:</strong> {project.agent.contactNumber}</p>
                                            <p><strong>Email:</strong> {project.agent.email}</p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </TabsContent>
                </Tabs>
                <div className="flex justify-end">
                    <Button type="submit">Save Project</Button>
                </div>
            </form>
        </div>
    )
}