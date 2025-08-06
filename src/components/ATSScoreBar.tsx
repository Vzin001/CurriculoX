import { cn } from "@/lib/utils"

interface ATSScoreBarProps {
  score: number
  className?: string
}

export function ATSScoreBar({ score, className }: ATSScoreBarProps) {
  const getScoreColor = (score: number) => {
    if (score >= 80) return "bg-green-500"
    if (score >= 60) return "bg-yellow-500"
    return "bg-red-500"
  }

  const getScoreText = (score: number) => {
    if (score >= 80) return "Excelente"
    if (score >= 60) return "Bom"
    return "Precisa melhorar"
  }

  return (
    <div className={cn("w-full", className)}>
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-gray-700">
          Compatibilidade ATS
        </span>
        <span className="text-sm font-bold text-gray-900">
          {score}% - {getScoreText(score)}
        </span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-3">
        <div
          className={cn(
            "h-3 rounded-full transition-all duration-300",
            getScoreColor(score)
          )}
          style={{ width: `${score}%` }}
        />
      </div>
    </div>
  )
}