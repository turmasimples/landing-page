'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

interface CTASectionProps {
  onOpenLeadForm: () => void
}

export function CTASection({ onOpenLeadForm }: CTASectionProps) {
  return (
    <section className="py-20 bg-gradient-to-br from-red-600 to-orange-800 text-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-orange-500"></div>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-8 max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center px-6 py-3 bg-yellow-400 text-red-800 rounded-full text-sm font-bold mb-4">
            🚨 ÚLTIMAS HORAS • OFERTA LIMITADA
          </div>
          
          <h2 className="text-3xl lg:text-5xl font-bold leading-tight">
            Não Perca Sua Chance de Economizar <span className="text-yellow-300">nos Primeiros Meses</span>
          </h2>
          
          <p className="text-xl lg:text-2xl opacity-90 leading-relaxed">
            <strong>Apenas 32 vagas restantes</strong> para garantir 50% OFF nos 3 primeiros meses + setup gratuito. Depois disso, esses preços nunca mais voltarão.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6 my-12">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span className="text-lg">50% OFF nos 3 Primeiros Meses</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span className="text-lg">Setup Gratuito (R$ 497)</span>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="flex items-center space-x-3"
            >
              <CheckCircle className="h-6 w-6 text-yellow-400 flex-shrink-0" />
              <span className="text-lg">Acesso Antecipado</span>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <Button 
              size="lg" 
              className="bg-yellow-400 text-red-800 hover:bg-yellow-300 text-xl px-12 py-6 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 font-bold animate-pulse"
              onClick={onOpenLeadForm}
            >
              🎯 GARANTIR MINHA VAGA VIP AGORA
              <ArrowRight className="ml-2 h-6 w-6" />
            </Button>
            
            <p className="text-sm opacity-75">
              ⏰ Restam apenas <strong>32 vagas</strong> • Oferta expira em breve
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="pt-8 border-t border-blue-500 border-opacity-30"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl font-bold text-yellow-400">68</div>
                <div className="text-sm opacity-75">Pessoas na lista</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">32</div>
                <div className="text-sm opacity-75">Vagas restantes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">50%</div>
                <div className="text-sm opacity-75">Desconto nos 3 primeiros meses</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-yellow-400">R$ 497</div>
                <div className="text-sm opacity-75">Setup gratuito</div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background decorativo */}
      <div className="absolute inset-0 bg-gradient-to-r from-red-600 via-orange-600 to-red-800 opacity-10"></div>
    </section>
  )
}