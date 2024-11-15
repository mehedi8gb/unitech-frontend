"use client";

import { useEffect, useState } from "react";
import { PlusCircle, Router, Trash2, Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"; 
import Image from "next/image";
import PropertyDetails from "@/app/properties/[id]/PropertyDetails";
import { usePropertyContext } from "@/app/contexts/PropertyContext";
import { useRouter } from "next/navigation";

export default function RealEstateManagementDashboard() {
  const [project, setProject] = useState({
    name: "",
    description: "",
    location: "",
    address: "",
    price: "",
    image: "",
    images: [],
    features: [],
    videoTour: "",
    view360: "",
    floors: "",
    plans : [],
    iframe : "",
    status : "coming-soon",
    details : [
        
      ]
  });
  const [address,setAddress] = useState("");
  const [landArea,setLandArea] = useState("");
  const [noOfFloors,setNoOfFloors] = useState("");
  const [apartment,setApartment] = useState("");
  const [apartmentSize,setApertmentSize] = useState("");
  const {setProperties} = usePropertyContext();
  const router = useRouter()
  useEffect(()=>{
    setProject((prev)=>{
        return {...prev , details : [
            {
                icon: "📍",
                label: "Address",
                name : "address",
                value: address
              },
              {
                icon: "📏",
                label: "Land Area",
                name : "landArea",
                value: landArea
              },
              {
                icon: "🏢",
                label: "No. of Floors",
                name : "noOfFloors",
                value: noOfFloors
              },
              {
                icon: "🏠",
                label: "Apartment/Floor",
                name : "floors",
                value: apartment
              },
              {
                icon: "📐",
                label: "Apartment Size",
                name : "apartmentSize",
                value: apartmentSize
              }
        ]}
    })
  },[address,landArea,noOfFloors,apartment,apartmentSize])
   
  const property = {...project,
    id : Math.floor(Math.random()*100000),
     images : [ ...project.images.map((image)=>{return image.src})  ] ,
     plans : [ ...project.plans.map((image)=>{return image.src})  ],
     iframeSrc : project.iframe.match( /src="([^"]+)"/)? project.iframe.match( /src="([^"]+)"/)[1]:""
    } 
  
  const handleProjectChange = (e) => {
    const { name, value } = e.target;
    setProject((prev) => ({ ...prev, [name]: value }));
  }; 
  const handleFeatureChange = (index, value) => {
    setProject((prev) => {
      const newFeatures = [...prev.features];
      newFeatures[index] = value;
      return { ...prev, features: newFeatures };
    });
  };
  const addFeature = () => {
    setProject((prev) => {
      const newFeatures = [...prev.features, ""];
      return { ...prev, features: newFeatures };
    });
  };
  const handleProjectDetailsChange = (name,value)=>{ 
        // Add the image URL to the images array
        setProject((prev) => {
          const newDetails =  prev.details.map((el)=> 
          (el.name !==name)? el :{...el, value : value}
         )
          return { ...prev, details: newDetails };
        });
  }
  const handleAddImage = () => {
    // Trigger the file input click event programmatically
    document.getElementById("imageInput").click();
  };
  const handleAddPlanImage = () => {
    // Trigger the file input click event programmatically
    document.getElementById("planImageInput").click();
  };
  // Function to handle the image selection
  const handleImageSelect = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = { src: reader.result, name: file.name }; // URL of the selected image

        // Add the image URL to the images array
        setProject((prev) => {
          const newImages = [...prev.images, imageUrl];
          return { ...prev, images: newImages };
        });
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const handlePlanImageSelect = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl = { src: reader.result, name: file.name }; // URL of the selected image

        // Add the image URL to the images array
        setProject((prev) => {
          const newImages = [...prev.plans, imageUrl];
          return { ...prev, plans: newImages };
        });
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const handleProjectImage = (event) => {
    const file = event.target.files[0]; // Get the selected file
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const imageUrl =  reader.result.toString()   ; // URL of the selected image

        // Add the image URL to the images array
         
        setProject((prev) => ({
            ...prev,
            image: imageUrl,
          }));
      };
      reader.readAsDataURL(file); // Read the file as a data URL
    }
  };
  const handleStatusChange = (e) => {
    setProject((prev) => ({
      ...prev,
      status: e.target.value,
    }));
  };
  function shortenFileName(fileName, maxLength = 20) {
    if (!fileName) return "";
    // Check if the file name is longer than the max length
    if (fileName?.length <= maxLength) {
      return fileName;
    }

    // Split the filename into the first and last parts
    const firstPart = fileName.slice(0, 10); // Keep the first 10 characters
    const lastPart = fileName.slice(-10); // Keep the last 10 characters

    // Combine the first part, '...', and the last part
    return `${firstPart}...${lastPart}`;
  }

  const removeImage = (index) => {
    setProject((prev) => {
      const newImages = [...prev.images].filter((el, idx) => {
        return index !== idx;
      });
      console.log(newImages);

      return { ...prev, images: newImages };
    });
  };
  const removePlanImage =(index)=>{
    setProject((prev) => {
        const newImages = [...prev.plans].filter((el, idx) => {
          return index !== idx;
        });
        console.log(newImages);
  
        return { ...prev, plans: newImages };
      });
    };
   
  const removeFeature = (index) => {
    setProject((prev) => {
      const newFeatures = [...prev.features].filter((el, idx) => {
        return index !== idx;
      });

      return { ...prev, features: newFeatures };
    });
  };
 
  const handleSubmit = (e) => {
    e.preventDefault();
    saveProject()
  };
  const saveProject =()=>{
    setProperties(prev=>([...prev,property]))
    router.push('/dashboard/projects')
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Real Estate Management Dashboard</h1>
      <form onSubmit={handleSubmit} className="space-y-8">
        <Tabs defaultValue="project" className="w-full">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="project">Project Info</TabsTrigger> 
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
                    <Input id="name" name="name" value={project.name} onChange={handleProjectChange} required />
                  </div>
                  <div>
                    <Label htmlFor="name">Image</Label>
                    <Input
                      id="image"
                      name="image" 
                      accept="image/*"
                      onChange={handleProjectImage}
                      type="file"
                      required
                    />
                  </div>
                  <div>
                  <div>
                <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                    Project Status
                </label>
                <select
                    id="status"
                    name="status"
                    value={project.status}
                    onChange={handleStatusChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                >
                    <option value="" disabled>
                    Select Status
                    </option>
                    <option value="coming-soon">Coming Soon</option>
                    <option value="ready-to-move-in">Ready to Move In</option>
                    <option value="ongoing">Ongoing</option>
                </select>
                </div>
                  </div>
                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="address"
                      name="address"
                      value={project.address}
                      onChange={handleProjectChange}
                      required
                    />
                  </div>
                  <div>
                  <Label htmlFor="address">Address</Label>
                  <Input id="address" name="address" value={address}  onChange={(e)=>{ setAddress(e.target.value)}} required />
                </div>

                <div>
                  <Label htmlFor="landArea">Land Area</Label>
                  <Input
                    id="landArea"
                    name="landArea"
                    value={landArea}
                    onChange={(e)=>{ setLandArea(e.target.value)}}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="floors">No. of Floors</Label>
                  <Input
                    id="floors"
                    name="floors"
                    value={noOfFloors}
                    onChange={(e)=>{ setNoOfFloors(e.target.value)}}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="apartmentFloor">Apartment/Floor</Label>
                  <Input
                    id="apartmentFloor"
                    name="apartmentFloor"
                    value={apartment}
                    onChange={(e)=>{ setApartment(e.target.value)}}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="apartmentSize">Apartment Size (sqft)</Label>
                  <Input
                    id="apartmentSize"
                    name="apartmentSize"
                    value={apartmentSize}
                    onChange={(e)=>{ setApertmentSize(e.target.value)}}
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
                  <Label htmlFor="features">Features</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.features.length > 0 &&
                      project.features.map((feature, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="text"
                            value={feature}
                            placeholder={`Feature ${index + 1}`}
                            onChange={(e) => handleFeatureChange(index, e.target.value)}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              removeFeature(index);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>
                  {/* Button to add new image */}
                  <Button type="button" onClick={addFeature} className="mt-4">
                    Add Feature
                  </Button>
                </div>
                <div>
                  <Label>Featured Images</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.images.length > 0 &&
                      project.images.map((image, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="text"
                            value={shortenFileName(image.name)}
                            readOnly
                            placeholder={`Image URL ${index + 1}`}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              removeImage(index);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>

                  {/* Button to add new image */}
                  <Button type="button" onClick={handleAddImage} className="mt-4">
                    Add Image
                  </Button>
                  <input
                    type="file"
                    id="imageInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handleImageSelect}
                  />
                </div>
                <div>
                  <Label>Plan Images</Label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {project.plans.length > 0 &&
                      project.plans.map((image, index) => (
                        <div key={index} className="flex items-center space-x-2">
                          <Input
                            type="text"
                            value={shortenFileName(image.name)}
                            readOnly
                            placeholder={`Image URL ${index + 1}`}
                          />
                          <Button
                            type="button"
                            variant="outline"
                            size="icon"
                            onClick={() => {
                              removePlanImage(index);
                            }}
                          >
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      ))}
                  </div>

                  {/* Button to add new image */}
                  <Button type="button" onClick={handleAddPlanImage} className="mt-4">
                    Add Image
                  </Button>
                  <input
                    type="file"
                    id="planImageInput"
                    accept="image/*"
                    style={{ display: "none" }}
                    onChange={handlePlanImageSelect}
                  />
                </div>
                <div>
                    <Label htmlFor="iframe">Google Map Iframe Embed Link</Label>
                    <Input id="iframe" name="iframe" value={project.iframe} onChange={handleProjectChange} required />
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
                  <PropertyDetails property={property}  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
        <div className="flex justify-end">
          <Button type="submit"  >Save Project</Button>
        </div>
      </form>
    </div>
  );
}
