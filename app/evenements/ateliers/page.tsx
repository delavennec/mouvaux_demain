import React from 'react'
import EventCard from '@/components/event-card'
import { atelierEvents, ateliersOverview } from '@/lib/events'
import Link from 'next/link'

export default function AteliersPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center">Ateliers thématiques ouverts à tous</h1>
      <p className="text-center text-gray-600 mb-4">
        Venez participer à nos ateliers à thèmes dont le but est d'échanger sur votre vision de la ville, discuter de suggestions ou encore soulever les différentes problématiques rencontrées au quotidien. Votre avis nous est précieux pour donner un nouveau souffle à Mouvaux.
      </p>
      <p className="text-center text-gray-600 mb-8">Pour tout renseignement : {ateliersOverview.contact}</p>

      <div className="space-y-6">
        {atelierEvents.map((atelier, idx) => (
          <div key={idx}> 
            <EventCard
              event={atelier}
              centerTitle
              footer={<span>Merci de s&apos;inscrire à l&apos;adresse {atelier.contact}</span>}
            />
          </div>
        ))}
      </div>
    </main>
  )
}
