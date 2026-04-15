export function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "KES 0",
      period: "/month",
      description: "Perfect for trying out Semai",
      features: [
        "20 messages per month",
        "English & Swahili support",
        "Basic AI responses",
        "Standard response time",
      ],
      cta: "Start Free",
      featured: false,
    },
    {
      name: "Pro",
      price: "KES 199",
      period: "/month",
      description: "For daily AI assistance",
      features: [
        "Unlimited messages",
        "English & Swahili support",
        "Advanced AI responses",
        "Priority response time",
        "Longer conversations",
        "Pay via M-Pesa",
      ],
      cta: "Go Pro",
      featured: true,
    },
  ]

  return (
    <section id="pricing" className="py-16 md:py-24 bg-card">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Simple, Affordable Pricing
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Start free, upgrade when you need more. Pay with M-Pesa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative rounded-2xl p-8 ${
                plan.featured
                  ? "bg-primary text-primary-foreground ring-4 ring-primary/20"
                  : "bg-background border border-border"
              }`}
            >
              {plan.featured && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-accent text-accent-foreground px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              )}
              <div className="text-center mb-8">
                <h3 className={`text-xl font-semibold mb-2 ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className={`text-4xl font-bold ${plan.featured ? "text-primary-foreground" : "text-foreground"}`}>
                    {plan.price}
                  </span>
                  <span className={plan.featured ? "text-primary-foreground/70" : "text-muted-foreground"}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 ${plan.featured ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckIcon className={`w-5 h-5 flex-shrink-0 ${plan.featured ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={plan.featured ? "text-primary-foreground" : "text-foreground"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <a
                href="sms:20880?body=semai"
                className={`block w-full text-center py-3 px-6 rounded-xl font-semibold transition-colors ${
                  plan.featured
                    ? "bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    : "bg-primary text-primary-foreground hover:bg-primary/90"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
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
