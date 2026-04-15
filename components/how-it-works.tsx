export function HowItWorks() {
  const steps = [
    {
      number: "1",
      title: "Text \"SEMAI\" to 20880",
      description: "Open your SMS app and send the word SEMAI to shortcode 20880. Works on any Safaricom or Airtel number.",
      icon: SendIcon,
    },
    {
      number: "2",
      title: "Ask Anything",
      description: "Type your question in English or Swahili. Ask about weather, recipes, homework help, business advice, and more.",
      icon: QuestionIcon,
    },
    {
      number: "3",
      title: "Get Instant Reply",
      description: "Receive a helpful AI-powered response within seconds. Continue the conversation naturally via SMS.",
      icon: ReplyIcon,
    },
  ]

  return (
    <section id="how-it-works" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            How It Works
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start chatting with AI in under 30 seconds. No downloads, no sign-ups, no internet required.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, index) => (
            <div key={index} className="relative text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-primary/10 mb-6">
                <step.icon className="w-8 h-8 text-primary" />
              </div>
              <div className="absolute top-8 left-[60%] hidden md:block w-[calc(100%-2rem)] h-[2px] bg-border last:hidden" style={{ display: index === 2 ? 'none' : undefined }} />
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold mb-4">
                {step.number}
              </span>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SendIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
  )
}

function QuestionIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  )
}

function ReplyIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" />
    </svg>
  )
}
