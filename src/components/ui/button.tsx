import * as React from "react"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link"
  size?: "default" | "sm" | "lg" | "icon"
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className = "", variant = "default", size = "default", ...props }, ref) => {
    const getVariantClass = (variant: string) => {
      switch (variant) {
        case "destructive": return "btn--destructive"
        case "outline": return "btn--outline"
        case "secondary": return "btn--secondary"
        case "ghost": return "btn--ghost"
        case "link": return "text-primary underline"
        default: return "btn--primary"
      }
    }
    
    const getSizeClass = (size: string) => {
      switch (size) {
        case "sm": return "btn--sm"
        case "lg": return "btn--lg"
        case "icon": return "h-10 w-10"
        default: return ""
      }
    }
    
    const classes = [
      "btn",
      getVariantClass(variant),
      getSizeClass(size),
      className
    ].filter(Boolean).join(" ")
    
    return (
      <button
        className={classes}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }