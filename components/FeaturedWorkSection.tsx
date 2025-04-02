import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

export default function FeaturedWorkSection() {
  return (
    <section id="featured-work" className="px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              FEATURED
              <br />
              WORK
            </h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">
                From nationwide mobile apps to high-traffic websites and e-commerce platforms, my portfolio showcases a
                blend of innovation and technical expertise.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Let's create <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Project Categories */}
          {[
            {
              title: "WEB DESIGN",
              number: "01",
              description: "Creating engaging digital experiences that captivate and convert",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/featured-work-NnKV456M3xYtzxAXoDe9yZ1pG0q3oM.webp",
            },
            {
              title: "WEB DEVELOPMENT",
              number: "02",
              description: "Building scalable, high-performance websites and applications",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/casai-UfUulLmLkNIJpj08jTCGCKJXW1DfIX.webp",
            },
            {
              title: "BRANDING",
              number: "03",
              description: "Crafting unique brand identities that resonate with your audience",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202025-01-20%20at%2016.59.01-ibCB67QY10et58WW1RgWTpbuaUJdTl.jpeg",
            },
          ].map((category, index) => (
            <div
              key={index}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-8 sm:py-12 border-t border-gray-800"
            >
              <div className="space-y-4 mb-4 sm:mb-0">
                <div className="flex items-baseline gap-4">
                  <h3 className="text-2xl sm:text-4xl font-bold">{category.title}</h3>
                  <span className="text-sm text-gray-400">({category.number})</span>
                </div>
                <p className="text-gray-400">{category.description}</p>
              </div>
              <div className="flex items-center gap-4 sm:gap-8">
                <div className="hidden md:block relative w-48 h-32 bg-gray-900">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <Link href="#" className="inline-flex items-center gap-2 hover:text-gray-300">
                  View projects <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Our Service Expertise */}
        <div className="mb-16 sm:mb-32">
          <div className="flex flex-col sm:flex-row justify-between items-start mb-8 sm:mb-16 gap-6 sm:gap-0">
            <h2 className="text-4xl sm:text-6xl md:text-8xl font-bold">
              MY SERVICE
              <br />
              EXPERTISE
            </h2>
            <div className="max-w-md">
              <p className="text-gray-400 mb-4">
                Leveraging cutting-edge technologies and years of experience to deliver exceptional results across web
                design, development, and branding.
              </p>
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 border border-white px-4 sm:px-6 py-2 sm:py-3 hover:bg-white hover:text-black transition-colors"
              >
                Start a project <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-12">
            {[
              {
                number: "01",
                title: "WEB DESIGN",
                descriptions: [
                  "Creating intuitive user interfaces that enhance interaction.",
                  "Focusing on user needs to deliver exceptional experiences.",
                ],
              },
              {
                number: "02",
                title: "WEB DEVELOPMENT",
                descriptions: [
                  "Building scalable and maintainable web applications.",
                  "Utilizing modern frameworks like React, Next.js, and Django.",
                ],
              },
              {
                number: "03",
                title: "BRANDING",
                descriptions: [
                  "Crafting unique visual identities that stand out.",
                  "Implementing consistent branding across digital platforms.",
                ],
              },
            ].map((service, index) => (
              <div key={index} className="space-y-4">
                <span className="text-sm text-gray-400">({service.number})</span>
                <h3 className="text-2xl font-bold">{service.title}</h3>
                {service.descriptions.map((desc, i) => (
                  <p key={i} className="text-gray-400 text-sm">
                    {desc}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

