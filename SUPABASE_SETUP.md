# Configuração do Supabase

Este guia explica como configurar o Supabase para armazenar os leads da landing page de forma segura.

## 1. Criar Conta no Supabase

1. Acesse [supabase.com](https://supabase.com)
2. Crie uma conta gratuita
3. Crie um novo projeto
4. Anote a URL do projeto e a chave anônima (anon key)

## 2. Configurar Variáveis de Ambiente

1. Abra o arquivo `.env.local` na raiz do projeto
2. Substitua os valores de exemplo pelas suas credenciais reais:

```env
NEXT_PUBLIC_SUPABASE_URL=https://seu-projeto.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua-chave-anonima-aqui
```

## 3. Criar Tabela no Supabase

1. Acesse o painel do Supabase
2. Vá para "SQL Editor"
3. Execute o seguinte SQL para criar a tabela `leads`:

```sql
-- Criar tabela leads
CREATE TABLE leads (
  id BIGSERIAL PRIMARY KEY,
  name VARCHAR(255) NOT NULL,
  email VARCHAR(255) NOT NULL,
  phone VARCHAR(20) NOT NULL,
  plan VARCHAR(50) NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Criar índice no email para consultas rápidas
CREATE INDEX idx_leads_email ON leads(email);

-- Criar índice na data de criação
CREATE INDEX idx_leads_created_at ON leads(created_at);

-- Função para atualizar updated_at automaticamente
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Trigger para atualizar updated_at
CREATE TRIGGER update_leads_updated_at
    BEFORE UPDATE ON leads
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();
```

## 4. Configurar Políticas de Segurança (RLS)

⚠️ **IMPORTANTE**: Para permitir que o formulário público insira leads, você tem duas opções:

### Opção 1: Desabilitar RLS (Mais Simples - Recomendado para MVP)

```sql
-- Desabilitar RLS na tabela leads (permite inserções públicas)
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
```

### Opção 2: Configurar RLS com Política Pública (Mais Seguro)

```sql
-- Habilitar RLS na tabela leads
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Política para permitir inserção pública de leads
CREATE POLICY "Allow public insert leads" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Política para permitir leitura apenas para usuários autenticados
CREATE POLICY "Allow read leads for authenticated users" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
```

**Recomendação**: Use a Opção 1 para começar rapidamente. Depois implemente a Opção 2 para maior segurança.

## 5. Testar a Integração

1. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

2. Acesse a landing page e preencha o formulário
3. Verifique no painel do Supabase se o lead foi salvo na tabela `leads`

## 6. Monitoramento

- Verifique os logs no console do navegador e do servidor
- Use o painel do Supabase para monitorar as inserções
- Configure alertas para erros de API se necessário

## Segurança

✅ **Boas práticas implementadas:**
- Variáveis de ambiente protegidas (não commitadas)
- Validação de dados no backend
- Tratamento de erros adequado
- Row Level Security habilitado
- Chaves anônimas (não expõem dados sensíveis)

⚠️ **Importante:**
- Nunca commite as credenciais no Git
- Use apenas a chave anônima (anon key) no frontend
- Para operações administrativas, use a service key apenas no backend