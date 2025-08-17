import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Eye, Download, ZoomIn } from 'lucide-react'

const galleryCategories = [
  { id: 'all', name: 'All Work' },
  { id: 'emergency', name: 'Emergency Repairs' },
  { id: 'installation', name: 'Installations' },
  { id: 'renovation', name: 'Renovations' },
  { id: 'commercial', name: 'Commercial' }
]

const galleryItems = [
  {
    id: 1,
    category: 'emergency',
    title: 'Burst Pipe Repair',
    description: 'Emergency repair of a burst water line',
    image: 'https://images.unsplash.com/photo-1581094271901-8022df4466f9?w=500&h=300&fit=crop&crop=center',
    date: 'March 2024'
  },
  {
    id: 2,
    category: 'installation',
    title: 'Water Heater Installation',
    description: 'New tankless water heater installation',
    image: 'https://images.unsplash.com/photo-1620712943543-bc4638e3efb6?w=500&h=300&fit=crop&crop=center',
    date: 'February 2024'
  },
  {
    id: 3,
    category: 'renovation',
    title: 'Bathroom Remodel',
    description: 'Complete bathroom plumbing renovation',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop&crop=center',
    date: 'January 2024'
  },
  {
    id: 4,
    category: 'emergency',
    title: 'Leak Detection',
    description: 'Advanced leak detection service',
    image: 'https://images.unsplash.com/photo-1620712943543-bc4638e3efb6?w=500&h=300&fit=crop&crop=center',
    date: 'December 2023'
  },
  {
    id: 5,
    category: 'commercial',
    title: 'Commercial Plumbing',
    description: 'Commercial kitchen installation',
    image: 'https://images.unsplash.com/photo-1620712943543-bc4638e3efb6?w=500&h=300&fit=crop&crop=center',
    date: 'November 2023'
  },
  {
    id: 6,
    category: 'installation',
    title: 'Fixture Installation',
    description: 'New bathroom fixtures installation',
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&h=300&fit=crop&crop=center',
    date: 'October 2023'
  },
  {
    id: 7,
    category: 'renovation',
    title: 'Kitchen Renovation',
    description: 'Complete kitchen plumbing renovation',
    image: 'https://images.unsplash.com/photo-1556911222-b189b8c64b43?w=500&h=300&fit=crop&crop=center',
    date: 'September 2023'
  },
  {
    id: 8,
    category: 'commercial',
    title: 'Office Building',
    description: 'Commercial office plumbing system',
    image: 'https://images.unsplash.com/photo-1497366216548-3bcf523f2c49?w=500&h=300&fit=crop&crop=center',
    date: 'August 2023'
  },
  {
    id: 9,
    category: 'emergency',
    title: 'Flood Cleanup',
    description: 'Emergency flood damage cleanup',
    image: 'https://images.unsplash.com/photo-1620712943543-bc4638e3efb6?w=500&h-300&fit=crop&crop=center',
    date: 'July 2023'
  },
  {
    id: 10,
    category: 'installation',
    title: 'Pipe Replacement',
    description: 'Whole house pipe replacement',
    image: 'https://images.unsplash.com/photo-1620712943543-bc4638e3efb6?w=500&h=300&fit=crop&crop=center',
    date: 'June 2023'
  },
  {
    id: 11,
    category: 'renovation',
    title: 'Laundry Room',
    description: 'Laundry room plumbing renovation',
    image: 'https://images.unsplash.com/photo-1556911222-b189b8c64b43?w=500&h=300&fit=crop&crop=center',
    date: 'May 2023'
  },
  {
    id: 12,
    category: 'commercial',
    title: 'Restaurant Plumbing',
    description: 'Commercial restaurant kitchen setup',
    image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&h=300&fit=crop&crop=center',
    date: 'April 2023'
  }
]

export default function GalleryPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-blue-100 py-20">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Work Gallery
            </h1>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Browse through our portfolio of completed projects. From emergency repairs to complete renovations, see the quality of our work firsthand.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {galleryCategories.map((category) => (
              <Button
                key={category.id}
                variant={category.id === 'all' ? 'default' : 'outline'}
                className="hover:bg-blue-600 hover:text-white"
              >
                {category.name}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryItems.map((item) => (
              <Card key={item.id} className="group overflow-hidden hover:shadow-lg transition-shadow">
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-opacity duration-300 flex items-center justify-center">
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                      <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                        <Eye className="h-4 w-4" />
                      </Button>
                      <Button size="sm" variant="secondary" className="bg-white text-gray-900 hover:bg-gray-100">
                        <ZoomIn className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
                <CardContent className="p-4">
                  <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{item.description}</p>
                  <div className="flex items-center justify-between text-xs text-gray-500">
                    <span>{item.date}</span>
                    <span className="capitalize">{item.category}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Project
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              A showcase of our most comprehensive work
            </p>
          </div>

          <Card className="overflow-hidden">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="relative aspect-video">
                <img
                  src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=800&h=600&fit=crop&crop=center"
                  alt="Complete Bathroom Renovation"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-8 flex flex-col justify-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Complete Bathroom Renovation
                </h3>
                <p className="text-gray-700 mb-6">
                  This complete bathroom renovation showcases our expertise in plumbing design and installation. We worked closely with the homeowners to create their dream bathroom, featuring:
                </p>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    Luxury shower system with multiple shower heads
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    Freestanding tub with floor-mounted faucet
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    Dual vanity with custom plumbing
                  </li>
                  <li className="flex items-center text-gray-700">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 flex-shrink-0" />
                    Heated floors and towel warmer
                  </li>
                </ul>
                <Button className="bg-blue-600 hover:bg-blue-700" asChild>
                  <a href="/contact">
                    Get a Similar Quote
                  </a>
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="container mx-auto px-4">
          <div className="text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Start Your Project?
            </h2>
            <p className="text-lg mb-8 max-w-2xl mx-auto">
              Let us bring your vision to life. Contact us today for a free consultation and quote.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="/contact">
                  Get Free Quote
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600" asChild>
                <a href="tel:+1-555-0123">
                  Call Now
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}