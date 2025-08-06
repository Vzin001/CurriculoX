
interface ATSScoreBarProps {
  score: number
  className?: string
}

export function ATSScoreBar({ score, className = "" }: ATSScoreBarProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "ats-score-excellent"
    if (score >= 60) return "ats-score-good"
    return "ats-score-poor"
  }

  const getScoreText = (score: number) => {
    if (score >= 80) return "Excelente"
    if (score >= 60) return "Bom"
    return "Precisa melhorar"
  }

  return (
    <div className={`w-full ${className}`}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-secondary">
          Compatibilidade ATS
        </span>
        <span className="text-sm font-bold text-primary">
          {score}% - {getScoreText(score)}
        </span>
      </div>
      <div className="ats-score-bar">
        <div
          className={`ats-score-fill ${getScoreColor(score)}`}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}