import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "CurrículoX",
  description: "Aplicação multiplataforma para criação de currículos compatíveis com sistemas ATS (robôs de recrutamento). Geração em .DOCX, validação automática, alertas inteligentes e exportação com 100% de compatibilidade.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          {children}
        </div>
      </body>
    </html>
  )
}