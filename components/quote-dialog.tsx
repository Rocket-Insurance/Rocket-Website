"use client"

import type React from "react"

import { useState } from "react"
import { useTranslation } from "@/app/hooks/use-translation"

interface QuoteDialogProps {
  isOpen: boolean
  onClose: () => void
}

export function QuoteDialog({ isOpen, onClose }: QuoteDialogProps) {
  const { t } = useTranslation()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  if (!isOpen) return null

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Get form data
    const formData = new FormData(e.currentTarget)
    const firstName = formData.get("quote-first-name") as string
    const lastName = formData.get("quote-last-name") as string
    const email = formData.get("quote-email") as string
    const phone = formData.get("quote-phone") as string
    const insuranceTypes = formData.getAll("insurance-types[]") as string[]
    const explanation = formData.get("quote-explanation") as string

    // Create form data for Formspree or similar service
    const data = {
      firstName,
      lastName,
      email,
      phone,
      insuranceTypes: insuranceTypes.join(", "),
      explanation,
      _subject: `INSURANCE QUOTE: ${insuranceTypes.join(", ")}`,
    }

    try {
      // Use Formspree or a similar service that doesn't require server-side code
      // Replace YOUR_FORMSPREE_ID with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/YOUR_FORMSPREE_ID", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form
        e.currentTarget.reset()
        // Close dialog after delay
        setTimeout(() => {
          onClose()
          setIsSubmitted(false)
        }, 3000)
      } else {
        console.error("Form submission error:", await response.text())
        alert("There was a problem submitting your quote request. Please try again.")
      }
    } catch (error) {
      console.error("Form submission error:", error)
      alert("There was a problem submitting your quote request. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg max-w-md w-full p-6 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <h2 className="text-2xl font-bold text-center text-blue-800 mb-4">{t("getYourFreeQuote")}</h2>

        {isSubmitted ? (
          <div className="p-4 rounded-md bg-green-50 text-green-800">
            <p className="text-center font-medium">Thank you for your quote request! We'll be in touch soon.</p>
          </div>
        ) : (
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label htmlFor="quote-first-name" className="block text-sm font-medium text-gray-700">
                  {t("firstName")}
                </label>
                <input
                  id="quote-first-name"
                  name="quote-first-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your first name"
                  required
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="quote-last-name" className="block text-sm font-medium text-gray-700">
                  {t("lastName")}
                </label>
                <input
                  id="quote-last-name"
                  name="quote-last-name"
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter your last name"
                  required
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="quote-email" className="block text-sm font-medium text-gray-700">
                {t("email")}
              </label>
              <input
                id="quote-email"
                name="quote-email"
                type="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="quote-phone" className="block text-sm font-medium text-gray-700">
                {t("phone")}
              </label>
              <input
                id="quote-phone"
                name="quote-phone"
                type="tel"
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Enter your phone number"
                required
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Insurance Types (Select all that apply)
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {["Auto", "Home", "Condo", "Tenant", "Business", "Commercial Auto", "Other"].map((type) => (
                  <label key={type} className="inline-flex items-center">
                    <input
                      type="checkbox"
                      name="insurance-types[]"
                      value={type}
                      className="form-checkbox h-4 w-4 text-blue-600 rounded"
                    />
                    <span className="ml-2 text-sm text-gray-700">{type}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="quote-explanation" className="block text-sm font-medium text-gray-700">
                Tell us what you're looking to quote
              </label>
              <textarea
                id="quote-explanation"
                name="quote-explanation"
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Please provide details about what you're looking to insure..."
                required
              ></textarea>
            </div>

            <div className="flex justify-center pt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2 rounded-full flex items-center gap-2 disabled:opacity-70"
              >
                <span>{isSubmitting ? "Sending..." : t("send")}</span>
                <div className="relative w-8 h-8">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="transform rotate-45"
                    >
                      <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                      <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                      <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                      <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                    </svg>
                  </div>
                </div>
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default QuoteDialog

