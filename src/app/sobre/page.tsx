'use client'

import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { motion } from 'framer-motion'
import { CheckCircle, Users, Zap, Shield } from 'lucide-react'

export default function SobrePage() {
  const problems = [
    'Matrículas feitas manualmente',
    'Atrasos e inadimplência recorrente',
    'Certificados criados no Word ou Canva, sem segurança',
    'Sistemas de gestão caros e complicados, inacessíveis para pequenos negócios'
  ]

  const solutions = [
    {
      icon: Users,
      title: 'Gestão simples, prática e acessível',
      description: 'Interface intuitiva que qualquer pessoa pode usar'
    },
    {
      icon: Zap,
      title: 'Integração direta com WhatsApp',
      description: 'A ferramenta mais usada pelas escolas'
    },
    {
      icon: CheckCircle,
      title: 'Automação de cobranças e lembretes',
      description: 'Reduzindo inadimplência em até 30%'
    },
    {
      icon: Shield,
      title: 'Certificados digitais com validação online',
      description: 'Trazendo profissionalismo e confiança'
    }
  ]

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
          <h1 className="text-4xl font-bold text-foreground mb-8 text-center">Sobre Nós</h1>
          
          <div className="space-y-12">
            {/* Missão */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center"
            >
              <h2 className="text-3xl font-semibold text-foreground mb-6">Nossa Missão</h2>
              <p className="text-xl text-muted-foreground leading-relaxed">
                O <strong className="text-primary">Turma Simples</strong> nasceu com a missão de 
                <strong> simplificar a gestão de escolas e cursos livres no Brasil</strong>.
              </p>
            </motion.section>

            {/* Problemas identificados */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">Os Problemas que Identificamos</h2>
              <p className="text-muted-foreground mb-6">
                Percebemos que milhares de instituições enfrentam os mesmos problemas todos os dias:
              </p>
              <div className="grid gap-4">
                {problems.map((problem, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                    className="flex items-start gap-3 p-4 bg-red-50 border border-red-200 rounded-lg"
                  >
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0" />
                    <p className="text-red-800">{problem}</p>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Nossa solução */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">Nossa Solução</h2>
              <p className="text-muted-foreground mb-8">
                Nossa solução foi desenhada para mudar esse cenário:
              </p>
              <div className="grid md:grid-cols-2 gap-6">
                {solutions.map((solution, index) => {
                  const Icon = solution.icon
                  return (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 1 + index * 0.1 }}
                      className="p-6 bg-turma-blue-50 border border-turma-blue-200 rounded-lg"
                    >
                      <Icon className="w-8 h-8 text-primary mb-4" />
                      <h3 className="text-lg font-semibold text-foreground mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground">{solution.description}</p>
                    </motion.div>
                  )
                })}
              </div>
            </motion.section>

            {/* Público-alvo */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="bg-muted p-8 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-6">Para Quem Criamos</h2>
              <p className="text-muted-foreground mb-4">
                Seja você dono de um <strong>curso de idiomas</strong>, um <strong>professor independente</strong>, 
                um <strong>centro de estética</strong> ou uma <strong>escola técnica</strong>, o 
                <strong className="text-primary"> Turma Simples</strong> foi feito para:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Economizar seu tempo</li>
                <li>Profissionalizar sua operação</li>
                <li>Garantir mais tranquilidade na gestão</li>
              </ul>
            </motion.section>

            {/* Filosofia */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="text-center bg-gradient-to-r from-primary/10 to-turma-blue-100 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-semibold text-foreground mb-4">Nossa Filosofia</h2>
              <p className="text-xl text-primary font-semibold">
                Se você sabe usar o WhatsApp, sabe usar o Turma Simples.
              </p>
            </motion.section>
          </div>
        </motion.div>
      </main>
      
      <Footer />
    </div>
  )
}