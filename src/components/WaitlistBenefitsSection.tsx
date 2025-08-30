'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Gift, Zap, Crown, HeadphonesIcon, Star, TrendingUp } from 'lucide-react'
import { motion } from 'framer-motion'

interface WaitlistBenefitsSectionProps {
  onOpenLeadForm: () => void
}

const benefits = [
  {
    icon: Gift,
    title: '50% OFF nos 3 Primeiros Meses',
    description: 'Desconto especial nos seus primeiros meses',
    value: 'Economia de R$ 300',
    color: 'text-green-600',
    bgColor: 'bg-green-50'
  },
  {
    icon: Zap,
    title: 'Setup Gratuito',
    description: 'Configuração completa sem custo adicional',
    value: 'Valor: R$ 497',
    color: 'text-blue-600',
    bgColor: 'bg-blue-50'
  },
  {
    icon: Crown,
    title: 'Acesso Antecipado',
    description: 'Use antes de todos os outros',
    value: '30 dias de vantagem',
    color: 'text-purple-600',
    bgColor: 'bg-purple-50'
  },
  {
    icon: HeadphonesIcon,
    title: 'Suporte Prioritário',
    description: 'Atendimento VIP por WhatsApp',
    value: 'Resposta em 2h',
    color: 'text-orange-600',
    bgColor: 'bg-orange-50'
  },
  {
    icon: Star,
    title: 'Influência no Produto',
    description: 'Suas sugestões viram funcionalidades',
    value: 'Voz ativa no desenvolvimento',
    color: 'text-pink-600',
    bgColor: 'bg-pink-50'
  },
  {
    icon: TrendingUp,
    title: 'Treinamento Exclusivo',
    description: 'Webinar privado de implementação',
    value: 'Valor: R$ 297',
    color: 'text-indigo-600',
    bgColor: 'bg-indigo-50'
  }
]

export function WaitlistBenefitsSection({ onOpenLeadForm }: WaitlistBenefitsSectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-blue-50 to-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-blue-100 text-purple-800 rounded-full text-sm font-medium mb-4">
            🎁 Benefícios Exclusivos da Lista de Espera
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Mais de <span className="text-primary">R$ 1.500 em Benefícios</span> para os Primeiros
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Não é só um desconto. É um pacote completo de vantagens exclusivas para quem acredita no projeto desde o início.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
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
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-0 shadow-md hover:scale-105">
                  <CardContent className="p-6 text-center space-y-4">
                    <div className={`w-16 h-16 mx-auto rounded-full ${benefit.bgColor} flex items-center justify-center`}>
                      <Icon className={`h-8 w-8 ${benefit.color}`} />
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-xl font-semibold text-foreground">
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                      <p className={`text-sm font-medium ${benefit.color}`}>
                        {benefit.value}
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
          transition={{ duration: 0.6, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-red-500 to-orange-500 rounded-2xl p-8 max-w-4xl mx-auto text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-red-600 px-4 py-2 rounded-bl-2xl font-bold text-sm">
              ⚡ OFERTA LIMITADA
            </div>
            <h3 className="text-2xl font-bold mb-4">
              🔥 Apenas para os Primeiros 100 Cadastros
            </h3>
            <p className="text-lg opacity-90 mb-6">
              Depois que atingirmos 100 pessoas na lista, esses benefícios não estarão mais disponíveis. <strong>Garante sua vaga agora!</strong>
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-white text-red-600 hover:bg-gray-100 text-lg px-8 py-6 shadow-lg font-bold"
                onClick={onOpenLeadForm}
              >
                🎯 Garantir Minha Vaga VIP Agora
              </Button>
              <div className="text-sm opacity-75">
                ⏰ Restam apenas <strong>68 vagas</strong>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}