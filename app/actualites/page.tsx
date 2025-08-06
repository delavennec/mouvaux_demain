import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Actualités | Renouveau pour Mouvaux',
  description: 'Retrouvez toutes les actualités de la campagne Renouveau pour Mouvaux et Charles Delavenne.',
};

export default function ActualitesPage() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-5xl">
      <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">Actualités</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-blue-600">Presse</h2>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <p className="mb-4">
            Dans la Voix du Nord le 6 juillet 2025, j&apos;ai annoncé ma candidature et le lancement de la campagne « Renouveau pour Mouvaux »
          </p>
          
          <div className="border border-gray-300 p-4 rounded-lg bg-gray-50 mb-4">
            <a 
              href="https://www.lavoixdunord.fr/1603743/article/2025-07-06/municipales-mouvaux-charles-delavenne-sera-candidat-la-tete-d-une-liste"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 transition-colors"
            >
              Lire l&apos;article : « Municipales à Mouvaux : Charles Delavenne sera candidat à la tête d'une liste »
            </a>
          </div>
        </div>
      </div>
    </main>
  );
}