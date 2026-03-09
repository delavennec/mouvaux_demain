"use client"

import type React from "react"

import { Button } from "../../components/ui/button"
import { Card, CardContent } from "../../components/ui/card"
import { Input } from "../../components/ui/input"
import { Label } from "../../components/ui/label"
import { Textarea } from "../../components/ui/textarea"
import { Checkbox } from "../../components/ui/checkbox"
import { Mail, Facebook, CheckCircle, AlertCircle, Loader2 } from "@/components/icons"
import { Phone, X, Instagram } from "@/components/icons"
import { useState } from "react"
import { toast } from "sonner"
import { NewsletterForm } from "@/components/newsletter-form"



export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    newsletter: false,
    gdpr: false,
    engage: false,
    contactTeam: false,
    hostEvent: false,
    financialSupport: false,
    membershipForm: false,
    // Champs spécifiques pour le bulletin d'adhésion
    birthDate: "",
    birthPlace: "",
    nationality: "",
    address: "",
    phone: "",
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
          engage: false,
          contactTeam: false,
          hostEvent: false,
          financialSupport: false,
          membershipForm: false,
          birthDate: "",
          birthPlace: "",
          nationality: "",
          address: "",
          phone: "",
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
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900">Contact</h1>
          <p className="text-xl text-blue-600 font-medium">Échangeons ensemble sur l'avenir de Mouvaux</p>
        </div>

        <div className="max-w-2xl mx-auto">
          {/* Contact Form */}
            <Card className="bg-blue-50 border-blue-200 shadow-xl">
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

                  <div className="space-y-6">
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-200">
                      <h4 className="font-medium text-blue-800 mb-3">S'engager avec nous</h4>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="engage"
                            className="mt-1"
                            checked={formData.engage}
                            onCheckedChange={(checked) => {
                              handleInputChange("engage", checked as boolean);
                              if (checked) {
                                handleInputChange("subject", "Engagement dans la campagne");
                              }
                            }}
                          />
                          <Label htmlFor="engage" className="text-sm">
                            Je souhaite m'engager et participer à la campagne de « Renouveau pour Mouvaux ».
                          </Label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="contact-team"
                            className="mt-1"
                            checked={formData.contactTeam}
                            onCheckedChange={(checked) => {
                              handleInputChange("contactTeam", checked as boolean);
                              if (checked) {
                                handleInputChange("subject", "Contact avec un membre de l'équipe");
                              }
                            }}
                          />
                          <Label htmlFor="contact-team" className="text-sm">
                            Je souhaite avoir un contact direct avec un membre de l'équipe de campagne.
                          </Label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="host-event" 
                            className="mt-1"
                            checked={formData.hostEvent}
                            onCheckedChange={(checked) => {
                              handleInputChange("hostEvent", checked as boolean);
                              if (checked) {
                                handleInputChange("subject", "Accueil d'un apéro Mouvaux 2026");
                              }
                            }}
                          />
                          <Label htmlFor="host-event" className="text-sm">
                            Je souhaite accueillir un apéro « Mouvaux 2026 » à mon domicile, en présence du candidat Charles Delavenne.
                          </Label>
                        </div>

                        <div className="flex items-start space-x-3">
                          <Checkbox
                            id="financial-support"
                            className="mt-1"
                            checked={formData.financialSupport}
                            onCheckedChange={(checked) => {
                              handleInputChange("financialSupport", checked as boolean);
                              if (checked) {
                                handleInputChange("subject", "Soutien financier de la campagne");
                              }
                            }}
                          />
                          <Label htmlFor="financial-support" className="text-sm">
                            Je souhaite soutenir financièrement la campagne « Renouveau pour Mouvaux ». Un don même modeste sera très utile.
                          </Label>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 p-4 rounded-lg border border-green-200">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="membershipForm"
                          checked={formData.membershipForm}
                          onCheckedChange={(checked) => {
                            const isChecked = checked as boolean
                            handleInputChange("membershipForm", isChecked)
                            if (!isChecked) {
                              handleInputChange("birthDate", "")
                              handleInputChange("birthPlace", "")
                              handleInputChange("nationality", "")
                              handleInputChange("address", "")
                              handleInputChange("phone", "")
                            }
                          }}
                          className="mt-1"
                        />
                        <div>
                          <Label htmlFor="membershipForm" className="text-sm font-medium text-green-800">
                            Je souhaite recevoir le formulaire d'adhésion à l'association Renouveau pour Mouvaux par email
                          </Label>
                          <p className="text-xs text-green-700 mt-1">
                            Recevez directement un document PDF pré-rempli avec vos informations, prêt à être signé
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Champs additionnels pour le bulletin d'adhésion */}
                    {formData.membershipForm && (
                      <div className="space-y-4 p-4 bg-green-50 border border-green-200 rounded-lg">
                        <h3 className="font-semibold text-green-800 text-sm">Informations complémentaires pour votre bulletin d'adhésion</h3>
                        
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="birthDate">Date de naissance</Label>
                            <Input
                              id="birthDate"
                              type="date"
                              value={formData.birthDate}
                              onChange={(e) => handleInputChange("birthDate", e.target.value)}
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="birthPlace">Lieu de naissance</Label>
                            <Input
                              id="birthPlace"
                              value={formData.birthPlace}
                              onChange={(e) => handleInputChange("birthPlace", e.target.value)}
                              placeholder="Ville, Pays"
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          <div>
                            <Label htmlFor="nationality">Nationalité</Label>
                            <Input
                              id="nationality"
                              value={formData.nationality}
                              onChange={(e) => handleInputChange("nationality", e.target.value)}
                              placeholder="Française"
                              className="mt-1"
                            />
                          </div>

                          <div>
                            <Label htmlFor="phone">Téléphone</Label>
                            <Input
                              id="phone"
                              type="tel"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="06 12 34 56 78"
                              className="mt-1"
                            />
                          </div>
                        </div>

                        <div>
                          <Label htmlFor="address">Adresse complète</Label>
                          <Textarea
                            id="address"
                            value={formData.address}
                            onChange={(e) => handleInputChange("address", e.target.value)}
                            placeholder="Numéro, rue, code postal, ville"
                            rows={2}
                            className="mt-1"
                          />
                        </div>
                      </div>
                    )}

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
                            Je souhaite recevoir la newsletter de Renouveau pour Mouvaux
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
                <h3 className="text-xl font-bold mb-4 text-gray-900">📬 Newsletter Renouveau pour Mouvaux</h3>
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
                    <p>✓ Des infos exclusives régulièrementne</p>
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
                    <Mail className="w-5 h-5 text-blue-700" />
                    <a href="mailto:RenouveauMouvaux@gmail.com" className="text-blue-700 hover:text-blue-600">
                    RenouveauMouvaux@gmail.com
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-5 h-5 text-blue-700" />
                    <a href="tel:+33689316548" className="text-blue-700 hover:text-blue-600">
                      06 89 31 65 48
                    </a>
                </div>
          </div>

                <h3 className="text-xl font-bold mt-8 mb-6 text-gray-900">Nous suivre sur nos réseaux sociaux</h3>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href="https://www.facebook.com/share/19n839yhVx/?mibextid=wwXIfr" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                    <span>Facebook</span>
                  </a>
                  <a 
                    href="https://twitter.com/Mouvaux2026" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full transition-colors"
                  >
                    <X className="w-5 h-5" />
                    <span>@Mouvaux2026</span>
                  </a>
                  <a 
                    href="https://www.instagram.com/charlesdelavenne2024?utm_source=ig_web_button_share_sheet&igsh=bTd1b2JjdnVneWZn" 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 bg-blue-100 hover:bg-blue-200 text-blue-800 px-4 py-2 rounded-full transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                    <span>Instagram</span>
                  </a>
                </div>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  )
}
