import Link from "next/link"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-center px-4">
      <div className="space-y-6 max-w-md">
        <h1 className="text-6xl font-bold text-blue-600">404</h1>
        <h2 className="text-2xl font-semibold text-gray-900">Page non trouvée</h2>
        <p className="text-gray-600">
          Désolé, la page que vous cherchez n&apos;existe pas ou a été déplacée.
        </p>
        <div className="pt-4">
          <Link
            href="/"
            className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Retour à l&apos;accueil
          </Link>
        </div>
      </div>
    </div>
  )
} 