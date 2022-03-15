import Link from 'next/link';
import Image from 'next/image';

export default function Header() { 
  return (
    <header className="bg-slate-800 w-full">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-label="Top">
        <div className="w-full py-3 flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/">
              <a>
                <span className="sr-only">Hermit</span>
                <img
                  className="h-10 w-auto"
                  src="/logo_colored.svg"
                  alt="Logo"
                  width={134}
                  height={66}
                />
              </a>
            </Link>

          </div>
          <div className="ml-10 space-x-4">
            <a href={"/about"} className="text-base font-medium text-white hover:text-indigo-50">
              About
            </a>
            <a href={"/faq"} className="text-base font-medium text-white hover:text-indigo-50">
              FAQ
            </a>
            <a href={"/terms"} className="text-base font-medium text-white hover:text-indigo-50">
              Terms & Conditions
            </a>
          </div>
        </div>
      </nav>
    </header>
  )
}