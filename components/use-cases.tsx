export function UseCases() {
  const useCases = [
    {
      category: "Students",
      icon: BookIcon,
      examples: [
        "semai explain photosynthesis",
        "semai gitahe gita biology",
        "semai solve 2x + 5 = 15",
        "semai essay outline on climate change",
      ],
    },
    {
      category: "Farmers",
      icon: PlantIcon,
      examples: [
        "semai best time to plant maize",
        "semai howuoro ndalo ni nzuri kwa mahindi",
        "semai how to treat tomato blight",
        "semai weather forecast Nakuru",
      ],
    },
    {
      category: "Business Owners",
      icon: BriefcaseIcon,
      examples: [
        "semai how to register a business in Kenya",
        "semai uria manonya biashara",
        "semai write a professional invoice",
        "semai marketing tips for small shop",
      ],
    },
    {
      category: "Everyday Life",
      icon: HomeIcon,
      examples: [
        "semai recipe for pilau",
        "semai jinsi ya kuandika barua nzuri",
        "semai first aid for burns",
        "semai translate hello to Kikuyu",
      ],
    },
    {
      category: "Health & Wellness",
      icon: HeartIcon,
      examples: [
        "semai symptoms of malaria",
        "semai kina cha malaria ni nini",
        "semai healthy breakfast ideas",
        "semai home remedies for headache",
      ],
    },
    {
      category: "Job Seekers",
      icon: SearchIcon,
      examples: [
        "semai write a CV summary",
        "semai kuma kwandika CV",
        "semai interview tips",
        "semai salary negotiation advice",
      ],
    },
  ]

  return (
    <section id="use-cases" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            What Can You Ask SEMAi?
          </h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            From homework help to business advice, SEMAi answers questions for everyone. Just text &quot;semai&quot; + your question.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-2xl p-6 hover:shadow-lg hover:border-primary/20 transition-all"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                  <useCase.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">
                  {useCase.category}
                </h3>
              </div>
              <div className="space-y-2">
                {useCase.examples.map((example, i) => (
                  <div
                    key={i}
                    className="text-sm bg-secondary/50 text-secondary-foreground px-3 py-2 rounded-lg"
                  >
                    {example}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function BookIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
    </svg>
  )
}

function PlantIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 19V6M12 6c0-2.5 2-4 4-4s4 2 4 4c0 3-4 4-4 4m-4-4c0-2.5-2-4-4-4S4 3.5 4 6c0 3 4 4 4 4m4 0v0" />
    </svg>
  )
}

function BriefcaseIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
    </svg>
  )
}

function HomeIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
  )
}

function HeartIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
    </svg>
  )
}

function SearchIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    </svg>
  )
}
