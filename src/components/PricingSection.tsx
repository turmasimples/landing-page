'use client'

import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Check, X } from 'lucide-react'
import { motion } from 'framer-motion'

interface PricingSectionProps {
  onOpenLeadForm: (selectedPlan?: string) => void
}

const plans = [
  {
    name: 'Plano Starter',
    originalPrice: 'R$ 297',
    price: 'R$ 148',
    period: '/mês',
    description: 'Ideal para escolas pequenas que estão começando',
    popular: false,
    discount: '50% OFF',
    discountPeriod: '3 primeiros meses',
    features: [
      { name: 'Até 100 alunos', included: true },
      { name: 'Matrículas digitais', included: true },
      { name: 'Cobranças básicas', included: true },
      { name: 'Dashboard simples', included: true },
      { name: 'Suporte por email', included: true },
      { name: 'Setup gratuito (R$ 497)', included: true },
      { name: 'Certificados automáticos', included: false },
      { name: 'Integração WhatsApp', included: false },
      { name: 'Relatórios avançados', included: false }
    ]
  },
  {
    name: 'Plano Pro',
    originalPrice: 'R$ 594',
    price: 'R$ 297',
    period: '/mês',
    description: 'Solução completa para escolas que querem crescer',
    popular: true,
    discount: '50% OFF',
    discountPeriod: '3 primeiros meses',
    features: [
      { name: 'Até 500 alunos', included: true },
      { name: 'Matrículas digitais', included: true },
      { name: 'Cobranças automáticas completas (PIX/Cartão/Boleto)', included: true },
      { name: 'Dashboard avançado', included: true },
      { name: 'Suporte prioritário', included: true },
      { name: 'Setup gratuito (R$ 497)', included: true },
      { name: 'Certificados automáticos', included: true },
      { name: 'Integração WhatsApp', included: true },
      { name: 'Relatórios avançados', included: true }
    ]
  }
]

export function PricingSection({ onOpenLeadForm }: PricingSectionProps) {
  return (
    <section id="precos" className="py-20 bg-gray-50">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-red-100 to-orange-100 text-red-800 rounded-full text-sm font-medium mb-4">
            🔥 Oferta de Pré-Lançamento • Apenas para Lista de Espera
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            <span className="text-red-600">50% OFF nos 3 Primeiros Meses</span> para os Primeiros
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Preços especiais e limitados para quem se cadastrar na lista de espera. <strong>Desconto válido apenas nos 3 primeiros meses após o lançamento.</strong>
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className={`h-full relative ${plan.popular ? 'border-red-500 border-2 shadow-xl' : 'shadow-lg'}`}>
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-red-600 text-white px-4 py-1">
                      🔥 Mais Popular
                    </Badge>
                  </div>
                )}
                
                <div className="absolute -top-2 -right-2">
                  <Badge className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-3 py-1 text-xs font-bold">
                    {plan.discount}
                  </Badge>
                </div>
                
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {plan.name}
                  </CardTitle>
                  <div className="mt-4">
                    <div className="flex items-center justify-center gap-2">
                      <span className="text-lg text-gray-500 line-through">{plan.originalPrice}</span>
                      <span className="text-4xl font-bold text-red-600">{plan.price}</span>
                      <span className="text-gray-600">{plan.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mt-2">{plan.description}</p>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        {feature.included ? (
                          <Check className="h-5 w-5 text-green-600 flex-shrink-0" />
                        ) : (
                          <X className="h-5 w-5 text-gray-400 flex-shrink-0" />
                        )}
                        <span className={`text-sm ${feature.included ? 'text-gray-900' : 'text-gray-500'}`}>
                          {feature.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${plan.popular ? 'bg-red-600 hover:bg-red-700' : 'bg-gray-900 hover:bg-gray-800'}`}
                    size="lg"
                    onClick={() => onOpenLeadForm(plan.name === 'Plano Starter' ? 'starter' : 'pro')}
                  >
                    🎯 Garantir Este Preço
                  </Button>
                  
                  <div className="text-center text-sm text-gray-500">
                    ✓ 50% OFF por 3 meses • ✓ Setup gratuito • ✓ Sem compromisso
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-2xl p-8 max-w-4xl mx-auto relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-yellow-400 text-red-600 px-4 py-2 rounded-bl-2xl font-bold text-sm">
              ⚡ ÚLTIMAS VAGAS
            </div>
            <h3 className="text-2xl font-bold mb-4">
              🚨 Oferta Limitada: Apenas 32 Vagas Restantes
            </h3>
            <p className="text-lg mb-6 opacity-90">
              Depois que atingirmos 100 cadastros, esses preços promocionais <strong>nunca mais voltarão</strong>. Não perca sua chance de economizar nos 3 primeiros meses.
            </p>
            <Button 
              variant="secondary" 
              size="lg"
              className="bg-white text-red-600 hover:bg-gray-100 font-bold"
              onClick={() => onOpenLeadForm()}
            >
              🎯 Garantir Minha Vaga VIP Agora
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}