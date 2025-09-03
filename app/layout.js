```javascript
import { Inter } from 'next/font/google'
import Link from 'next/link'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Bird Work Portfolio',
  description: "The professional portfolio of Pip Pipson, Avian Architect & Sonic Innovator.",
}

const Header = () => (
  <header className="bg-secondary/80 backdrop-blur-sm sticky top-0 z-50 border-b border-primary">
    <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-accent hover:text-blue-300 transition-colors">
        Pip Pipson
      </Link>
      <div className="flex items-center space-x-4 md:space-x-6">
        <Link href="/" className="text-light-gray hover:text-light transition-colors">
          Home
        </Link>
        <Link href="/projects" className="text-light-gray hover:text-light transition-colors">
          Projects
        </Link>
      </div>
    </nav>
  </header>
);

const Footer = () => (
  <footer className="bg-secondary border-t border-primary">
    <div className="container mx-auto px-6 py-6 text-center text-light-gray">
      <p>&copy; {new Date().getFullYear()} Pip Pipson. All rights reserved.</p>
      <p className="text-sm mt-1">Crafting nests and melodies with passion.</p>
    </div>
  </footer>
);

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
```