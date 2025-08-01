import { Loader2 } from "lucide-react"

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-travozom-beige dark:bg-travozom-deep-brown">
      <Loader2 className="h-12 w-12 animate-spin text-travozom-gold" />
      <p className="ml-4 text-lg text-travozom-deep-brown dark:text-travozom-cream">Loading guides...</p>
    </div>
  )
}
