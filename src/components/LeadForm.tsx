'use client'

import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog'
import { Loader2, CheckCircle } from 'lucide-react'
import { leadFormSchema, type LeadFormData, formatPhone } from '@/lib/validations'

interface LeadFormProps {
  open: boolean
  onOpenChange: (open: boolean) => void
  selectedPlan?: string
}

export function LeadForm({ open, onOpenChange, selectedPlan }: LeadFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [error, setError] = useState('')

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset
  } = useForm<LeadFormData>({
    resolver: zodResolver(leadFormSchema),
    defaultValues: {
      name: '',
      email: '',
      phone: '',
      plan: ''
    }
  })

  const watchedPhone = watch('phone')
  const watchedPlan = watch('plan')

  // Atualiza o plano quando selectedPlan muda
  useEffect(() => {
    if (selectedPlan) {
      setValue('plan', selectedPlan)
    }
  }, [selectedPlan, setValue])

  const onSubmit = async (data: LeadFormData) => {
    setIsLoading(true)
    setError('')

    try {
      const response = await fetch('/api/lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      if (!response.ok) {
        throw new Error('Erro ao enviar formulário')
      }

      setIsSuccess(true)
      console.log('Lead enviado:', data)
      
      // Reset form after 2 seconds
      setTimeout(() => {
        reset()
        setIsSuccess(false)
        onOpenChange(false)
      }, 2000)
    } catch (_) {
      setError('Erro ao enviar formulário. Tente novamente.')
    } finally {
      setIsLoading(false)
    }
  }

  // Função para aplicar máscara no telefone
  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const formatted = formatPhone(e.target.value)
    setValue('phone', formatted)
  }

  const handleSelectChange = (value: string) => {
    setValue('plan', value)
  }

  if (isSuccess) {
    return (
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-md">
          <div className="flex flex-col items-center space-y-4 py-8">
            <CheckCircle className="h-16 w-16 text-green-600" />
            <div className="text-center space-y-2">
              <h3 className="text-xl font-semibold text-gray-900">Obrigado!</h3>
              <p className="text-gray-600">
                Recebemos seus dados. Em breve entraremos em contato para liberar seu teste grátis do Turma Simples.
              </p>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    )
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center">
            🎯 Entre na Lista de Espera VIP
          </DialogTitle>
          <DialogDescription className="text-center text-muted-foreground">
            Seja um dos primeiros a usar o Turma Simples e ganhe <strong className="text-primary">50% de desconto nos 3 primeiros meses</strong> + setup gratuito.
          </DialogDescription>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo</Label>
            <Input
              id="name"
              type="text"
              placeholder="Seu nome completo"
              {...register('name')}
              className={errors.name ? 'border-red-500' : ''}
            />
            {errors.name && (
              <p className="text-sm text-red-600">{errors.name.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="email">E-mail</Label>
            <Input
              id="email"
              type="email"
              placeholder="seu@email.com"
              {...register('email')}
              className={errors.email ? 'border-red-500' : ''}
            />
            {errors.email && (
              <p className="text-sm text-red-600">{errors.email.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">WhatsApp</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={watchedPhone}
              onChange={handlePhoneChange}
              className={errors.phone ? 'border-red-500' : ''}
            />
            {errors.phone && (
              <p className="text-sm text-red-600">{errors.phone.message}</p>
            )}
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="plan">Plano de interesse</Label>
            <Select value={watchedPlan} onValueChange={handleSelectChange}>
              <SelectTrigger className={errors.plan ? 'border-red-500' : ''}>
                <SelectValue placeholder="Selecione o plano de seu interesse" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="starter">Plano Starter - R$ 197/mês (50% OFF nos 3 primeiros meses)</SelectItem>
                <SelectItem value="pro">Plano Pro - R$ 297/mês (50% OFF nos 3 primeiros meses)</SelectItem>
                <SelectItem value="custom">Preciso de algo personalizado</SelectItem>
              </SelectContent>
            </Select>
            {errors.plan && (
              <p className="text-sm text-red-600">{errors.plan.message}</p>
            )}
          </div>
          
          {error && (
            <div className="text-sm text-red-600 bg-red-50 p-3 rounded-md">
              {error}
            </div>
          )}
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700" 
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Cadastrando...
              </>
            ) : (
              '🚀 Garantir Minha Vaga VIP'
            )}
          </Button>
          
          <p className="text-xs text-gray-500 text-center">
            Ao continuar, você concorda com nossos Termos de Uso e Política de Privacidade.
          </p>
        </form>
      </DialogContent>
    </Dialog>
  )
}