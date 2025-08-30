'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function TermosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <h1 className="text-4xl font-bold text-foreground mb-8">Termos de Uso</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Aceitação dos Termos</h2>
              <p>
                Ao utilizar o sistema <strong>Turma Simples</strong>, o usuário (escola, curso livre ou profissional independente) 
                concorda integralmente com estes Termos de Uso. Caso não concorde, deve se abster de utilizar a plataforma.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Objeto</h2>
              <p>
                O <strong>Turma Simples</strong> é um software como serviço (SaaS) que oferece ferramentas para gestão educacional, 
                incluindo matrícula digital, cobrança recorrente, emissão de certificados digitais e comunicação automatizada via WhatsApp.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Responsabilidades do Usuário</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Garantir que os dados inseridos na plataforma sejam verdadeiros e atualizados.</li>
                <li>Utilizar a plataforma apenas para fins lícitos relacionados à sua atividade educacional.</li>
                <li>Responsabilizar-se pelo conteúdo de cursos oferecidos e pela veracidade das informações em certificados emitidos.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Responsabilidades do Turma Simples</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Disponibilizar acesso à plataforma, conforme plano contratado.</li>
                <li>Manter os dados hospedados em ambiente seguro, de acordo com a LGPD.</li>
                <li>Oferecer suporte técnico em canais oficiais.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Limitações</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  O <strong>Turma Simples</strong> não é responsável pelo reconhecimento de cursos pelo MEC, 
                  ficando restrito a cursos livres e atividades não regulamentadas.
                </li>
                <li>
                  Não nos responsabilizamos por inadimplência de alunos ou falhas de terceiros 
                  (provedores de pagamento, WhatsApp, etc.).
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Planos e Pagamentos</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>O usuário concorda com o valor do plano escolhido, podendo cancelá-lo a qualquer momento.</li>
                <li>Não há reembolso proporcional em caso de cancelamento no meio do período.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Propriedade Intelectual</h2>
              <p>
                Todo o código, design e conteúdo do <strong>Turma Simples</strong> pertencem exclusivamente à 
                <strong> JOAQUIM ALVES...LTDA</strong>. É proibido copiar, modificar ou redistribuir sem autorização.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Foro</h2>
              <p>
                Fica eleito o foro da comarca de <strong>Fortaleza/CE</strong> para dirimir quaisquer controvérsias 
                decorrentes destes Termos.
              </p>
            </section>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}