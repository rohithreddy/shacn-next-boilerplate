import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'



export default function Home() {
  return (
    <div>
      <p className={cn("text-foreground")}>
      This is a boiler plate code for the dark themed orange
      </p>
      
      <Button>Click me</Button>
    </div>
  )
}