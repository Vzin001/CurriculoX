# CurrículoX Design System Guide

## 📋 Visão Geral

O Design System do CurrículoX foi desenvolvido para ser **elegante, funcional e multiplataforma**, mantendo a compatibilidade ATS como prioridade máxima. O sistema combina as melhores práticas do Material Design 3 (Android) e Fluent Design (Windows) em uma identidade visual coesa.

## 🎨 Filosofia de Design

### Princípios Fundamentais
1. **ATS-First**: Toda decisão visual prioriza a compatibilidade com sistemas de recrutamento
2. **Elegância Funcional**: Beleza através da simplicidade e funcionalidade
3. **Multiplataforma**: Consistência visual adaptada para cada plataforma
4. **Acessibilidade**: Contraste adequado e usabilidade universal

## 🔤 Tipografia

### Família Tipográfica
- **Principal**: Inter (moderna, legível, web-safe)
- **Fallbacks ATS**: Segoe UI, Roboto, Arial, sans-serif
- **Monospace**: SF Mono, Monaco, Roboto Mono

### Hierarquia Tipográfica
```css
--text-xs: 12px    /* Legendas, metadados */
--text-sm: 14px    /* Texto secundário, labels */
--text-base: 16px  /* Texto principal */
--text-lg: 18px    /* Subtítulos */
--text-xl: 20px    /* Títulos de seção */
--text-2xl: 24px   /* Títulos de página */
--text-3xl: 30px   /* Títulos principais */
--text-4xl: 36px   /* Headlines */
--text-5xl: 48px   /* Display text */
```

### Pesos da Fonte
- **Light (300)**: Textos decorativos
- **Normal (400)**: Texto principal
- **Medium (500)**: Ênfase sutil
- **Semibold (600)**: Subtítulos
- **Bold (700)**: Títulos principais

**Justificativa**: Inter oferece excelente legibilidade em telas digitais e mantém compatibilidade ATS quando exportado. Os fallbacks garantem renderização consistente em todos os sistemas.

## 🎨 Paleta de Cores

### Cores Primárias (Azul Profissional)
```css
--primary-500: #3b82f6  /* Cor principal - confiável e profissional */
--primary-600: #2563eb  /* Hover states */
--primary-700: #1d4ed8  /* Estados ativos */
```

### Cores Secundárias (Verde Sucesso)
```css
--secondary-500: #22c55e  /* Validações positivas */
--secondary-600: #16a34a  /* Estados de sucesso */
```

### Cores de Sistema
```css
--warning-500: #f59e0b   /* Alertas e avisos */
--error-500: #ef4444     /* Erros e validações negativas */
```

### Cores Neutras (Escala Completa)
```css
--neutral-0: #ffffff     /* Fundo principal */
--neutral-50: #f9fafb    /* Fundo secundário */
--neutral-100: #f3f4f6   /* Fundo terciário */
--neutral-500: #6b7280   /* Texto secundário */
--neutral-900: #111827   /* Texto principal */
```

### Contraste e Acessibilidade
- **Texto normal**: Mínimo 4.5:1 (WCAG AA)
- **Texto grande**: Mínimo 3:1 (WCAG AA)
- **Elementos interativos**: Mínimo 3:1

**Justificativa**: Azul transmite confiança e profissionalismo, essencial para currículos. Verde para validações cria associação positiva com aprovação ATS. Neutros garantem legibilidade máxima.

## 📐 Sistema de Espaçamento

### Grid System (Base 8px)
```css
--space-1: 4px    /* Espaçamentos mínimos */
--space-2: 8px    /* Espaçamentos pequenos */
--space-4: 16px   /* Espaçamento padrão */
--space-6: 24px   /* Espaçamentos médios */
--space-8: 32px   /* Espaçamentos grandes */
--space-12: 48px  /* Seções */
--space-16: 64px  /* Separação de blocos */
```

### Breakpoints Responsivos
```css
--breakpoint-sm: 640px   /* Mobile grande */
--breakpoint-md: 768px   /* Tablet */
--breakpoint-lg: 1024px  /* Desktop pequeno */
--breakpoint-xl: 1280px  /* Desktop grande */
```

**Justificativa**: Sistema baseado em 8px garante consistência visual e facilita desenvolvimento. Breakpoints cobrem todos os dispositivos principais.

## 🧩 Componentes Principais

### Botões
```css
.btn {
  padding: 12px 24px;
  border-radius: 8px;
  font-weight: 500;
  transition: all 0.2s ease-in-out;
}

.btn-primary { /* Ações principais */ }
.btn-secondary { /* Ações secundárias */ }
.btn-success { /* Confirmações */ }
.btn-warning { /* Alertas */ }
.btn-error { /* Ações destrutivas */ }
```

