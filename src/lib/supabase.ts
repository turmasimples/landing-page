import { createClient } from '@supabase/supabase-js'

// Verificar se as variáveis de ambiente estão definidas
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    'Variáveis de ambiente do Supabase não encontradas. Verifique se NEXT_PUBLIC_SUPABASE_URL e NEXT_PUBLIC_SUPABASE_ANON estão definidas no arquivo .env.local'
  )
}

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