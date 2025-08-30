import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.SUPABASE_URL || 'https://scykmpulfrffkyofvpny.supabase.co'
const supabaseAnonKey = process.env.SUPABASE_ANON || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InNjeWttcHVsZnJmZmt5b2Z2cG55Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTY1NjI1MTcsImV4cCI6MjA3MjEzODUxN30.uqxh8vlrrJ8cwQKdmQbRQbrB3HmEfro1WqhryGnyz2c'

// if (!supabaseUrl || !supabaseAnonKey) {
//   throw new Error(
//     'Variáveis de ambiente do Supabase não encontradas.'
//   )
// }

// Criar cliente Supabase
export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: false, // Não precisamos de sessão para leads
  },
})

// Tipos para o banco de dados
export interface Lead {
  id?: number
  name: string
  email: string
  phone: string
  plan: string
  created_at?: string
  updated_at?: string
}

// Função para inserir lead no banco
export async function insertLead(leadData: Omit<Lead, 'id' | 'created_at' | 'updated_at'>) {
  try {
    const { data, error } = await supabase
      .from('leads')
      .insert([
        {
          name: leadData.name,
          email: leadData.email,
          phone: leadData.phone,
          plan: leadData.plan,
        },
      ])
      .select()

    if (error) {
      console.error('Erro ao inserir lead no Supabase:', error)
      throw new Error(`Erro ao salvar lead: ${error.message}`)
    }

    return { success: true, data }
  } catch (error) {
    console.error('Erro na função insertLead:', error)
    throw error
  }
}