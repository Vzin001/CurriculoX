// Base de palavras-chave por área profissional
export const keywordsByArea = {
  tecnologia: {
    frontend: [
      "React", "Vue.js", "Angular", "JavaScript", "TypeScript", "HTML5", "CSS3",
      "Nuxt.js", "Redux", "Vuex", "Responsive Design", "PWA", "SPA"
    ],
    backend: [
      "Node.js", "Python", "Java", "C#", "PHP", "Ruby", "Go", "Rust",
      "Express.js", "Django", "Flask", "Spring Boot", "Laravel", "Rails",
      "API REST", "GraphQL", "Microservices", "Docker", "Kubernetes"
    ],
    database: [
      "MySQL", "PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "SQLite",
      "Oracle", "SQL Server", "Firebase", "DynamoDB", "Cassandra", "Neo4j"
    ],
    devops: [
      "AWS", "Azure", "Google Cloud", "Docker", "Kubernetes", "Jenkins",
      "GitLab CI", "GitHub Actions", "Terraform", "Ansible", "Nginx",
      "Apache", "Linux", "Ubuntu", "CentOS", "Monitoring", "Logging"
    ],
    mobile: [
      "React Native", "Flutter", "Swift", "Kotlin", "Java", "Objective-C",
      "Xamarin", "Ionic", "Cordova", "Android Studio", "Xcode", "Firebase",
      "Push Notifications", "App Store", "Google Play"
    ]
  },
  marketing: {
    digital: [
      "Marketing Digital", "SEO", "SEM", "Google Ads", "Facebook Ads",
      "Instagram Ads", "LinkedIn Ads", "Google Analytics", "GTM",
      "Conversion Rate Optimization", "A/B Testing", "Landing Pages"
    ],
    content: [
      "Content Marketing", "Copywriting", "Storytelling", "Blog", "Social Media",
      "Email Marketing", "Newsletter", "Webinar", "Podcast", "Video Marketing",
      "Influencer Marketing", "Brand Awareness"
    ],
    analytics: [
      "Google Analytics", "Google Tag Manager", "Facebook Pixel", "Hotjar",
      "Mixpanel", "Amplitude", "Data Studio", "Power BI", "Tableau",
      "KPIs", "ROI", "ROAS", "CTR", "CPC", "CPM", "LTV"
    ],
    automation: [
      "Marketing Automation", "HubSpot", "Mailchimp", "RD Station",
      "Salesforce", "Pipedrive", "CRM", "Lead Generation", "Lead Nurturing",
      "Sales Funnel", "Customer Journey", "Segmentation"
    ]
  },
  design: {
    ui_ux: [
      "UI Design", "UX Design", "User Experience", "User Interface",
      "Wireframes", "Prototyping", "User Research", "Usability Testing",
      "Information Architecture", "Interaction Design", "Visual Design"
    ],
    tools: [
      "Figma", "Sketch", "Adobe XD", "InVision", "Principle", "Framer",
      "Adobe Creative Suite", "Photoshop", "Illustrator", "After Effects",
      "Canva", "Zeplin", "Marvel", "Axure"
    ],
    skills: [
      "Design System", "Style Guide", "Brand Identity", "Typography",
      "Color Theory", "Layout Design", "Responsive Design", "Accessibility",
      "Design Thinking", "Agile Design", "Lean UX"
    ]
  },
  vendas: {
    skills: [
      "Vendas", "Prospecção", "Negociação", "Fechamento", "CRM",
      "Pipeline de Vendas", "Lead Generation", "Cold Calling", "Follow-up",
      "Relacionamento com Cliente", "Pós-venda", "Upselling", "Cross-selling"
    ],
    tools: [
      "Salesforce", "HubSpot", "Pipedrive", "RD Station", "Outreach",
      "Sales Navigator", "LinkedIn Sales", "Zoom", "Google Meet",
      "Calendly", "DocuSign", "PandaDoc"
    ],
    metrics: [
      "Quota", "Target", "Conversion Rate", "Sales Cycle", "CAC",
      "LTV", "Churn Rate", "MRR", "ARR", "Pipeline Velocity",
      "Win Rate", "Average Deal Size"
    ]
  },
  rh: {
    recruitment: [
      "Recrutamento", "Seleção", "Headhunting", "Talent Acquisition",
      "Employer Branding", "Candidate Experience", "ATS", "LinkedIn Recruiter",
      "Entrevistas", "Assessment", "Background Check", "Onboarding"
    ],
    hr_management: [
      "Gestão de Pessoas", "Desenvolvimento Organizacional", "Treinamento",
      "Capacitação", "Performance Management", "Feedback", "1:1",
      "Plano de Carreira", "Sucessão", "Retenção de Talentos"
    ],
    tools: [
      "HRIS", "Workday", "BambooHR", "Gupy", "Kenoby", "Solides",
      "Catho", "InfoJobs", "LinkedIn", "Indeed", "Glassdoor"
    ]
  },
  financeiro: {
    analysis: [
      "Análise Financeira", "Planejamento Financeiro", "Orçamento", "Budget",
      "Forecast", "Cash Flow", "DRE", "Balanço Patrimonial", "ROI", "ROE",
      "EBITDA", "Margem", "Lucratividade", "Rentabilidade"
    ],
    tools: [
      "Excel", "Power BI", "Tableau", "SAP", "Oracle", "QuickBooks",
      "Sage", "Conta Azul", "Omie", "ERP", "BI", "SQL"
    ],
    skills: [
      "Controladoria", "Auditoria", "Compliance", "Risk Management",
      "Valuation", "M&A", "Due Diligence", "Modelagem Financeira",
      "Análise de Investimentos", "Capital de Giro"
    ]
  }
}

