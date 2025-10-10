import Link from "next/link"

const Logo = () => {
  return (
    <Link href="/" className="flex items-center text-dark dark:text-light">
        <div className="w-12 md:w-16 mr-2 md:mr-4">
            <svg
              viewBox="0 0 64 64"
              className="w-full h-auto"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Golf flag pole */}
              <line x1="32" y1="10" x2="32" y2="54" className="stroke-dark dark:stroke-light" strokeWidth="2"/>

              {/* Golf flag */}
              <path d="M32 10 L50 18 L32 26 Z" className="fill-green-600 dark:fill-green-400 stroke-green-700 dark:stroke-green-500" strokeWidth="1"/>

              {/* Golf hole base (green) */}
              <ellipse cx="32" cy="54" rx="20" ry="6" className="fill-green-600 dark:fill-green-400 opacity-70"/>

              {/* Golf hole */}
              <circle cx="32" cy="54" r="4" className="fill-dark dark:fill-light"/>

              {/* Decorative grass lines */}
              <path d="M15 54 Q15 50, 18 54" className="stroke-green-700 dark:stroke-green-500" strokeWidth="1" fill="none"/>
              <path d="M45 54 Q45 50, 48 54" className="stroke-green-700 dark:stroke-green-500" strokeWidth="1" fill="none"/>
            </svg>
        </div>
        <span className="font-bold dark:font-semibold text-lg md:text-xl">GolfShop</span>
    </Link>
  )
}

export default Logo