### Cards
```css
.card {
  background: white;
  border: 1px solid var(--neutral-200);
  border-radius: 12px;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05);
}
```

### Inputs
```css
.input {
  padding: 12px 16px;
  border: 1px solid var(--neutral-200);
  border-radius: 8px;
  font-family: var(--font-primary);
}
```

### Score Bar ATS
```css
.ats-score-bar {
  height: 12px;
  border-radius: 999px;
  background: var(--neutral-200);
}

.ats-score-excellent { background: var(--secondary-500); }
.ats-score-good { background: var(--warning-500); }
.ats-score-poor { background: var(--error-500); }
```

## 📱 Adaptações Multiplataforma

### Android (Material Design 3)
- **Touch Targets**: Mínimo 48px para elementos interativos
- **Cards**: Border-radius aumentado (16px)
- **FAB**: Floating Action Button para ações principais
- **Ripple Effects**: Feedback visual em toques

### Windows (Fluent Design)
- **Acrylic Effects**: Blur e transparência sutil
- **Depth**: Sombras mais pronunciadas
- **Hover States**: Feedback visual em mouse hover
- **Focus Indicators**: Outline claro para navegação por teclado

### Implementação Responsiva
```css
/* Mobile-first (Android) */
@media (max-width: 768px) {
  .btn { min-height: 48px; }
  .card { border-radius: 16px; }
}

/* Desktop (Windows) */
@media (min-width: 769px) {
  .card { backdrop-filter: blur(20px); }
  .acrylic { background: rgba(255,255,255,0.72); }
}
```

## 🎭 Estados e Interações

### Estados dos Componentes
- **Default**: Estado padrão
- **Hover**: Feedback visual ao passar o mouse
- **Focus**: Indicação clara para navegação por teclado
- **Active**: Estado durante interação
- **Disabled**: Elementos não interativos (50% opacidade)

### Animações e Transições
```css
.transition-all { transition: all 0.2s ease-in-out; }
.animate-fade-in { animation: fadeIn 0.3s ease-out; }
.animate-slide-in { animation: slideIn 0.3s ease-out; }
```

**Justificativa**: Transições suaves melhoram a percepção de qualidade sem comprometer performance.

## 🎯 Componentes Específicos ATS

### Score Bar
- **Visual**: Barra horizontal com preenchimento colorido
- **Cores**: Verde (80%+), Amarelo (60-79%), Vermelho (<60%)
- **Feedback**: Texto explicativo do nível de compatibilidade

### Alertas de Validação
- **Sucesso**: Fundo verde claro, ícone de check
- **Aviso**: Fundo amarelo claro, ícone de alerta
- **Erro**: Fundo vermelho claro, ícone de erro

### Preview ATS
- **Fundo**: Branco puro (#ffffff)
- **Texto**: Preto puro (#000000)
- **Fonte**: Arial, 11pt
- **Layout**: Coluna única, sem elementos gráficos

## 📊 Métricas de Sucesso

### Performance
- **First Contentful Paint**: < 1.5s
- **Largest Contentful Paint**: < 2.5s
- **Cumulative Layout Shift**: < 0.1

### Acessibilidade
- **Contraste**: WCAG AA compliant
- **Navegação por teclado**: 100% funcional
- **Screen readers**: Compatibilidade total

### Usabilidade
- **Touch targets**: Mínimo 44px (iOS) / 48px (Android)
- **Loading states**: Feedback visual em todas as ações
- **Error handling**: Mensagens claras e acionáveis

## 🔧 Implementação Técnica

### CSS Custom Properties
Todas as variáveis são definidas em `:root` para fácil manutenção e tematização.

### Utility Classes
Sistema de classes utilitárias para desenvolvimento ágil:
```css
.flex, .flex-col, .items-center, .justify-between
.p-4, .m-4, .gap-4
.text-sm, .text-lg, .font-medium
.w-full, .max-w-4xl, .mx-auto
```

### Componentes Modulares
Cada componente é independente e reutilizável, seguindo princípios de atomic design.

## 🚀 Roadmap Futuro

### Fase 2
- [ ] Tema escuro completo
- [ ] Componentes de data visualization
- [ ] Micro-interações avançadas

### Fase 3
- [ ] Temas personalizáveis por usuário
- [ ] Componentes de IA/ML para sugestões
- [ ] Integração com APIs de design tokens

---

**Conclusão**: Este Design System equilibra elegância visual com funcionalidade ATS, garantindo que o CurrículoX seja tanto bonito quanto eficaz para aprovação em sistemas automatizados de recrutamento.