"use client"

export function Pricing() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Completely Free
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Semai is free with unlimited messages. Chat with AI on your phone anytime.
          </p>
        </div>

        <div className="flex justify-center">
          <div className="rounded-2xl p-8 bg-primary text-primary-foreground ring-4 ring-primary/20 max-w-md w-full">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-semibold mb-4">
                Free
              </h3>
              <div className="flex items-baseline justify-center gap-1 mb-4">
                <span className="text-5xl font-bold">
                  KES 0
                </span>
              </div>
              <p className="text-primary-foreground/80">
                Everything included, no limits
              </p>
            </div>

            <ul className="space-y-4 mb-8">
              {[
                "Unlimited messages",
                "English & Swahili support",
                "AI responses on any topic",
                "24/7 availability",
              ].map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <CheckIcon className="w-5 h-5 flex-shrink-0 text-primary-foreground" />
                  <span className="text-primary-foreground">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            <a
              href="sms:20880?body=semai"
              className="block w-full text-center py-3 px-6 rounded-xl font-semibold transition-colors bg-primary-foreground text-primary hover:bg-primary-foreground/90"
            >
              Start Chatting
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
