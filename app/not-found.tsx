import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 bg-gray-50">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-blue-600 mb-6">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Page non trouvée</h2>
        <p className="text-gray-600 mb-8 max-w-md mx-auto">
          Désolé, nous n'avons pas pu trouver la page que vous recherchez.
        </p>
        <Link 
          href="/"
          className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
        >
          Retour à l'accueil
        </Link>
      </div>
    </div>
  )
} 