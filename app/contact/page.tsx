"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, Calendar, FileText, Linkedin, Facebook } from "lucide-react"
import { useState } from "react"

const agenda = [
  {
    date: "15 Mai 2025",
    title: "Réunion publique - Quartier Centre",
    description: "Échanges sur la sécurité et les services de proximité",
    time: "19h00",
  },
  {
    date: "18 Mai 2025",
    title: "Atelier participatif - Transition écologique",
    description: "Construisons ensemble les solutions durables",
    time: "14h00",
  },
  {
    date: "22 Mai 2025",
    title: "Rencontre avec les associations",
    description: "Dialogue sur la vie associative et culturelle",
    time: "18h30",
  },
]

const documents = [
  { title: "Programme complet", type: "PDF", size: "2.1 MB" },
  { title: "Tract de campagne", type: "PDF", size: "1.5 MB" },
  { title: "Statuts de l'association", type: "PDF", size: "0.8 MB" },
  { title: "Bulletin d'adhésion", type: "PDF", size: "0.3 MB" },
  { title: "Compte-rendu AG 2024", type: "PDF", size: "1.2 MB" },
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
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
                    <div className="bg-gradient-to-r from-emerald-50 to-blue-50 p-4 rounded-lg border border-emerald-200">
                      <div className="flex items-start space-x-3">
                        <Checkbox
                          id="newsletter"
                          checked={formData.newsletter}
                          onCheckedChange={(checked) => handleInputChange("newsletter", checked as boolean)}
                          className="mt-1"
                        />
                        <div>
                          <Label htmlFor="newsletter" className="text-sm font-medium text-emerald-800">
                            ✉️ Je souhaite recevoir la newsletter de Mouvaux Demain
                          </Label>
                          <p className="text-xs text-emerald-700 mt-1">
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

                  <Button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700">
                    Envoyer le message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Newsletter Signup Card */}
            <Card className="mt-8 bg-gradient-to-br from-blue-50 via-emerald-50 to-purple-50 border-blue-200">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-4 text-gray-900">📬 Newsletter Mouvaux Demain</h3>
                <p className="text-gray-600 mb-6">
                  Rejoignez notre communauté et recevez toutes nos actualités directement par email.
                </p>
                <div className="space-y-4">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="email"
                      placeholder="Votre adresse email"
                      className="flex-1 px-4 py-3 rounded-lg border border-emerald-300"
                    />
                    <Button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700">
                      Je m'abonne
                    </Button>
                  </div>
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
                    <Mail className="w-5 h-5 text-emerald-600" />
                    <a href="mailto:contact@delavenne.fr" className="text-emerald-600 hover:text-emerald-700">
                      contact@delavenne.fr
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Linkedin className="w-5 h-5 text-emerald-600" />
                    <a href="#" className="text-emerald-600 hover:text-emerald-700">
                      LinkedIn
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Facebook className="w-5 h-5 text-emerald-600" />
                    <a href="#" className="text-emerald-600 hover:text-emerald-700">
                      Facebook
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Agenda & Documents */}
          <div className="space-y-8">
            {/* Agenda */}
            <Card>
              <CardContent className="p-8">
                <h2 className="text-2xl font-bold mb-6 text-gray-900 flex items-center">
                  <Calendar className="w-6 h-6 mr-2 text-blue-600" />
                  Prochains événements
                </h2>
                <div className="space-y-4">
                  {agenda.map((event, index) => (
                    <div key={index} className="border-l-4 border-emerald-600 pl-4 py-2">
                      <div className="flex justify-between items-start mb-1">
                        <h4 className="font-semibold text-gray-900">{event.title}</h4>
                        <span className="text-sm text-emerald-600 font-medium">{event.time}</span>
                      </div>
                      <p className="text-sm text-gray-600 mb-1">{event.description}</p>
                      <p className="text-sm text-gray-500">{event.date}</p>
                    </div>
                  ))}
                </div>
                <Button variant="outline" className="w-full mt-6">
                  Voir tout l'agenda
                </Button>
              </CardContent>
            </Card>

            {/* Documents */}
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
                        </p>
                      </div>
                      <Button variant="ghost" size="sm">
                        Télécharger
                      </Button>
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
