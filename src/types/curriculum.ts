export interface ExperienciaProfissional {
  id: string
  empresa: string
  cargo: string
  periodo: string
  descricao: string
}

export interface FormacaoAcademica {
  id: string
  curso: string
  instituicao: string
  conclusao: string
}

export interface CurriculumData {
  id?: string
  nome: string
  email: string
  telefone: string
  cidade_estado: string
  linkedin: string
  github: string
  resumoProfissional: string
  experienciasProfissionais: ExperienciaProfissional[]
  formacaoAcademica: FormacaoAcademica[]
  habilidades: string[]
  atsScore: number
  alertas: string[]
  sugestoesMelhoria: string[]
  createdAt?: Date
  updatedAt?: Date
}

export interface ATSValidationResult {
  score: number
  alerts: string[]
  suggestions: string[]
}