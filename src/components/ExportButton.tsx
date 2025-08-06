import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Download, Loader2 } from "lucide-react"
import { generateDOCX } from "@/lib/docx-generator"
import { CurriculumData } from "@/types/curriculum"

interface ExportButtonProps {
  data: CurriculumData
  disabled?: boolean
  className?: string
}

export function ExportButton({ data, disabled, className }: ExportButtonProps) {
  const [isExporting, setIsExporting] = useState(false)

  const handleExport = async () => {
    if (disabled || isExporting) return

    setIsExporting(true)
    try {
      await generateDOCX(data)
    } catch (error) {
      console.error("Erro ao exportar currículo:", error)
      alert("Erro ao exportar currículo. Tente novamente.")
    } finally {
      setIsExporting(false)
    }
  }

  const canExport = data.atsScore >= 60

  return (
    <Button
      onClick={handleExport}
      disabled={disabled || isExporting || !canExport}
      className={className}
      size="lg"
    >
      {isExporting ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Exportando...
        </>
      ) : (
        <>
          <Download className="mr-2 h-4 w-4" />
          Exportar DOCX
        </>
      )}
    </Button>
  )
}