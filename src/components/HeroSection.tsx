'use client'

import { Button } from '@/components/ui/button'
import { GraduationCap, MessageCircle, FileText, CreditCard } from 'lucide-react'
import { motion } from 'framer-motion'

interface HeroSectionProps {
  onOpenLeadForm: () => void
}

export function HeroSection({ onOpenLeadForm }: HeroSectionProps) {
  return (
    <section className="relative py-20 lg:py-32 bg-gradient-to-br from-turma-blue-50 to-background overflow-hidden">
      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <div className="inline-flex items-center px-4 py-2 bg-orange-100 text-orange-800 rounded-full text-sm font-medium mb-4">
                🚀 Em desenvolvimento • Lançamento em Outubro 2025
              </div>
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground leading-tight">
                O Primeiro Sistema de Gestão{' '}
                <span className="text-primary">Feito para Escolas Pequenas</span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                <strong>Seja um dos primeiros!</strong> Cadastre-se na lista de espera e ganhe <span className="text-primary font-semibold">50% de desconto nos 3 primeiros meses</span> + setup gratuito quando lançarmos.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-accent text-primary-foreground text-lg px-8 py-6 shadow-lg"
                onClick={onOpenLeadForm}
              >
                🎯 Entrar na Lista de Espera
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground"
                onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Ver como vai funcionar
              </Button>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <span>🎁 50% OFF nos 3 primeiros meses</span>
              <span>⚡ Setup gratuito</span>
              <span>🇧🇷 Suporte em português</span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 border">
              <div className="grid grid-cols-2 gap-6">
                <div className="flex items-center space-x-3 p-4 bg-blue-50 rounded-lg">
                  <GraduationCap className="h-8 w-8 text-blue-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Matrículas</div>
                    <div className="text-sm text-gray-600">Digitais</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-green-50 rounded-lg">
                  <CreditCard className="h-8 w-8 text-green-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Cobranças</div>
                    <div className="text-sm text-gray-600">Automáticas</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-purple-50 rounded-lg">
                  <FileText className="h-8 w-8 text-purple-600" />
                  <div>
                    <div className="font-semibold text-gray-900">Certificados</div>
                    <div className="text-sm text-gray-600">Em PDF</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-3 p-4 bg-orange-50 rounded-lg">
                  <MessageCircle className="h-8 w-8 text-orange-600" />
                  <div>
                    <div className="font-semibold text-gray-900">WhatsApp</div>
                    <div className="text-sm text-gray-600">Integrado</div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Elementos decorativos */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-20 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-200 rounded-full opacity-20 animate-pulse delay-1000"></div>
          </motion.div>
        </div>
      </div>
      
      {/* Background decorativo */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-blue-100 to-transparent opacity-50"></div>
    </section>
  )
}