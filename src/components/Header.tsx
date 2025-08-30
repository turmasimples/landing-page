'use client'

import { TurmaLogo } from '@/components/TurmaLogo'
import Link from 'next/link'

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center">
           <TurmaLogo size="md" />
         </Link>
        
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="#beneficios" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Benefícios
          </Link>
          <Link href="#precos" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </Link>
          <Link href="#faq" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            FAQ
          </Link>
          <Link href="#contato" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Contato
          </Link>
        </nav>
        
        {/* <Button className="bg-primary hover:bg-accent text-primary-foreground" onClick={onOpenLeadForm}>
          Teste Grátis
        </Button> */}
      </div>
    </header>
  )
}