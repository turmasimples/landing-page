'use client'

import { Card, CardContent } from '@/components/ui/card'
import { CheckCircle, Clock, Rocket, Users } from 'lucide-react'
import { motion } from 'framer-motion'

const timelineItems = [
  {
    icon: CheckCircle,
    title: 'Pesquisa e Validação',
    description: 'Entrevistas com 50+ escolas pequenas',
    date: 'Dezembro 2024',
    status: 'completed',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Clock,
    title: 'Desenvolvimento MVP',
    description: 'Construindo as funcionalidades principais',
    date: '2024 - Setembro 2025',
    status: 'in-progress',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Users,
    title: 'Testes Beta',
    description: 'Primeiros usuários testando o sistema',
    date: 'Outubro 2025',
    status: 'upcoming',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Rocket,
    title: 'Lançamento Oficial',
    description: 'Disponível para todas as escolas',
    date: 'Novembro 2025',
    status: 'upcoming',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  }
]

export function LaunchTimelineSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Cronograma de Desenvolvimento
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transparência total: veja exatamente onde estamos e quando você poderá usar o Turma Simples
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {timelineItems.map((item, index) => {
            const Icon = item.icon
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className={`h-full transition-all duration-300 ${
                  item.status === 'completed' ? 'border-green-200 shadow-md' :
                  item.status === 'in-progress' ? 'border-blue-200 shadow-lg scale-105' :
                  'border-gray-200 opacity-75'
                }`}>
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${item.bgColor} flex items-center justify-center relative`}>
                      <Icon className={`h-8 w-8 ${item.color}`} />
                      {item.status === 'completed' && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <CheckCircle className="h-4 w-4 text-white" />
                        </div>
                      )}
                      {item.status === 'in-progress' && (
                        <div className="absolute -top-1 -right-1 w-6 h-6 bg-blue-500 rounded-full animate-pulse" />
                      )}
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold text-foreground">
                        {item.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {item.description}
                      </p>
                      <p className={`text-sm font-medium ${
                        item.status === 'completed' ? 'text-green-600' :
                        item.status === 'in-progress' ? 'text-blue-600' :
                        'text-muted-foreground'
                      }`}>
                        {item.date}
                      </p>
                    </div>
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
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 max-w-4xl mx-auto text-white">
            <h3 className="text-2xl font-bold mb-4">
              🎯 Meta: 100 Escolas na Lista de Espera
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Quando atingirmos 100 cadastros, liberaremos acesso antecipado para os primeiros 20 usuários com <strong>desconto vitalício de 50%</strong>.
            </p>
            <div className="bg-white/20 rounded-full h-4 mb-4">
              <div className="bg-white rounded-full h-4 w-1/3 transition-all duration-500" />
            </div>
            <p className="text-sm opacity-75">
              32 de 100 cadastros • Faltam apenas 68 vagas!
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}