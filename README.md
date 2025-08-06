# CurrículoX

Aplicação multiplataforma para criação de currículos compatíveis com sistemas ATS (robôs de recrutamento). Geração em .DOCX, validação automática, alertas inteligentes e exportação com 100% de compatibilidade.

## 🚀 Funcionalidades

### ✅ Principais Recursos
- **Criação de Currículo ATS-Friendly**: Editor intuitivo com validação em tempo real
- **Validador ATS**: Analise currículos existentes e receba sugestões de melhoria
- **Score de Compatibilidade**: Pontuação em tempo real (0-100%) da compatibilidade ATS
- **Exportação DOCX**: Geração automática em formato otimizado para sistemas ATS
- **Alertas Inteligentes**: Detecção automática de elementos problemáticos
- **Interface Limpa**: Design minimalista focado na funcionalidade
- **Histórico de Versões**: Gerencie múltiplas versões dos seus currículos
- **Modo Preto & Branco**: Layout básico para máxima legibilidade ATS

### 🎯 Validações ATS
- Detecção de emojis e símbolos especiais
- Verificação de formatação inadequada
- Análise de estrutura do conteúdo
- Validação de campos obrigatórios
- Sugestões de palavras-chave por área

### 📄 Exportação Otimizada
- Formato DOCX com máxima compatibilidade
- Fontes padrão (Arial, Calibri, 11pt)
- Layout sem colunas ou elementos gráficos
- Nomenclatura automática: `Curriculo_[Nome]_[Ano].docx`
- Apenas caracteres ASCII padrão

### 🖥️ Multiplataforma
- **Web**: Acesso via navegador com sincronização na nuvem
- **Desktop**: Aplicação Electron com cache offline
- **Mobile**: Interface responsiva para dispositivos móveis

## 🛠️ Tecnologias

- **Frontend**: Next.js 14 + TypeScript + React
- **Desktop**: Electron.js com sincronização
- **Backend**: Firebase (Auth + Firestore)
- **Componentes**: Componentes customizados com Radix UI
- **Exportação**: docx.js para geração de documentos
- **Validação**: Zod + React Hook Form
- **Ícones**: Lucide React

## 📦 Instalação

1. Clone o repositório:
```bash
git clone [repository-url]
cd curriculo-x
```

2. Instale as dependências:
```bash
npm install
```

3. Configure as variáveis de ambiente:
```bash
cp .env.local.example .env.local
# Edite .env.local com suas configurações do Firebase
```

4. Execute o projeto:
```bash
npm run dev
```

5. Acesse: `http://localhost:3000`

## 🎨 Estrutura do Projeto

```
src/
├── app/                    # App Router (Next.js 14)
│   ├── criar/             # Página de criação de currículo
│   ├── validador/         # Página de validação ATS
│   ├── exportar/          # Página de exportação
│   ├── historico/         # Histórico de currículos
│   ├── perfil/            # Perfil do usuário
│   ├── ajuda/             # Central de ajuda e FAQ
│   └── page.tsx           # Página inicial
├── components/            # Componentes reutilizáveis
│   ├── ui/                # Componentes base da UI
│   ├── ATSScoreBar.tsx    # Barra de pontuação ATS
│   ├── LiveValidationAlerts.tsx # Alertas em tempo real
│   ├── ExportButton.tsx   # Botão de exportação
│   └── ModalSugestoes.tsx # Modal de sugestões
├── lib/                   # Utilitários e configurações
│   ├── utils.ts           # Funções utilitárias
│   ├── firebase.ts        # Configuração Firebase
│   ├── docx-generator.ts  # Gerador de documentos DOCX
│   └── keywords.ts        # Base de palavras-chave
└── types/                 # Definições de tipos TypeScript
    └── curriculum.ts      # Tipos do currículo
```

## 🔧 Configuração Firebase

Para habilitar sincronização na nuvem e autenticação:

1. Crie um projeto no [Firebase Console](https://console.firebase.google.com)
2. Ative Authentication e Firestore
3. Copie as configurações para `.env.local`
4. Configure as regras de segurança do Firestore

## 📱 Funcionalidades Detalhadas

### Criação de Currículo (`/criar`)
- Formulário estruturado com seções organizadas
- Validação ATS em tempo real
- Score de compatibilidade dinâmico
- Campos para experiências e formações múltiplas
- Exportação habilitada apenas com score ≥ 60%

### Validador ATS (`/validador`)
- Análise de conteúdo existente
- Checklist de compatibilidade
- Sugestões personalizadas de melhoria
- Score detalhado com explicações

### Exportação (`/exportar`)
- Preview do currículo antes da exportação
- Botão de exportação DOCX otimizado
- Nomenclatura automática de arquivos

### Histórico (`/historico`)
- Lista de currículos salvos
- Controle de versões
- Opções de edição e duplicação

### Perfil (`/perfil`)
- Dados do usuário
- Preferências de exportação
- Configurações de conta

### Central de Ajuda (`/ajuda`)
- FAQ completo sobre sistemas ATS
- Dicas de otimização por área
- Guia de uso da aplicação
- Informações de contato

## 🎯 Critérios ATS

### ✅ Elementos Recomendados
- Fontes padrão (Arial, Calibri, Times New Roman, 11pt)
- Layout de coluna única
- Títulos de seção claros
- Bullet points simples
- Formato DOCX
- Palavras-chave relevantes por área

### ❌ Elementos a Evitar
- Emojis e símbolos especiais
- Imagens e gráficos
- Colunas múltiplas
- Caixas de texto flutuantes
- Tabelas complexas
- Formatação excessiva
- Cores de fundo ou texto

## 🖥️ Versão Desktop (Electron)

### Funcionalidades Adicionais
- Cache offline para trabalho sem internet
- Sincronização automática com versão web
- Drag & drop de arquivos DOCX
- Tema escuro para edição (não exportado)
- Notificações de sistema

### Instalação Desktop
```bash
npm run electron:dev    # Desenvolvimento
npm run electron:build  # Build para produção
```

## 🚀 Deploy

### Vercel (Web)
```bash
npm run build
# Deploy automático via GitHub integration
```

### Electron (Desktop)
```bash
npm run electron:build
# Gera executáveis para Windows, Mac e Linux
```

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

## 📞 Suporte

- **Email**: suporte@curriculox.com
- **FAQ**: Acesse `/ajuda` na aplicação
- **Issues**: Use o sistema de issues do GitHub

---

**CurrículoX** - Maximize suas chances de passar pela triagem automatizada! 🎯