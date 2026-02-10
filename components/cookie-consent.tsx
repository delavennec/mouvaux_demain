"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { X } from "@/components/icons"
import Link from "next/link"

type CookiePreferences = {
  necessary: boolean
  analytics: boolean
  functional: boolean
}

export function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false)
  const [showPreferences, setShowPreferences] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    necessary: true, // Always required
    analytics: false,
    functional: false,
  })

  useEffect(() => {
    // Check if user has already set cookie preferences
    const consent = localStorage.getItem("cookie-consent")
    if (!consent) {
      // If no consent is stored, show the banner
      setIsVisible(true)
    } else {
      // Parse stored preferences
      try {
        const storedPreferences = JSON.parse(consent)
        setPreferences(storedPreferences)
      } catch (e) {
        console.error("Error parsing stored cookie preferences", e)
      }
    }
  }, [])

  const handleAcceptAll = () => {
    const newPreferences = {
      necessary: true,
      analytics: true,
      functional: true,
    }
    savePreferences(newPreferences)
  }

  const handleRejectAll = () => {
    const newPreferences = {
      necessary: true, // Always required
      analytics: false,
      functional: false,
    }
    savePreferences(newPreferences)
  }

  const handleSavePreferences = () => {
    savePreferences(preferences)
  }

  const savePreferences = (prefs: CookiePreferences) => {
    // Save preferences to localStorage
    localStorage.setItem("cookie-consent", JSON.stringify(prefs))
    
    // Apply cookie preferences
    applyPreferences(prefs)
    
    // Hide the banner
    setIsVisible(false)
    setShowPreferences(false)
  }
  
  const applyPreferences = (prefs: CookiePreferences) => {
    // Apply necessary cookies - always enabled
    
    // Apply analytics cookies
    if (prefs.analytics) {
      // Enable Google Analytics or other analytics services
      // This would be where you initialize GA or other tracking services
      console.log("Analytics cookies enabled")
    } else {
      // Disable analytics cookies
      // You would remove any analytics cookies here
      console.log("Analytics cookies disabled")
    }
    
    // Apply functional cookies
    if (prefs.functional) {
      // Enable functional cookies
      console.log("Functional cookies enabled")
    } else {
      // Disable functional cookies
      console.log("Functional cookies disabled")
    }
  }
  
  const handleTogglePreference = (key: keyof CookiePreferences) => {
    if (key === "necessary") return // Can't toggle necessary cookies
    
    setPreferences(prev => ({
      ...prev,
      [key]: !prev[key]
    }))
  }
  
  const handleManagePreferences = () => {
    setShowPreferences(true)
  }
  
  // Function to handle reopening the cookie banner for users who want to change preferences later
  const reopenCookieConsent = () => {
    setIsVisible(true)
  }
  
  // Expose the reopen function to the window object so it can be called from other parts of the app
  useEffect(() => {
    // @ts-ignore
    window.reopenCookieConsent = reopenCookieConsent
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white shadow-lg border-t border-gray-200 p-4">
      <div className="max-w-6xl mx-auto">
        {!showPreferences ? (
          <div className="flex flex-col md:flex-row md:items-center gap-4">
            <div className="flex-1">
              <p className="text-gray-700 mb-2">
                Ce site utilise des cookies pour améliorer votre expérience. Nous utilisons des cookies nécessaires au fonctionnement du site, ainsi que des cookies d'analyse et fonctionnels si vous les acceptez.
              </p>
              <p className="text-sm text-gray-500">
                Consultez notre <Link href="/politique-de-confidentialite" className="text-blue-600 hover:underline">politique de confidentialité</Link> et notre <Link href="/cookies" className="text-blue-600 hover:underline">politique relative aux cookies</Link> pour en savoir plus.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button variant="outline" onClick={handleManagePreferences}>
                Paramétrer
              </Button>
              <Button variant="outline" onClick={handleRejectAll}>
                Refuser
              </Button>
              <Button onClick={handleAcceptAll}>
                Tout accepter
              </Button>
            </div>
          </div>
        ) : (
          <div className="relative">
            <Button 
              variant="ghost" 
              size="icon" 
              className="absolute right-0 top-0" 
              onClick={() => setShowPreferences(false)}
            >
              <X className="h-4 w-4" />
            </Button>
            
            <h3 className="text-xl font-semibold mb-4">Préférences de cookies</h3>
            
            <div className="space-y-4 mb-6">
              <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                <div>
                  <h4 className="font-medium">Cookies nécessaires</h4>
                  <p className="text-sm text-gray-500">Indispensables au fonctionnement du site</p>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-5 bg-blue-600 rounded-full relative">
                    <div className="w-4 h-4 bg-white rounded-full absolute right-0.5 top-0.5"></div>
                  </div>
                </div>
              </div>
              
              <div 
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => handleTogglePreference("analytics")}
              >
                <div>
                  <h4 className="font-medium">Cookies d'analyse</h4>
                  <p className="text-sm text-gray-500">Nous aident à améliorer notre site</p>
                </div>
                <div className="flex items-center">
                  <div className={`w-10 h-5 ${preferences.analytics ? 'bg-blue-600' : 'bg-gray-300'} rounded-full relative transition-colors`}>
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${preferences.analytics ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </div>
              </div>
              
              <div 
                className="flex items-center justify-between p-3 bg-gray-50 rounded-lg cursor-pointer"
                onClick={() => handleTogglePreference("functional")}
              >
                <div>
                  <h4 className="font-medium">Cookies fonctionnels</h4>
                  <p className="text-sm text-gray-500">Pour mémoriser vos préférences</p>
                </div>
                <div className="flex items-center">
                  <div className={`w-10 h-5 ${preferences.functional ? 'bg-blue-600' : 'bg-gray-300'} rounded-full relative transition-colors`}>
                    <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-all ${preferences.functional ? 'right-0.5' : 'left-0.5'}`}></div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex justify-end gap-3">
              <Button variant="outline" onClick={handleRejectAll}>
                Tout refuser
              </Button>
              <Button onClick={handleSavePreferences}>
                Enregistrer mes choix
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
} 