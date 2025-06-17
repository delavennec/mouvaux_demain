"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { X, Mail, Loader2 } from "lucide-react"

export function NewsletterPopup() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  useEffect(() => {
    // Show popup after 30 seconds or when user scrolls 50% of page
    const timer = setTimeout(() => {
      if (!localStorage.getItem("newsletter-popup-shown")) {
        setIsVisible(true)
      }
    }, 30000)

    const handleScroll = () => {
      const scrollPercent = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100
      if (scrollPercent > 50 && !localStorage.getItem("newsletter-popup-shown")) {
        setIsVisible(true)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleClose = () => {
    setIsVisible(false)
    localStorage.setItem("newsletter-popup-shown", "true")
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset message state
    setMessage(null)
    setIsSubmitting(true)
    
    try {
      // Call our API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      setMessage({
        text: data.message,
        isError: !data.success,
      });
      
      // If subscription was successful, close the popup after 3 seconds
      if (data.success) {
        setTimeout(() => {
          handleClose();
        }, 3000);
      }
    } catch (error) {
      setMessage({
        text: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

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
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="email"
              placeholder="Votre adresse email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 rounded-lg border border-gray-300"
              required
              disabled={isSubmitting}
            />
            
            {message && (
              <div className={`text-sm ${message.isError ? 'text-red-600' : 'text-green-600'}`}>
                {message.text}
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-blue-600 hover:bg-blue-700"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Inscription en cours...
                </>
              ) : (
                "Je m'inscris gratuitement"
              )}
            </Button>
          </form>
          <p className="text-xs text-gray-500 mt-4">Pas de spam • Désinscription facile • Données protégées</p>
        </CardContent>
      </Card>
    </div>
  )
}
