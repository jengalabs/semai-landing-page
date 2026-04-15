import Image from "next/image"
import Link from "next/link"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex items-center gap-3">
            <Image
              src="/semai-logo.png"
              alt="Semai Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <div>
              <p className="font-bold text-foreground">Semai</p>
              <p className="text-sm text-muted-foreground">SMS AI Chat Bot</p>
            </div>
          </div>
          
          <nav className="flex flex-wrap justify-center gap-6 text-sm">
            <Link href="#how-it-works" className="text-muted-foreground hover:text-foreground transition-colors">
              How it Works
            </Link>
            <Link href="#features" className="text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
          </nav>
          
          <div className="text-center md:text-right">
            <p className="text-sm text-muted-foreground">
              Text <span className="font-semibold text-foreground">SEMAI</span> to <span className="font-semibold text-foreground">20880</span>
            </p>
            <p className="text-xs text-muted-foreground mt-1">
              Safaricom & Airtel Kenya
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Semai. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
