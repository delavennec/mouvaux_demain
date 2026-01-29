'use client'

import { useState } from 'react'
import Image from 'next/image'
import { Card, CardContent } from '@/components/ui/card'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'

interface EventPositionCardProps {
  date: string
  title?: string
  images: {
    src: string
    alt: string
  }[]
  text: string
  previewSentences?: number
  fullWidthImage?: boolean
  link?: {
    text: string
    href: string
  }
}

export function EventPositionCard({
  date,
  title,
  images,
  text,
  previewSentences = 2,
  fullWidthImage = false,
  link
}: EventPositionCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Extract first N sentences for preview - improved regex to handle French quotes
  const sentences = text.match(/[^.!?»]+[.!?»]+/g) || [text]
  const previewText = sentences.slice(0, previewSentences).join(' ').trim()
  const hasMore = text.length > previewText.length + 10

  const isSingleImage = images.length === 1
  const isDualImage = images.length === 2

  return (
    <Card className={`transition-all duration-300 rounded-3xl ${expanded ? 'shadow-[0_20px_60px_rgba(0,0,0,0.35)]' : 'shadow-[0_15px_50px_rgba(0,0,0,0.3)]'}`}>
      <CardContent className="p-6">
        {/* Date */}
        <div className="text-blue-900 font-semibold text-sm mb-4">
          {date}{title && ` - ${title}`}
        </div>

        {/* Images */}
        <div className="flex flex-col items-center mb-4">
          {isSingleImage ? (
            fullWidthImage ? (
              <div className="relative w-full flex justify-center" style={{ height: '250px' }}>
                <div className="relative rounded-lg overflow-hidden bg-gradient-to-r from-blue-100 via-transparent to-blue-100 p-4">
                  <div className="relative rounded-lg overflow-hidden" style={{ width: '300px', height: '250px' }}>
                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      width={300}
                      height={250}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full rounded-lg overflow-hidden bg-gradient-to-r from-blue-100 via-transparent to-blue-100 flex justify-center" style={{ height: '250px' }}>
                <div className="relative rounded-lg overflow-hidden" style={{ width: '200px', height: '250px' }}>
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    width={200}
                    height={250}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              </div>
            )
          ) : isDualImage ? (
            <div className="w-full grid grid-cols-2 gap-2 max-w-[428px]">
              {images.map((img, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden" style={{ width: '210px', height: '200px' }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={210}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-2 gap-2 max-w-[428px]">
              {images.map((img, idx) => (
                <div key={idx} className="relative rounded-lg overflow-hidden" style={{ width: '210px', height: '200px' }}>
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={210}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Text Content */}
        <div className="text-base text-gray-700 leading-relaxed">
          <p>
            {expanded ? text : previewText}
          </p>
          {hasMore && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-blue-900 font-semibold underline hover:text-blue-700 mt-2 text-sm"
            >
              {expanded ? 'Moins' : 'Plus'}
            </button>
          )}
        </div>

        {/* Optional Link */}
        {link && (
          <Link 
            href={link.href} 
            className="inline-flex items-center text-blue-900 font-semibold hover:underline mt-4"
          >
            {link.text}
            <ChevronRight className="w-4 h-4 ml-1" />
          </Link>
        )}
      </CardContent>
    </Card>
  )
}
