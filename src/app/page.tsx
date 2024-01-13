import { Button } from "@/components/ui/button"
import { cn } from '@/lib/utils'
import { ModeToggle } from "@/components/theme-toggle"


export default function Home() {
  return (
    <div>
      <div className="text-3xl text-foreground">
      This is a boiler plate code for the dark themed orange
      </div>
      <br />
      <div className="text-foreground">
      Toggle the Theme by clicking the theme button


      <br />
      <ModeToggle></ModeToggle>
      <br />
      <Button>Click me</Button>
      </div>
    </div>
  )
}