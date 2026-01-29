"use client"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const navigation = [
  { name: "Accueil", href: "/" },
  { name: "Charles Delavenne", href: "/charles-delavenne" },
  { name: "Renouveau pour Mouvaux", href: "/association" },
  { name: "Nos priorités", href: "/programme" },
  { name: "Actualités", href: "/actualites" },
  { name: "Evénements", href: "/evenements" },
  { name: "Contact", href: "/contact" },
]

export function Header() {
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center px-6">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2 flex-shrink-0">
          <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-sm">RM</span>
          </div>
          <span className="font-bold text-lg text-gray-900">Renouveau pour Mouvaux</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center flex-1 ml-10">
          <nav className="flex items-center space-x-5 lg:space-x-7 xl:space-x-9">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                  pathname === item.href ? "text-blue-600" : "text-gray-700"
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="flex items-center space-x-3 lg:space-x-4 ml-auto pl-16 lg:pl-20 xl:pl-24">
            <Button asChild variant="outline" size="sm" className="border-2 border-blue-900">
              <Link href="/contact">Nous soutenir</Link>
            </Button>
            <Button asChild size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <Link href="#newsletter">Newsletter</Link>
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-5 mt-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-lg font-medium transition-colors hover:text-blue-600 ${
                    pathname === item.href ? "text-blue-600" : "text-gray-700"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-5 space-y-4">
                <Button asChild variant="outline" className="w-full border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Link href="/contact">Nous soutenir</Link>
                </Button>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700">
                  <Link href="#newsletter">Newsletter gratuite</Link>
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  )
}
