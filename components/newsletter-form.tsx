"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Loader2 } from "@/components/icons"

interface NewsletterFormProps {
  buttonText: string
  buttonClassName?: string
  inputClassName?: string
  messageClassName?: string
  layout?: "row" | "column"
  onSuccess?: () => void
}

export function NewsletterForm({
  buttonText = "Je m'inscris",
  buttonClassName = "",
  inputClassName = "",
  messageClassName = "",
  layout = "column",
  onSuccess,
}: NewsletterFormProps) {
  const [email, setEmail] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [message, setMessage] = useState<{ text: string; isError: boolean } | null>(null)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    // Reset message state
    setMessage(null)
    setIsSubmitting(true)
    
    try {
      // Call our API endpoint
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });
      
      const data = await response.json();
      
      setMessage({
        text: data.message,
        isError: !data.success,
      });
      
      // If subscription was successful
      if (data.success) {
        setEmail("");
        // Call onSuccess callback if provided
        if (onSuccess) {
          onSuccess();
        }
      }
    } catch (error) {
      setMessage({
        text: "Une erreur est survenue lors de l'inscription. Veuillez réessayer.",
        isError: true,
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  const formClasses = layout === "row" 
    ? "flex flex-col sm:flex-row gap-3 items-stretch"
    : "flex flex-col gap-3";

  return (
    <div className="w-full">
      <form onSubmit={handleSubmit} className={formClasses}>
        <input
          type="email"
          placeholder="Votre adresse email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={inputClassName}
          required
          disabled={isSubmitting}
        />
        
        <Button 
          type="button" 
          className={buttonClassName}
          disabled={isSubmitting}
          onClick={handleSubmit}
        >
          {isSubmitting ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Inscription...
            </>
          ) : (
            buttonText
          )}
        </Button>
      </form>
      
      {message && (
        <div className={`text-sm ${messageClassName} ${message.isError ? 'text-red-600' : 'text-green-600'}`}>
          {message.text}
        </div>
      )}
    </div>
  )
} 