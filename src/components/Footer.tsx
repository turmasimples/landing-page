import { TurmaLogo } from '@/components/TurmaLogo'
import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-muted border-t">
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <TurmaLogo size="sm" />
            <p className="text-sm text-muted-foreground">
              Automatize matrículas, cobranças e certificados da sua escola em minutos.
            </p>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Produto</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#beneficios" className="hover:text-foreground transition-colors">Benefícios</Link></li>
              <li><Link href="#precos" className="hover:text-foreground transition-colors">Preços</Link></li>
              <li><Link href="#demo" className="hover:text-foreground transition-colors">Demonstração</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Suporte</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="#faq" className="hover:text-foreground transition-colors">FAQ</Link></li>
              <li><Link href="#contato" className="hover:text-foreground transition-colors">Contato</Link></li>
              {/* <li><Link href="/ajuda" className="hover:text-foreground transition-colors">Central de Ajuda</Link></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link href="/termos" className="hover:text-foreground transition-colors">Termos de Uso</Link></li>
              <li><Link href="/privacidade" className="hover:text-foreground transition-colors">Política de Privacidade</Link></li>
              <li><Link href="/sobre" className="hover:text-foreground transition-colors">Sobre</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t mt-8 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2025 Turma Simples. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}