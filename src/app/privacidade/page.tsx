'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'

export default function PrivacidadePage() {
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
          <h1 className="text-4xl font-bold text-foreground mb-8">Política de Privacidade</h1>
          
          <div className="prose prose-lg max-w-none text-muted-foreground space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">1. Coleta de Dados</h2>
              <p>
                Coletamos informações de escolas, professores e alunos, tais como: nome, e-mail, telefone, 
                CPF (opcional), histórico de matrícula, informações de pagamento.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">2. Finalidade</h2>
              <p>Os dados são utilizados exclusivamente para:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Processar matrículas e cobranças;</li>
                <li>Emitir certificados digitais;</li>
                <li>Enviar lembretes automáticos via e-mail ou WhatsApp;</li>
                <li>Melhorar a experiência do usuário.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">3. Base Legal (LGPD)</h2>
              <p>O tratamento de dados ocorre com base em:</p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Execução contratual</strong> (art. 7º, V, LGPD);</li>
                <li><strong>Consentimento do titular</strong> para comunicações e certificados digitais (art. 7º, I).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">4. Armazenamento e Segurança</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Dados armazenados em servidores seguros, com criptografia.</li>
                <li>Acesso restrito à equipe autorizada.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">5. Compartilhamento</h2>
              <p>
                Os dados não são vendidos ou compartilhados com terceiros, exceto quando necessário para:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Processamento de pagamentos (provedores financeiros);</li>
                <li>Envio de mensagens (provedores de WhatsApp).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">6. Direitos do Titular</h2>
              <p>
                Em conformidade com a LGPD, o titular pode solicitar a qualquer momento:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Confirmação de tratamento;</li>
                <li>Acesso e correção dos dados;</li>
                <li>Exclusão ou anonimização (exceto obrigações legais, como dados fiscais).</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">7. Retenção</h2>
              <p>
                Os dados serão armazenados enquanto o usuário mantiver vínculo contratual com o 
                <strong>Turma Simples</strong> e/ou pelo prazo necessário ao cumprimento de obrigações legais.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-foreground mb-4">8. Alterações</h2>
              <p>
                Reservamo-nos o direito de alterar esta Política de Privacidade a qualquer momento, 
                sendo as alterações comunicadas na própria plataforma.
              </p>
            </section>

            <div className="bg-turma-blue-50 p-6 rounded-lg border border-turma-blue-200 mt-8">
              <h3 className="text-lg font-semibold text-foreground mb-2">Contato para Questões de Privacidade</h3>
              <p className="text-sm">
                Para exercer seus direitos ou esclarecer dúvidas sobre o tratamento de dados, 
                entre em contato conosco através do e-mail: <strong>privacidade@turmasimples.com.br</strong>
              </p>
            </div>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}