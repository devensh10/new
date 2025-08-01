"use client"

import type React from "react"
import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Send, Bot, Info } from "lucide-react"

interface Message {
  id: string
  text: string
  sender: "user" | "bot"
  type?: "text" | "info"
}

export function BudgetChatbot() {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hello! I'm your Traozom Budget Assistant. How can I help you plan your travel budget today?",
      sender: "bot",
    },
  ])
  const [input, setInput] = useState("")
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(scrollToBottom, [messages])

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault()
    if (input.trim() === "") return

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      sender: "user",
    }
    setMessages((prevMessages) => [...prevMessages, newUserMessage])
    setInput("")

    // Simulate AI response
    const botResponse = await generateBotResponse(input)
    setMessages((prevMessages) => [...prevMessages, botResponse])
  }

  const generateBotResponse = async (userMessage: string): Promise<Message> => {
    const lowerCaseMessage = userMessage.toLowerCase()
    let responseText = "I'm still learning! Can you please rephrase or ask about common travel budget categories?"
    let responseType: "text" | "info" = "text"

    if (lowerCaseMessage.includes("budget for india")) {
      responseText =
        "A mid-range budget for India can be around ₹2,500-₹5,000 per person per day, covering comfortable stays, local transport, and good food. Luxury can go upwards of ₹5,000+."
      responseType = "info"
    } else if (lowerCaseMessage.includes("accommodation")) {
      responseText =
        "Accommodation costs vary widely. Budget hostels can be ₹500-₹1,500, mid-range hotels ₹2,000-₹5,000, and luxury hotels ₹8,000+ per night."
      responseType = "info"
    } else if (lowerCaseMessage.includes("food") || lowerCaseMessage.includes("meals")) {
      responseText =
        "Food expenses can range from ₹300-₹800 for local eateries, ₹1,000-₹2,500 for mid-range restaurants, and ₹3,000+ for fine dining per day."
      responseType = "info"
    } else if (lowerCaseMessage.includes("transport") || lowerCaseMessage.includes("travel")) {
      responseText =
        "Local transport (auto-rickshaws, taxis, metro) is generally affordable. Inter-city travel by train or domestic flights will be a larger expense depending on distance and class."
      responseType = "info"
    } else if (lowerCaseMessage.includes("activities") || lowerCaseMessage.includes("sightseeing")) {
      responseText =
        "Entry fees to monuments and attractions can be ₹200-₹1,000 per site. Guided tours and special experiences will add to this."
      responseType = "info"
    } else if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      responseText = "Hi there! What specific budget questions do you have for your trip?"
    } else if (lowerCaseMessage.includes("thank you") || lowerCaseMessage.includes("thanks")) {
      responseText = "You're welcome! Is there anything else I can help you with regarding your budget?"
    }

    return {
      id: (Date.now() + 1).toString(),
      text: responseText,
      sender: "bot",
      type: responseType,
    }
  }

  return (
    <Card className="w-full max-w-md mx-auto bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg flex flex-col h-[500px]">
      <CardHeader className="border-b border-travozom-dark-beige dark:border-travozom-medium-brown p-4">
        <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream flex items-center">
          <Bot className="w-6 h-6 mr-2 text-travozom-gold" />
          Traozom Budget Assistant
        </CardTitle>
      </CardHeader>
      <CardContent className="flex-1 p-4 overflow-hidden">
        <ScrollArea className="h-full pr-4">
          <div className="flex flex-col space-y-4">
            <AnimatePresence>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  layout
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className={`flex items-end ${message.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.sender === "bot" && (
                    <Avatar className="h-8 w-8 mr-2">
                      <AvatarImage src="/travel-bot-logo.png" alt="Bot Avatar" />
                      <AvatarFallback>Bot</AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={`max-w-[70%] p-3 rounded-lg shadow-sm ${
                      message.sender === "user"
                        ? "bg-travozom-gold text-travozom-deep-brown rounded-br-none"
                        : "bg-travozom-beige dark:bg-travozom-darker-brown text-travozom-deep-brown dark:text-travozom-cream rounded-bl-none"
                    } ${message.type === "info" ? "border border-travozom-bronze" : ""}`}
                  >
                    {message.type === "info" && (
                      <div className="flex items-center text-sm font-semibold mb-1 text-travozom-bronze">
                        <Info className="w-4 h-4 mr-1" />
                        Budget Tip
                      </div>
                    )}
                    {message.text}
                  </div>
                  {message.sender === "user" && (
                    <Avatar className="h-8 w-8 ml-2">
                      <AvatarImage src="/placeholder-avatar.jpg" alt="User Avatar" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>
      </CardContent>
      <CardFooter className="border-t border-travozom-dark-beige dark:border-travozom-medium-brown p-4">
        <form onSubmit={handleSendMessage} className="flex w-full space-x-2">
          <Input
            placeholder="Ask about budget, costs, etc."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-1 border-travozom-dark-beige focus:border-travozom-gold dark:bg-travozom-darker-brown dark:text-travozom-cream"
          />
          <Button type="submit" className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">
            <Send className="w-4 h-4" />
            <span className="sr-only">Send message</span>
          </Button>
        </form>
      </CardFooter>
    </Card>
  )
}
