'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-blue-600">
          Erreur
        </h1>
        <h2 className="text-2xl font-semibold text-gray-900">
          Une erreur est survenue
        </h2>
        <p className="text-gray-600">
          Désolé, quelque chose s'est mal passé.
        </p>
        <div className="pt-4 space-x-4">
          <button
            onClick={reset}
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Réessayer
          </button>
          <a
            href="/"
            className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg hover:bg-gray-300 transition-colors"
          >
            Retour à l'accueil
          </a>
        </div>
      </div>
    </div>
  )
} 