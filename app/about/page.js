import Image from 'next/image'
export const metadata ={
    title : "About | Unitech Holdings LTD"
}

export default function About() {
    return (
        <div className="container mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8 text-gray-800 dark:text-white">About Unitech Holdings Ltd</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div>
                    <Image src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1073&q=80" alt="Unitech Holdings Ltd Office" width={600} height={400} className="rounded-lg shadow-lg" />
                </div>
                <div>
                    <h2 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white">Our Story</h2>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                        Founded in 1988, Unitech Holdings Ltd has been at the forefront of the real estate industry in Bangladesh for over three decades. Our journey began with a vision to transform urban living and create spaces that inspire and elevate the quality of life for our residents.
                    </p>
                    <p className="text-xl text-gray-600 dark:text-gray-300 mb-4">
                        Over the years, we have successfully delivered more than 3,500 units, each a testament to our commitment to quality, innovation, and customer satisfaction. Our projects span across prime locations in Dhaka, offering a perfect blend of luxury, comfort, and convenience.
                    </p>
                    <p className="text-xl text-gray-600 dark:text-gray-300">
                        At Unitech Holdings Ltd, we don&#39;t just build homes; we create communities. Our dedication to excellence has earned us the trust of thousands of homeowners and numerous accolades in the industry.
                    </p>
                </div>
            </div>

            <div className="mt-16">
                <h2 className="text-3xl font-semibold mb-8 text-gray-800 dark:text-white">Our Values</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {[
                        { title: "Quality", description: "We never compromise on the quality of our constructions, using only the finest materials and latest technologies." },
                        { title: "Innovation", description: "We constantly strive to innovate and bring new ideas to our projects, setting new standards in the industry." },
                        { title: "Customer-Centric", description: "Our customers are at the heart of everything we do. We aim to exceed their expectations at every step." },
                        { title: "Sustainability", description: "We are committed to sustainable development, incorporating eco-friendly practices in our projects." },
                        { title: "Integrity", description: "We conduct our business with the highest level of integrity and transparency." },
                        { title: "Community", description: "We believe in creating not just homes, but thriving communities that enrich the lives of our residents." },
                    ].map((value, index) => (
                        <div key={index} className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h3 className="text-2xl font-semibold mb-2 text-gray-800 dark:text-white">{value.title}</h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300">{value.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}