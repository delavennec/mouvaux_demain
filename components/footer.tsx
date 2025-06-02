import { Mail, Linkedin, Facebook } from "lucide-react"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-emerald-600 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">MD</span>
              </div>
              <span className="font-bold text-lg">Mouvaux Demain</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Un vote libre et constructif pour Mouvaux. Pour un avenir responsable, écologique et républicain.
            </p>

            {/* Newsletter signup in footer */}
            <div className="mb-6">
              <h4 className="font-semibold text-white mb-3">📧 Newsletter</h4>
              <div className="flex flex-col sm:flex-row gap-2 max-w-sm">
                <input
                  type="email"
                  placeholder="Votre email"
                  className="flex-1 px-3 py-2 rounded text-gray-900 text-sm"
                />
                <button className="bg-gradient-to-r from-blue-600 to-emerald-600 hover:from-blue-700 hover:to-emerald-700 text-white px-4 py-2 rounded text-sm font-medium transition-colors">
                  S'inscrire
                </button>
              </div>
            </div>

            <div className="flex space-x-4">
              <a href="mailto:contact@delavenne.fr" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-300 hover:text-emerald-400 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/charles-delavenne" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Charles Delavenne
                </Link>
              </li>
              <li>
                <Link href="/programme" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Programme
                </Link>
              </li>
              <li>
                <Link href="/association" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Association
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-emerald-400 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <div className="space-y-2 text-gray-300">
              <p>137, rue Faidherbe</p>
              <p>59420 Mouvaux</p>
              <p>contact@delavenne.fr</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} Mouvaux Demain. Tous droits réservés.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Mentions légales
            </Link>
            <Link href="#" className="text-gray-400 hover:text-emerald-400 text-sm transition-colors">
              Politique de confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
