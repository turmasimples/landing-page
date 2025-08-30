'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { motion } from 'framer-motion'

const faqs = [
  {
    question: 'Posso cancelar quando quiser?',
    answer: 'Sim, você pode cancelar sua assinatura a qualquer momento sem multas ou taxas. O cancelamento é imediato e você mantém acesso até o final do período pago.'
  },
  {
    question: 'Preciso de cartão de crédito para o teste grátis?',
    answer: 'Não! Nosso teste grátis de 14 dias não requer cartão de crédito. Você só precisa fornecer seus dados básicos e pode usar todas as funcionalidades sem compromisso.'
  },
  {
    question: 'O sistema funciona em celular?',
    answer: 'Sim, o Turma Simples é totalmente responsivo e funciona perfeitamente em celulares, tablets e computadores. Você pode gerenciar sua escola de qualquer lugar.'
  },
  {
    question: 'O sistema substitui meu WhatsApp?',
    answer: 'Não, o Turma Simples se integra com o WhatsApp, não o substitui. Você continua usando seu WhatsApp normalmente, mas agora pode enviar mensagens automáticas de cobrança e lembretes através da nossa plataforma.'
  },
  {
    question: 'Como funciona a integração com WhatsApp?',
    answer: 'Conectamos sua conta do WhatsApp Business à nossa plataforma de forma segura. Assim, você pode enviar lembretes de pagamento, confirmações de matrícula e outras mensagens automaticamente, mantendo o controle total.'
  },
  {
    question: 'Os certificados têm validade jurídica?',
    answer: 'Sim, nossos certificados são gerados em PDF com assinatura digital e código de validação único. Eles podem ser verificados publicamente em nosso site e têm total validade jurídica para cursos livres.'
  },
  {
    question: 'Quantos alunos posso cadastrar?',
    answer: 'No Plano Starter você pode cadastrar até 100 alunos. No Plano Pro não há limite de alunos. Se você precisar de mais no Starter, pode fazer upgrade a qualquer momento.'
  },
  {
    question: 'Vocês oferecem suporte em português?',
    answer: 'Sim! Nossa equipe de suporte é 100% brasileira e atende em português. No Plano Starter o suporte é por email, e no Plano Pro você tem suporte prioritário com chat ao vivo.'
  }
]

export function FAQSection() {
  return (
    <section id="faq" className="py-20 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Perguntas frequentes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tire suas dúvidas sobre o Turma Simples. Se não encontrar a resposta, entre em contato conosco.
          </p>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border rounded-lg px-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 hover:text-blue-600 transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pt-2 pb-4">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gray-50 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-600 mb-6">
              Nossa equipe está pronta para ajudar você a escolher o melhor plano e tirar todas as suas dúvidas.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="mailto:contato@turmasimples.com.br" 
                className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
              >
                Enviar email
              </a>
              <a 
                href="https://wa.me/5585987450837" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}