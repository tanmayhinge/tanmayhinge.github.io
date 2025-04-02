"use client"

import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Pagination, Autoplay } from "swiper/modules"
import "swiper/css"
import "swiper/css/pagination"
import "swiper/css/autoplay"

const projectImages = [
  { src: "/placeholder.svg?height=400&width=600", alt: "Web Design Project" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Web Development Project" },
  { src: "/placeholder.svg?height=400&width=600", alt: "Branding Project" },
]

export default function MainSection() {
  return (
    <section id="main" className="pt-24 sm:pt-32 pl-4 sm:pl-6 pr-8 sm:pr-16 md:pr-24">
      <div className="max-w-7xl mx-auto">
        {/* Project Images Grid/Slider */}
        <div id="picture-slider" className="mb-8 sm:mb-16 mx-auto max-w-5xl">
          {/* Mobile Slider */}
          <div className="sm:hidden">
            <Swiper
              modules={[Pagination, Autoplay]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
              autoplay={{ delay: 3000, disableOnInteraction: false }}
              loop={true}
              centeredSlides={true}
              className="w-full"
            >
              {projectImages.map((image, index) => (
                <SwiperSlide key={index}>
                  <div className="aspect-[4/3] relative bg-gray-900 bg-opacity-50 rounded-lg overflow-hidden">
                    <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          {/* Desktop/Tablet Grid */}
          <div className="hidden sm:grid sm:grid-cols-3 gap-4 justify-items-center">
            {projectImages.map((image, index) => (
              <div
                key={index}
                className="aspect-[4/3] relative bg-gray-900 bg-opacity-50 w-full rounded-lg overflow-hidden"
              >
                <Image src={image.src || "/placeholder.svg"} alt={image.alt} fill className="object-cover" />
              </div>
            ))}
          </div>
        </div>

        {/* Hero Section */}
        <div className="mb-16 sm:mb-32 ml-0 relative">
          <div className="text-sm mb-4 px-3 py-1 rounded">(HELLO, I'M TANMAY HINGE)</div>
          <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold mb-6 sm:mb-8 text-orange-500 text-shadow-lg">
            CREATIVE <span className="font-serif italic font-normal">software</span>
            <br className="hidden sm:block" /> DEVELOPER
          </h1>
          <div className="flex flex-col sm:flex-row justify-between items-start gap-6 sm:gap-0">
            <p className="max-w-md text-white p-4">
            I don’t just write code — I sculpt experiences.

            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

