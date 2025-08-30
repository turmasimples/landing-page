'use client'

import { Card, CardContent } from '@/components/ui/card'
import { FileText, CreditCard, Award, BarChart3 } from 'lucide-react'
import { motion } from 'framer-motion'

const benefits = [
  {
    icon: FileText,
    title: 'Matrícula digital rápida',
    description: 'Contratos assinados online com validade jurídica. Seus alunos se matriculam em minutos, sem papelada.',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: CreditCard,
    title: 'Cobrança recorrente automática',
    description: 'PIX, boleto e lembretes automáticos no WhatsApp. Reduza a inadimplência e economize tempo.',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Award,
    title: 'Certificados em PDF automáticos',
    description: 'Gere certificados profissionais com validação pública. Seus alunos recebem na hora.',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: BarChart3,
    title: 'Dashboard simples',
    description: 'Tudo em um só lugar: alunos, turmas, pagamentos e relatórios. Interface intuitiva como WhatsApp.',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  }
]

export function BenefitsSection() {
  return (
    <section id="beneficios" className="py-10 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Sistema Completo para Escolas de Idiomas e Cursos Técnicos
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Pare de usar planilhas e WhatsApp para gestão. Sistema especializado em escolas pequenas, cursos livres e técnicos que precisam automatizar sem complicação.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300 border-0 shadow-md">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${benefit.bgColor} flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-blue-50 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Especializado em Escolas Pequenas Sem Sistema de Gestão
            </h3>
            <p className="text-lg text-gray-600">
              Desenvolvido para escolas de idiomas, música, cursos técnicos de TI, estética, enfermagem, elétrica, reforço escolar e infoprodutores que ainda usam planilhas e precisam reduzir inadimplência.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}