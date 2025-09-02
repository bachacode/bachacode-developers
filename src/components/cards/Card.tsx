import { Card as ShadcnCard } from "@/components/ui/card"
import { cn } from "@/lib/utils"

export function Card({ className, ...props }: React.ComponentProps<typeof ShadcnCard>) {
  return <ShadcnCard className={cn("border-accent rounded-sm bg-white shadow-lg gap-3 duration-300", className)} {...props} />
}