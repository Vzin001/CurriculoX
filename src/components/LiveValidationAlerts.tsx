import { AlertTriangle, CheckCircle } from "lucide-react"

interface LiveValidationAlertsProps {
  alerts: string[]
  className?: string
}

export function LiveValidationAlerts({ alerts, className = "" }: LiveValidationAlertsProps) {
  if (alerts.length === 0) {
    return (
      <div className={`alert alert--success ${className}`}>
        <CheckCircle className="h-4 w-4" />
        <span className="text-sm">
          Nenhum problema detectado. Seu currículo está compatível com ATS!
        </span>
      </div>
    )
  }

  return (
    <div className={`space-y-2 ${className}`}>
      {alerts.map((alert, index) => (
        <div
          key={index}
          className="alert alert--error"
        >
          <AlertTriangle className="h-4 w-4 mt-0.5 flex-shrink-0" />
          <span className="text-sm">{alert}</span>
        </div>
      ))}
    </div>
  )
}