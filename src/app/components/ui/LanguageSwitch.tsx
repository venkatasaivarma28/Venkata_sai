'use client'

import { useLanguage } from '@/app/components/providers/LanguageProvider'

export default function LanguageSwitch() {
  const { language, setLanguage } = useLanguage()

  return (
    <div className="flex items-center bg-foreground/5 rounded-lg p-1">
      <button
        onClick={() => setLanguage('en')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'en'
            ? 'bg-foreground text-background shadow-md'
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="Switch to English"
      >
        EN
      </button>
      <button
        onClick={() => setLanguage('ja')}
        className={`px-3 py-1 rounded-md text-sm font-medium transition-all duration-200 ${
          language === 'ja'
            ? 'bg-foreground text-background shadow-md'
            : 'text-foreground/70 hover:text-foreground'
        }`}
        aria-label="Switch to Japanese"
      >
        日本
      </button>
    </div>
  )
} 