"use client"

import { useState } from "react"
import Link from "next/link"
import { useTranslation } from "@/app/hooks/use-translation"
import { LanguageSwitcher } from "@/components/language-switcher"
import { QuoteDialog } from "@/components/quote-dialog-formsubmit"

export function SiteHeader() {
  const { t } = useTranslation()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isQuoteDialogOpen, setIsQuoteDialogOpen] = useState(false)

  return (
    <header className="bg-white shadow-md py-4 px-6 md:px-10 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-blue-600"
          >
            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
          </svg>
          <h1 className="text-2xl font-bold text-blue-800">Rocket Insurance</h1>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 text-blue-700 font-medium items-center">
          <Link href="/" className="hover:text-blue-500 transition-colors">
            {t("home")}
          </Link>

          <div className="relative group">
            <button className="flex items-center gap-1 hover:text-blue-500 transition-colors">
              {t("services")}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="6 9 12 15 18 9"></polyline>
              </svg>
            </button>
            <div className="absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-50">
              <div className="py-1">
                <Link href="/auto-insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.6-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.5 2.8C1.4 11.3 1 12.1 1 13v3c0 .6.4 1 1 1h2"></path>
                      <circle cx="7" cy="17" r="2"></circle>
                      <path d="M9 17h6"></path>
                      <circle cx="17" cy="17" r="2"></circle>
                    </svg>
                    <span>{t("autoInsurance")}</span>
                  </div>
                </Link>
                <Link href="/home-insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                      <polyline points="9 22 9 12 15 12 15 22"></polyline>
                    </svg>
                    <span>{t("homeInsurance")}</span>
                  </div>
                </Link>
                <Link href="/beyond-basics" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <path d="M23 12a11.05 11.05 0 0 0-22 0zm-5 7a3 3 0 0 1-6 0v-7"></path>
                    </svg>
                    <span>{t("beyondBasics")}</span>
                  </div>
                </Link>
                <Link href="/business-insurance" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="mr-2 h-4 w-4"
                    >
                      <rect width="20" height="14" x="2" y="7" rx="2" ry="2"></rect>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path>
                    </svg>
                    <span>{t("businessInsurance")}</span>
                  </div>
                </Link>
              </div>
            </div>
          </div>

          <Link href="/careers" className="hover:text-blue-500 transition-colors">
            {t("careers")}
          </Link>

          <Link href="/about-us" className="hover:text-blue-500 transition-colors">
            {t("aboutUs")}
          </Link>

          <Link href="/contact" className="hover:text-blue-500 transition-colors">
            {t("contact")}
          </Link>

          <LanguageSwitcher />

          <button
            id="get-quote-button"
            onClick={() => setIsQuoteDialogOpen(true)}
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold tracking-wide uppercase text-sm px-4 py-2 rounded-full shadow-lg transform hover:scale-105 transition-all duration-300"
          >
            {t("getAQuote")}
          </button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-2">
          <LanguageSwitcher />
          <button
            className="bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center gap-2 mr-2 px-3 py-1"
            onClick={() => setIsQuoteDialogOpen(true)}
          >
            <span className="sr-only md:not-sr-only font-semibold tracking-wide uppercase text-sm">
              {t("getAQuote")}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-4 w-4 animate-pulse"
            >
              <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
              <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
              <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
              <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
            </svg>
          </button>
          <button className="text-blue-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? (
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
            ) : (
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
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-md z-50 md:hidden">
            <div className="flex flex-col p-4 space-y-3">
              <Link href="/" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("home")}
              </Link>
              <div className="py-2">
                <div className="flex items-center justify-between text-blue-700">
                  <span>{t("services")}</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </div>
                <div className="pl-4 mt-2 space-y-2">
                  <Link
                    href="/auto-insurance"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("autoInsurance")}
                  </Link>
                  <Link
                    href="/home-insurance"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("homeInsurance")}
                  </Link>
                  <Link
                    href="/beyond-basics"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("beyondBasics")}
                  </Link>
                  <Link
                    href="/business-insurance"
                    className="block py-1 text-blue-700 hover:text-blue-500 transition-colors"
                  >
                    {t("businessInsurance")}
                  </Link>
                </div>
              </div>
              <Link href="/careers" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("careers")}
              </Link>
              <Link href="/about-us" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("aboutUs")}
              </Link>
              <Link href="/contact" className="py-2 text-blue-700 hover:text-blue-500 transition-colors">
                {t("contact")}
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Quote Dialog */}
      <QuoteDialog isOpen={isQuoteDialogOpen} onClose={() => setIsQuoteDialogOpen(false)} />
    </header>
  )
}

