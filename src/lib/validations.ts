import { z } from 'zod'

// Schema de validação para o formulário de lead
export const leadFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Nome deve ter pelo menos 2 caracteres')
    .max(100, 'Nome deve ter no máximo 100 caracteres')
    .regex(/^[a-zA-ZÀ-ÿ\s]+$/, 'Nome deve conter apenas letras e espaços'),
  
  email: z
    .string()
    .min(1, 'Email é obrigatório')
    .email('Email deve ter um formato válido')
    .max(255, 'Email deve ter no máximo 255 caracteres'),
  
  phone: z
    .string()
    .min(1, 'Telefone é obrigatório')
    .regex(/^\(\d{2}\)\s\d{4,5}-\d{4}$/, 'Telefone deve estar no formato (XX) XXXXX-XXXX'),
  
  plan: z
    .string()
    .min(1, 'Selecione um plano')
    .refine((val) => ['starter', 'pro', 'custom'].includes(val), {
      message: 'Plano deve ser starter, pro ou custom',
    }),
})

// Tipo TypeScript inferido do schema
export type LeadFormData = z.infer<typeof leadFormSchema>

// Função para formatar telefone
export const formatPhone = (value: string): string => {
  // Remove todos os caracteres não numéricos
  const numbers = value.replace(/\D/g, '')
  
  // Aplica a máscara (XX) XXXXX-XXXX ou (XX) XXXX-XXXX
  if (numbers.length <= 10) {
    return numbers.replace(/(\d{2})(\d{4})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '')
  } else {
    return numbers.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').replace(/-$/, '')
  }
}

// Função para limpar telefone (remover máscara)
export const cleanPhone = (value: string): string => {
  return value.replace(/\D/g, '')
}

// Validação de telefone brasileiro
export const isValidBrazilianPhone = (phone: string): boolean => {
  const numbers = cleanPhone(phone)
  // Aceita telefones com 10 ou 11 dígitos (com DDD)
  return numbers.length >= 10 && numbers.length <= 11
}