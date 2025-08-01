"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export function AnimatedLogo() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="flex items-center space-x-2"
    >
      <Image 
        src="/travel-bot-logo.png" 
        alt="Travel Bot Logo" 
        width={40} 
        height={40} 
        className="h-10 w-auto" 
      />
      <Image
        src="/logo.jpg"
        alt="Travozom Logo"
        width={120}
        height={40}
        className="h-10 w-auto"
      />
    </motion.div>
  )
} 