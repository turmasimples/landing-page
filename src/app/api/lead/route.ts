import { NextRequest, NextResponse } from 'next/server'
import { insertLead } from '@/lib/supabase'

interface LeadData {
  name: string
  email: string
  phone: string
  plan: string
}

export async function POST(request: NextRequest) {
  try {
    const body: LeadData = await request.json()
    
    // Validação básica
    if (!body.name || !body.email || !body.phone || !body.plan) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      )
    }
    
    // Validação de email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(body.email)) {
      return NextResponse.json(
        { error: 'Email inválido' },
        { status: 400 }
      )
    }
    
    // Salvar lead no Supabase
    try {
      await insertLead({
        name: body.name,
        email: body.email,
        phone: body.phone,
        plan: body.plan,
      })
    } catch (supabaseError) {
      console.error('❌ Erro ao salvar no Supabase:', supabaseError)
      
      // Retornar erro se não conseguir salvar no banco
      return NextResponse.json(
        { error: 'Erro interno do servidor. Tente novamente.' },
        { status: 500 }
      )
    }
    
    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead registrado com sucesso!',
        leadId: `lead_${Date.now()}`
      },
      { status: 201 }
    )
    
  } catch (error) {
    console.error('Erro ao processar lead:', error)
    
    return NextResponse.json(
      { error: 'Erro interno do servidor' },
      { status: 500 }
    )
  }
}

// Método GET para verificar se a API está funcionando
export async function GET() {
  return NextResponse.json(
    { 
      message: 'API de leads funcionando',
      timestamp: new Date().toISOString()
    },
    { status: 200 }
  )
}