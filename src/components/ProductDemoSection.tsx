'use client'

import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Users, FileText, CreditCard, CheckCircle } from 'lucide-react'
import { motion } from 'framer-motion'

const features = [
  {
    icon: Users,
    title: 'Crie alunos',
    description: 'Cadastre alunos rapidamente com dados essenciais'
  },
  {
    icon: FileText,
    title: 'Gere certificados',
    description: 'Certificados profissionais em PDF com validação'
  },
  {
    icon: CreditCard,
    title: 'Controle cobranças',
    description: 'Acompanhe pagamentos e envie lembretes automáticos'
  }
]

export function ProductDemoSection() {
  return (
    <section id="demo" className="py-20 bg-white">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
            Veja como é simples gerenciar sua escola
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Interface intuitiva que qualquer pessoa consegue usar. Se você sabe usar WhatsApp, sabe usar o Turma Simples.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start space-x-4"
                >
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </motion.div>
              )
            })}
            
            <div className="pt-4">
              <div className="flex items-center space-x-2 text-green-600">
                <CheckCircle className="h-5 w-5" />
                <span className="font-medium">Configuração em menos de 5 minutos</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-2xl border-0">
              <CardContent className="p-0">
                <div className="bg-gray-900 px-4 py-3 rounded-t-lg">
                  <div className="flex items-center space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    <div className="ml-4 text-sm text-gray-300">app.turmasimples.com.br</div>
                  </div>
                </div>
                
                <div className="p-6 bg-white">
                  <div className="space-y-6">
                    {/* Header do Dashboard */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-2xl font-bold text-gray-900">Dashboard</h3>
                      <Badge className="bg-green-100 text-green-800">Online</Badge>
                    </div>
                    
                    {/* Cards de estatísticas */}
                    <div className="grid grid-cols-3 gap-4">
                      <div className="bg-blue-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-blue-600">127</div>
                        <div className="text-sm text-gray-600">Alunos ativos</div>
                      </div>
                      <div className="bg-green-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-green-600">R$ 24.5k</div>
                        <div className="text-sm text-gray-600">Receita mensal</div>
                      </div>
                      <div className="bg-purple-50 p-4 rounded-lg text-center">
                        <div className="text-2xl font-bold text-purple-600">89</div>
                        <div className="text-sm text-gray-600">Certificados</div>
                      </div>
                    </div>
                    
                    {/* Lista de alunos */}
                    <div className="space-y-3">
                      <h4 className="font-semibold text-gray-900">Alunos recentes</h4>
                      <div className="space-y-2">
                        {[
                          { name: 'Ana Silva', course: 'Inglês Básico', status: 'Ativo' },
                          { name: 'João Santos', course: 'Excel Avançado', status: 'Pendente' },
                          { name: 'Maria Costa', course: 'Estética Facial', status: 'Ativo' }
                        ].map((student, index) => (
                          <div key={index} className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                            <div>
                              <div className="font-medium text-gray-900">{student.name}</div>
                              <div className="text-sm text-gray-600">{student.course}</div>
                            </div>
                            <Badge 
                              variant={student.status === 'Ativo' ? 'default' : 'secondary'}
                              className={student.status === 'Ativo' ? 'bg-green-100 text-green-800' : ''}
                            >
                              {student.status}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}