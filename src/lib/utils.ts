import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatFileName(nome: string): string {
  const year = new Date().getFullYear()
  const cleanName = nome.replace(/[^a-zA-Z0-9]/g, '_')
  return `Curriculo_${cleanName}_${year}.docx`
}

export function calculateATSScore(data: any): number {
  let score = 0
  const maxScore = 100

  // Verificar campos obrigatórios (40 pontos)
  if (data.nome?.trim()) score += 8
  if (data.email?.trim()) score += 8
  if (data.telefone?.trim()) score += 8
  if (data.resumoProfissional?.trim()) score += 8
  if (data.experienciasProfissionais?.length > 0) score += 8

  // Verificar qualidade do conteúdo (30 pontos)
  if (data.resumoProfissional?.length > 50) score += 10
  if (data.experienciasProfissionais?.length >= 2) score += 10
  if (data.habilidades?.length > 0) score += 10

  // Verificar formatação ATS-friendly (30 pontos)
  const hasSpecialChars = /[^\w\s@.-]/.test(JSON.stringify(data))
  if (!hasSpecialChars) score += 15

  const hasEmojis = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/u.test(JSON.stringify(data))
  if (!hasEmojis) score += 15

  return Math.min(score, maxScore)
}

export function validateATSContent(content: string): string[] {
  const alerts: string[] = []

  // Verificar emojis
  const emojiRegex = /[\u{1F600}-\u{1F64F}]|[\u{1F300}-\u{1F5FF}]|[\u{1F680}-\u{1F6FF}]|[\u{1F1E0}-\u{1F1FF}]/u
  if (emojiRegex.test(content)) {
    alerts.push("⚠️ Atenção: Este caractere pode ser ignorado por sistemas de recrutamento automatizados.")
  }

  // Verificar caracteres especiais problemáticos
  const specialCharsRegex = /[•◦▪▫★☆♦♠♣♥]/
  if (specialCharsRegex.test(content)) {
    alerts.push("⚠️ Símbolos especiais detectados. Use hífens (-) ou asteriscos (*) simples.")
  }

  // Verificar formatação de texto
  if (content.includes('\t')) {
    alerts.push("⚠️ Tabulações detectadas. Use espaços simples para melhor compatibilidade.")
  }

  return alerts
}