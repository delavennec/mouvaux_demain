'use client'

import { useState, ReactNode } from 'react'
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
  text: string | ReactNode
  previewSentences?: number
  fullWidthImage?: boolean
  originalSize?: boolean
  imageMaxWidth?: number
  imageWidth?: number
  imageHeight?: number
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
  originalSize = false,
  imageMaxWidth,
  imageWidth,
  imageHeight,
  link
}: EventPositionCardProps) {
  const [expanded, setExpanded] = useState(false)

  // Extract first N sentences for preview - improved regex to handle French quotes
  const isStringText = typeof text === 'string'
  const sentences = isStringText ? text.match(/[^.!?»]+[.!?»]+/g) || [text] : []
  const previewText = isStringText ? sentences.slice(0, previewSentences).join(' ').trim() : text
  const hasMore = isStringText && text.length > previewText.toString().length + 10

  const isSingleImage = images.length === 1
  const isDualImage = images.length === 2
  // If this card is the "pb-chauffage" publication, keep the original layout (no width constraint)
  const isPbChauffage = images.some(
    (img) => img.src && img.src.toString().toLowerCase().includes('pb-chauffage')
  )
  const shouldConstrainText = !isPbChauffage && !originalSize
  const hasExplicitSize = typeof imageWidth === 'number' && typeof imageHeight === 'number'
  const singleImageWidth = imageWidth ?? imageMaxWidth ?? (fullWidthImage ? 300 : 200)
  const singleImageHeight = imageHeight ?? (fullWidthImage
    ? Math.round((singleImageWidth * 5) / 6)
    : Math.round((singleImageWidth * 5) / 4))
  // Determine max text width to match image(s) width so the text doesn't overflow image boundaries
  const textMaxWidth = shouldConstrainText
    ? isSingleImage
      ? singleImageWidth
      : isDualImage
      ? 428
      : 428
    : originalSize
    ? 800
    : undefined

  return (
    <Card className={`w-full transition-all duration-300 rounded-3xl bg-blue-50 overflow-hidden ${expanded ? 'shadow-[0_20px_60px_rgba(0,0,0,0.35)]' : 'shadow-[0_15px_50px_rgba(0,0,0,0.3)]'}`}>
      <CardContent className="p-6 relative">
        {/* Gradient overlay from edges - strong at borders, fading to center */}
        <div className="absolute inset-0 rounded-3xl pointer-events-none bg-gradient-to-br from-blue-100/40 via-transparent via-60% to-blue-100/40"></div>
        
        {/* Content wrapper */}
        <div className="relative z-10">
        {/* Date */}
        {(date || title) && (
          <div className="text-blue-900 font-semibold text-sm mb-4">
            {date}{date && title && ' - '}{title}
          </div>
        )}

        {/* Images */}
        <div className="flex flex-col items-center mb-4 w-full">
          {isSingleImage ? (
            originalSize ? (
              <div className="relative w-full flex justify-center">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    width={800}
                    height={600}
                    className="rounded-lg transition-transform duration-300 hover:scale-105"
                    sizes="(max-width: 640px) 90vw, 800px"
                    style={{ width: 'auto', height: 'auto', maxWidth: '100%' }}
                  />
                </div>
              </div>
            ) : fullWidthImage ? (
              <div className="relative w-full flex justify-center">
                <div className="relative rounded-lg overflow-hidden p-4 w-full" style={{ maxWidth: `${singleImageWidth}px` }}>
                  <div
                    className={hasExplicitSize ? 'relative rounded-lg overflow-hidden' : 'relative rounded-lg overflow-hidden w-full aspect-[6/5]'}
                    style={hasExplicitSize ? { width: `${singleImageWidth}px`, height: `${singleImageHeight}px` } : undefined}
                  >
                    <Image
                      src={images[0].src}
                      alt={images[0].alt}
                      width={singleImageWidth}
                      height={singleImageHeight}
                      className="w-full h-full object-cover rounded-lg transition-transform duration-300 hover:scale-110"
                      sizes={`(max-width: 640px) 80vw, ${singleImageWidth}px`}
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative w-full rounded-lg overflow-hidden bg-gradient-to-r from-blue-100 via-transparent to-blue-100 flex justify-center">
                <div
                  className={hasExplicitSize ? 'relative rounded-lg overflow-hidden' : 'relative rounded-lg overflow-hidden w-full aspect-[4/5]'}
                  style={hasExplicitSize ? { width: `${singleImageWidth}px`, height: `${singleImageHeight}px` } : { maxWidth: `${singleImageWidth}px` }}
                >
                  <Image
                    src={images[0].src}
                    alt={images[0].alt}
                    width={singleImageWidth}
                    height={singleImageHeight}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    sizes={`(max-width: 640px) 70vw, ${singleImageWidth}px`}
                  />
                </div>
              </div>
            )
          ) : isDualImage ? (
            <div className="w-full grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-full sm:max-w-[428px] bg-gradient-to-r from-blue-100/50 via-transparent to-blue-100/50 rounded-lg p-2">
              {images.map((img, idx) => (
                <div key={idx} className="relative w-full aspect-[21/20] rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={210}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 640px) 90vw, 210px"
                  />
                </div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-full sm:max-w-[428px] w-full">
              {images.map((img, idx) => (
                <div key={idx} className="relative w-full aspect-[21/20] rounded-lg overflow-hidden">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    width={210}
                    height={200}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    sizes="(max-width: 640px) 90vw, 210px"
                  />
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Text Content: constrained width to match photo(s) */}
        <div
          className={`text-base text-gray-700 leading-relaxed text-left break-words whitespace-normal ${shouldConstrainText ? 'mx-auto' : ''} font-normal`}
          style={shouldConstrainText ? { maxWidth: `${textMaxWidth}px` } : undefined}
        >
          <div className="font-normal">
            {expanded ? text : previewText}
          </div>
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
        </div>
      </CardContent>
    </Card>
  )
}
