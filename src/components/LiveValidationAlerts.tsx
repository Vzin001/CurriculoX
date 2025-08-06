import { AlertTriangle, CheckCircle } from "lucide-react"
import { cn } from "@/lib/utils"

interface LiveValidationAlertsProps {
  alerts: string[]
  className?: string
}

export function LiveValidationAlerts({ alerts, className }: LiveValidationAlertsProps) {
  if (alerts.length === 0) {
    return (
      <div className={cn("flex items-center gap-2 p-3 bg-green-50 border border-green-200 rounded-md", className)}>
        <CheckCircle className="h-4 w-4 text-green-600" />
        <span className="text-sm text-green-700">
          Nenhum problema detectado. Seu currículo está compatível com ATS!
        </span>
      </div>
    )
  }

  return (
    <div className={cn("space-y-2", className)}>
      {alerts.map((alert, index) => (
        <div
          key={index}
          className="flex items-start gap-2 p-3 bg-red-50 border border-red-200 rounded-md"
        >
          <AlertTriangle className="h-4 w-4 text-red-600 mt-0.5 flex-shrink-0" />
          <span className="text-sm text-red-700">{alert}</span>
        </div>
      ))}
    </div>
  )
}