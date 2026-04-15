import Image from "next/image"
import { SEMAI_CONFIG } from "@/config/semai"
import { SMSButton } from "@/components/sms-button"

export function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-primary rounded-3xl p-8 md:p-12 lg:p-16 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]" />
          
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4 text-balance">
                Ready to Try SEMAi?
              </h2>
              <p className="text-lg text-primary-foreground/80 mb-8 max-w-xl">
                Join thousands of {SEMAI_CONFIG.country}ns already using AI via SMS. No data needed.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <SMSButton className="inline-flex items-center justify-center gap-2 bg-primary-foreground text-primary px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary-foreground/90 transition-colors">
                  <MessageIcon className="w-5 h-5" />
                  Text semai to {SEMAI_CONFIG.shortcode}
                </SMSButton>
              </div>
              
              <p className="mt-6 text-sm text-primary-foreground/60">
                Works on {SEMAI_CONFIG.networks.join(" and ")} networks
              </p>
            </div>
            
            <div className="flex-shrink-0">
              <Image
                src="/semai-logo.png"
                alt="Semai AI Assistant"
                width={200}
                height={200}
                className="w-40 h-40 md:w-48 md:h-48 drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}
