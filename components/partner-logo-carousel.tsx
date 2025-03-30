"use client"

import { useState } from "react"
import Image from "next/image"

interface PartnerLogo {
  src: string
  alt: string
  width: number
  height: number
}

export function PartnerLogoCarousel() {
  const [isPaused, setIsPaused] = useState(false)

  const partnerLogos: PartnerLogo[] = [
    { src: "/images/partner-intact.png", alt: "Intact Insurance", width: 150, height: 75 },
    { src: "/images/partner-caa.png", alt: "CAA Insurance", width: 150, height: 75 },
    { src: "/images/partner-northbridge.png", alt: "Northbridge Insurance", width: 150, height: 75 },
    { src: "/images/partner-echelon.png", alt: "Echelon Insurance", width: 150, height: 75 },
    { src: "/images/partner-economical.png", alt: "Economical Insurance", width: 150, height: 75 },
    { src: "/images/partner-apollo.png", alt: "Apollo Insurance", width: 150, height: 75 },
    { src: "/images/partner-forward.png", alt: "Forward Insurance", width: 150, height: 75 },
    { src: "/images/partner-aviva.png", alt: "Aviva Insurance", width: 150, height: 75 },
    { src: "/images/partner-gore-mutual.png", alt: "Gore Mutual Insurance", width: 150, height: 75 },
    { src: "/images/partner-travelers.png", alt: "Travelers Insurance", width: 150, height: 75 },
  ]

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="flex whitespace-nowrap">
        {/* First set of logos */}
        <div className={`flex items-center space-x-8 py-4 animate-marquee ${isPaused ? "animate-paused" : ""}`}>
          {partnerLogos.map((logo, index) => (
            <div
              key={`first-${index}`}
              className="inline-flex flex-shrink-0 bg-white p-4 rounded-lg shadow-sm h-24 w-48 items-center justify-center"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-16 max-w-full"
              />
            </div>
          ))}
        </div>

        {/* Duplicate set for seamless looping */}
        <div
          className={`flex items-center space-x-8 py-4 animate-marquee ${isPaused ? "animate-paused" : ""}`}
          aria-hidden="true"
        >
          {partnerLogos.map((logo, index) => (
            <div
              key={`second-${index}`}
              className="inline-flex flex-shrink-0 bg-white p-4 rounded-lg shadow-sm h-24 w-48 items-center justify-center"
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={logo.width}
                height={logo.height}
                className="object-contain max-h-16 max-w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

