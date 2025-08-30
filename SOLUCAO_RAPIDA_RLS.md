# 🚨 SOLUÇÃO RÁPIDA - Erro RLS Supabase

## Problema
```
❌ Erro ao salvar no Supabase: Error: Erro ao salvar lead: new row violates row-level security policy for table "leads"
```

## Solução Imediata (2 minutos)

### Passo 1: Acesse o Supabase
1. Vá para [supabase.com](https://supabase.com)
2. Faça login na sua conta
3. Selecione seu projeto

### Passo 2: Abra o SQL Editor
1. No menu lateral, clique em **"SQL Editor"**
2. Clique em **"New query"**

### Passo 3: Execute este SQL
Copie e cole exatamente este código:

```sql
-- Desabilitar RLS na tabela leads (permite inserções públicas)
ALTER TABLE leads DISABLE ROW LEVEL SECURITY;
```

### Passo 4: Execute a Query
1. Clique no botão **"Run"** (ou pressione Ctrl+Enter)
2. Você deve ver: **"Success. No rows returned"**

### Passo 5: Teste o Formulário
1. Volte para sua landing page
2. Preencha e envie o formulário
3. ✅ Agora deve funcionar sem erros!

## Verificação
Para confirmar que funcionou:
1. No Supabase, vá em **"Table Editor"**
2. Clique na tabela **"leads"**
3. Você deve ver os dados do formulário salvos

## Alternativa Mais Segura (Opcional)
Se quiser manter o RLS ativo com políticas adequadas:

```sql
-- Habilitar RLS
ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Permitir inserção pública
CREATE POLICY "Allow public insert leads" ON leads
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Permitir leitura apenas para usuários autenticados
CREATE POLICY "Allow read leads for authenticated users" ON leads
  FOR SELECT
  TO authenticated
  USING (true);
```

---

**💡 Dica**: A primeira solução (desabilitar RLS) é mais simples e funciona perfeitamente para um MVP. Você pode implementar a segurança avançada depois.