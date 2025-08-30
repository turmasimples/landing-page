'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'
import { motion } from 'framer-motion'

const testimonials = [
  {
    name: 'Maria Silva',
    role: 'Diretora da Escola de Idiomas Fluente',
    content: 'Antes do Turma Simples, eu perdia horas organizando matrículas e cobrando mensalidades. Agora tudo é automático e meus alunos adoram receber os lembretes pelo WhatsApp.',
    rating: 5,
    avatar: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="rounded-full">
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#ffeaa7" />
            <stop offset="100%" stopColor="#fdcb6e" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#grad1)" />
        {/* Rosto */}
        <circle cx="24" cy="22" r="12" fill="#f4c2a1" />
        {/* Cabelo */}
        <path d="M12 18c0-6.6 5.4-12 12-12s12 5.4 12 12c0-2-1.6-4-4-4h-16c-2.4 0-4 2-4 4z" fill="#8b4513" />
        {/* Olhos */}
        <circle cx="19" cy="20" r="1.5" fill="#333" />
        <circle cx="29" cy="20" r="1.5" fill="#333" />
        {/* Nariz */}
        <ellipse cx="24" cy="23" rx="1" ry="1.5" fill="#e8a87c" />
        {/* Boca */}
        <path d="M21 26c1.5 1 4.5 1 6 0" stroke="#d63031" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Corpo */}
        <path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#e17055" />
      </svg>
    )
  },
  {
    name: 'João Santos',
    role: 'Instrutor de Curso Técnico em TI',
    content: 'A emissão de certificados que antes demorava dias, agora é instantânea. Meus alunos ficam impressionados com a profissionalidade do sistema.',
    rating: 5,
    avatar: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="rounded-full">
        <defs>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#74b9ff" />
            <stop offset="100%" stopColor="#0984e3" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#grad2)" />
        {/* Rosto */}
        <circle cx="24" cy="22" r="12" fill="#deb887" />
        {/* Cabelo */}
        <path d="M12 16c0-6.6 5.4-12 12-12s12 5.4 12 12c0-3-2-5-5-5h-14c-3 0-5 2-5 5z" fill="#2d3436" />
        {/* Óculos */}
        <circle cx="19" cy="20" r="4" fill="none" stroke="#2d3436" strokeWidth="1.5" />
        <circle cx="29" cy="20" r="4" fill="none" stroke="#2d3436" strokeWidth="1.5" />
        <line x1="23" y1="20" x2="25" y2="20" stroke="#2d3436" strokeWidth="1.5" />
        {/* Olhos */}
        <circle cx="19" cy="20" r="1.5" fill="#333" />
        <circle cx="29" cy="20" r="1.5" fill="#333" />
        {/* Nariz */}
        <ellipse cx="24" cy="23" rx="1" ry="1.5" fill="#cd9777" />
        {/* Boca */}
        <path d="M21 26c1.5 1 4.5 1 6 0" stroke="#2d3436" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        {/* Corpo */}
        <path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#6c5ce7" />
      </svg>
    )
  },
  {
    name: 'Ana Costa',
    role: 'Proprietária do Curso de Estética Bella',
    content: 'Reduzi a inadimplência em 70% com os lembretes automáticos. O sistema é tão simples que até minha mãe consegue usar!',
    rating: 5,
    avatar: (
      <svg width="48" height="48" viewBox="0 0 48 48" className="rounded-full">
        <defs>
          <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fd79a8" />
            <stop offset="100%" stopColor="#e84393" />
          </linearGradient>
        </defs>
        <circle cx="24" cy="24" r="24" fill="url(#grad3)" />
        {/* Rosto */}
        <circle cx="24" cy="22" r="12" fill="#f4c2a1" />
        {/* Cabelo longo */}
        <path d="M12 14c0-6.6 5.4-12 12-12s12 5.4 12 12v8c0 2-1 4-3 4h-18c-2 0-3-2-3-4v-8z" fill="#6c5ce7" />
        <path d="M10 20c2 4 4 8 4 12h20c0-4 2-8 4-12" fill="#6c5ce7" />
        {/* Olhos */}
        <circle cx="19" cy="20" r="1.5" fill="#333" />
        <circle cx="29" cy="20" r="1.5" fill="#333" />
        {/* Cílios */}
        <path d="M17 18l1 1M20 18l1 1M27 18l1 1M30 18l1 1" stroke="#333" strokeWidth="1" />
        {/* Nariz */}
        <ellipse cx="24" cy="23" rx="1" ry="1.5" fill="#e8a87c" />
        {/* Boca com batom */}
        <ellipse cx="24" cy="26" rx="3" ry="1.5" fill="#e84393" />
        {/* Corpo */}
        <path d="M8 40c0-8.8 7.2-16 16-16s16 7.2 16 16" fill="#00b894" />
      </svg>
    )
  }
]

export function SocialProofSection() {
  return (
    <section className="py-20 bg-muted">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-foreground">
            Mais de 500 escolas já confiam no Turma Simples
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Veja o que nossos clientes estão dizendo sobre a transformação em suas escolas
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6 space-y-4">
                  <div className="flex items-center space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  
                  <blockquote className="text-foreground leading-relaxed">
                    {testimonial.content}
                  </blockquote>
                  
                  <div className="flex items-center space-x-3 pt-4 border-t">
                    <div className="w-12 h-12 flex items-center justify-center">
                      {testimonial.avatar}
                    </div>
                    <div>
                      <div className="font-semibold text-foreground">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    </div>
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
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">500+</div>
              <div className="text-sm text-muted-foreground">Escolas ativas</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">50k+</div>
              <div className="text-sm text-muted-foreground">Alunos matriculados</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">98%</div>
              <div className="text-sm text-muted-foreground">Satisfação</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary">24/7</div>
              <div className="text-sm text-muted-foreground">Suporte</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}