export const softSkills = [
  "Liderança", "Comunicação", "Trabalho em Equipe", "Resolução de Problemas",
  "Pensamento Crítico", "Criatividade", "Adaptabilidade", "Flexibilidade",
  "Gestão de Tempo", "Organização", "Proatividade", "Iniciativa",
  "Negociação", "Persuasão", "Empatia", "Inteligência Emocional",
  "Orientação a Resultados", "Foco no Cliente", "Atenção aos Detalhes",
  "Multitasking", "Aprendizado Contínuo", "Mentoring", "Coaching"
]

export const actionVerbs = [
  "Desenvolveu", "Implementou", "Criou", "Liderou", "Gerenciou", "Coordenou",
  "Otimizou", "Melhorou", "Aumentou", "Reduziu", "Automatizou", "Integrou",
  "Arquitetou", "Projetou", "Executou", "Entregou", "Solucionou", "Resolveu",
  "Analisou", "Avaliou", "Planejou", "Organizou", "Supervisionou", "Treinou",
  "Capacitou", "Mentoreou", "Apresentou", "Comunicou", "Negociou", "Vendeu",
  "Conquistou", "Alcançou", "Superou", "Colaborou", "Participou", "Contribuiu"
]

export function getKeywordsByArea(area: string): string[] {
  const areaData = keywordsByArea[area as keyof typeof keywordsByArea]
  if (!areaData) return []
  
  return Object.values(areaData).flat()
}

export function getSuggestionsByContent(content: string): {
  missingKeywords: string[]
  suggestedVerbs: string[]
  softSkillsSuggestions: string[]
} {
  const contentLower = content.toLowerCase()
  
  // Detectar área baseada no conteúdo
  let detectedArea = "geral"
  const techKeywords = ["javascript", "react", "python", "java", "sql", "api"]
  const marketingKeywords = ["marketing", "seo", "ads", "analytics", "campaign"]
  const designKeywords = ["design", "figma", "photoshop", "ui", "ux"]
  
  if (techKeywords.some(keyword => contentLower.includes(keyword))) {
    detectedArea = "tecnologia"
  } else if (marketingKeywords.some(keyword => contentLower.includes(keyword))) {
    detectedArea = "marketing"
  } else if (designKeywords.some(keyword => contentLower.includes(keyword))) {
    detectedArea = "design"
  }
  
  const areaKeywords = getKeywordsByArea(detectedArea)
  const missingKeywords = areaKeywords.filter(keyword => 
    !contentLower.includes(keyword.toLowerCase())
  ).slice(0, 10)
  
  const suggestedVerbs = actionVerbs.filter(verb => 
    !contentLower.includes(verb.toLowerCase())
  ).slice(0, 8)
  
  const softSkillsSuggestions = softSkills.filter(skill => 
    !contentLower.includes(skill.toLowerCase())
  ).slice(0, 6)
  
  return {
    missingKeywords,
    suggestedVerbs,
    softSkillsSuggestions
  }
}