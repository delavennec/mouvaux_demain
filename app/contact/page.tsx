"use client"

import type React from "react"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Checkbox } from "../../components/ui/checkbox"
import { Mail, FileText, Linkedin, Facebook, CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import { useState } from "react"
import { toast } from "sonner"
import { NewsletterForm } from "@/components/newsletter-form"

const documents = [
  { 
    title: "Circulaire Charles Delavenne", 
    type: "PDF", 
    size: "728 KB",
    path: "/circulaire_Charles_Delavenne.pdf",
    available: true
  },
  { 
    title: "Programme complet", 
    type: "PDF", 
    size: "2.1 MB",
    available: false,
    comingSoon: "Disponible prochainement"
  },
  { 
    title: "Tract de campagne", 
    type: "PDF", 
    size: "1.5 MB",
    available: false,
    comingSoon: "En cours de finalisation"
  },
  { 
    title: "Statuts de l'association", 
    type: "PDF", 
    size: "0.8 MB",
    available: false,
    comingSoon: "Bientôt disponible"
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
    gdpr: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formStatus, setFormStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset status
    setFormStatus("idle")
    setErrorMessage("")
    
    // Validate required fields
    if (!formData.name || !formData.email || !formData.message || !formData.gdpr) {
      setFormStatus("error")
      setErrorMessage("Veuillez remplir tous les champs obligatoires")
      toast.error("Veuillez remplir tous les champs obligatoires")
      return
    }
    
    setIsSubmitting(true)
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setFormStatus("success")
        toast.success("Votre message a bien été envoyé. Nous vous répondrons dans les meilleurs délais.")
        // Reset form
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          newsletter: false,
          gdpr: false,
        })
      } else {
        setFormStatus("error")
        setErrorMessage(data.error || "Une erreur est survenue lors de l'envoi du message")
        toast.error(data.error || "Une erreur est survenue lors de l'envoi du message")
      }
    } catch (error) {
      setFormStatus("error")
      setErrorMessage("Une erreur est survenue. Veuillez réessayer plus tard.")
      toast.error("Une erreur est survenue. Veuillez réessayer plus tard.")
      console.error("Contact form submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleInputChange = (field: string, value: string | boolean) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact & Ressources</h1>
          <p className="text-xl text-gray-600">Échangeons ensemble sur l'avenir de Mouvaux</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900">Nous contacter</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {formStatus === "success" && (
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-green-50 border border-green-200 text-green-800">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Message envoyé avec succès</p>
                        <p className="text-sm mt-1">Merci pour votre message ! Nous vous répondrons dans les meilleurs délais.</p>
                      </div>
                    </div>
                  )}

                  {formStatus === "error" && (
                    <div className="flex items-start space-x-3 p-4 rounded-lg bg-red-50 border border-red-200 text-red-800">
                      <AlertCircle className="h-5 w-5 text-red-500 mt-0.5" />
                      <div>
                        <p className="font-medium">Une erreur est survenue</p>
                        <p className="text-sm mt-1">{errorMessage}</p>
                      </div>
                    </div>
                  )}
                  
                  <div>
                    <Label htmlFor="name">Nom complet *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange("name", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => handleInputChange("email", e.target.value)}
                      required
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="subject">Sujet</Label>
                    <Input
                      id="subject"
                      value={formData.subject}
                      onChange={(e) => handleInputChange("subject", e.target.value)}
                      className="mt-1"
                    />
                  </div>

                  <div>
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange("message", e.target.value)}
                      required
                      rows={5}
                      className="mt-1"
                    />
                  </div>

                  <div className="space-y-4">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                          className="mt-1"
                        />
                        <div>
                          <Label htmlFor="newsletter" className="text-sm font-medium text-blue-800">
                            ✉️ Je souhaite recevoir la newsletter de Mouvaux Demain
                          </Label>
                          <p className="text-xs text-blue-700 mt-1">
                            Actualités exclusives, invitations aux événements, propositions détaillées
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="gdpr"
                        checked={formData.gdpr}
                        onCheckedChange={(checked) => handleInputChange("gdpr", checked as boolean)}
                        required
                      />
                      <Label htmlFor="gdpr" className="text-sm">
                        J'accepte que mes données soient utilisées pour répondre à ma demande *
                      </Label>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-blue-600 hover:bg-blue-700"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center justify-center">
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Envoi en cours...
                      </span>
                    ) : (
                      "Envoyer le message"
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Newsletter Signup Card */}
            <Card className="mt-8 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">📬 Newsletter Mouvaux Demain</h3>
                <p className="text-gray-600 mb-6">
                  Rejoignez notre communauté et recevez toutes nos actualités directement par email.
                </p>
                <div className="space-y-4">
                  <NewsletterForm 
                    buttonText="Je m'abonne"
                    buttonClassName="bg-blue-600 hover:bg-blue-700"
                    inputClassName="flex-1 px-4 py-3 rounded-lg border border-blue-300"
                    messageClassName="text-sm mt-2"
                    layout="row"
                  />
                  <div className="text-sm text-gray-500 space-y-1">
                    <p>✓ Contenu exclusif chaque semaine</p>
                    <p>✓ Invitations prioritaires aux événements</p>
                    <p>✓ Désinscription en un clic</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Info */}
            <Card className="mt-8">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-6 text-gray-900">Autres moyens de contact</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Mail className="w-5 h-5 text-blue-600" />
                    <a href="mailto:contact@delavenne.fr" className="text-blue-600 hover:text-blue-700">
                      contact@delavenne.fr
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-5 h-5 text-blue-600" />
                    <a href="#" className="text-blue-600 hover:text-blue-700">
                      Facebook
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Documents */}
          <div className="space-y-8">
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <FileText className="w-6 h-6 mr-2 text-purple-600" />
                  Documents utiles
                </h2>
                <div className="space-y-3">
                  {documents.map((doc, index) => (
                    <div
                      key={index}
                      className="flex items-center justify-between p-3 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                    >
                      <div>
                        <h4 className="font-medium text-gray-900">{doc.title}</h4>
                        <p className="text-sm text-gray-500">
                          {doc.type} • {doc.size}
                          {!doc.available && doc.comingSoon && (
                            <span className="ml-2 text-blue-600 italic">
                              {doc.comingSoon}
                            </span>
                          )}
                        </p>
                      </div>
                      {doc.available ? (
                        <a href={doc.path} download target="_blank" rel="noopener noreferrer">
                          <Button variant="ghost" size="sm">
                            Télécharger
                          </Button>
                        </a>
                      ) : (
                        <Button variant="ghost" size="sm" disabled>
                          Télécharger
                        </Button>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
