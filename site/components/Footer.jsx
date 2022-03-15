import Image from 'next/image';
import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-slate-800 w-full">
      <div className="max-w-7xl mx-auto py-8 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="-mx-5 -my-2 flex flex-wrap justify-center" aria-label="Footer">
          <Link className='cursor-pointer' href="/">
            <a>
              <Image src="/logo_white.svg" alt="Logo" width="100" height="100" />
            </a>
          </Link>
        </nav>
        <p className="mt-4 text-center text-base text-white">&copy; 2022</p>
      </div>
    </footer>
  )
}