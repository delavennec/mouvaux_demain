"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Mail } from "@/components/icons"
import { NewsletterForm } from "@/components/newsletter-form"
import { useNewsletter } from "@/components/newsletter-context"

export function NewsletterPopup() {
  const { isOpen, closeNewsletter } = useNewsletter()
  const [showInitialPopup, setShowInitialPopup] = useState(false)

  useEffect(() => {
    // Show popup after 30 seconds or when user scrolls 50% of page
    const timer = setTimeout(() => {
      if (!localStorage.getItem("newsletter-popup-shown")) {
        setShowInitialPopup(true)
      }
    }, 30000)

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !localStorage.getItem("newsletter-popup-shown")) {
        setShowInitialPopup(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClose = () => {
    if (showInitialPopup) {
      setShowInitialPopup(false)
      localStorage.setItem("newsletter-popup-shown", "true")
    } else {
      closeNewsletter()
    }
  }

  // Success callback to close the popup when newsletter signup is successful
  const handleSuccess = () => {
    setTimeout(() => {
      handleClose()
    }, 3000)
  }

  const isVisible = isOpen || showInitialPopup

  if (!isVisible) return null

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <Card className="max-w-md w-full relative">
        <Button variant="ghost" size="icon" className="absolute right-2 top-2 z-10" onClick={handleClose}>
          <X className="w-4 h-4" />
        </Button>
        <CardContent className="p-8 text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="w-8 h-8 text-blue-600" />
          </div>
          <h3 className="text-2xl font-bold mb-4 text-gray-900">Restez informé de notre campagne</h3>
          <p className="text-gray-600 mb-6">
            Recevez nos actualités exclusives et invitations aux événements directement par email.
          </p>
          
          <NewsletterForm 
            buttonText="Je m'inscris gratuitement"
            buttonClassName="w-full bg-blue-600 hover:bg-blue-700"
            inputClassName="w-full px-4 py-3 rounded-lg border border-gray-300"
            messageClassName="text-sm mt-2"
            layout="column"
            onSuccess={handleSuccess}
          />
          
          <p className="text-xs text-gray-500 mt-4">Pas de spam • Désinscription facile • Données protégées</p>
        </CardContent>
      </Card>
    </div>
  )
}
