import Image from "next/image"

export function Hero() {
  return (
    <section className="pt-24 pb-16 md:pt-32 md:pb-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="font-semibold">SEMA</span>
              <span className="text-muted-foreground">(Swahili: &quot;tell me&quot;)</span>
              <span>+</span>
              <span className="font-semibold">AI</span>
              <span className="text-muted-foreground">=</span>
              <span className="font-bold text-primary">SEMAi</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight text-balance">
              Your AI Assistant,{" "}
              <span className="text-primary">Via SMS</span>
            </h1>
            <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Chat with AI on any phone in Kenya. <span className="font-semibold text-foreground">No data needed</span>. 
              Just text from your Safaricom or Airtel number.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="sms:20880?body=semai"
                className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-primary/90 transition-colors shadow-lg shadow-primary/25"
              >
                <MessageIcon className="w-5 h-5" />
                Text semai to 20880
              </a>
              <a
                href="#how-it-works"
                className="inline-flex items-center justify-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-semibold text-lg hover:bg-secondary/80 transition-colors"
              >
                Learn More
              </a>
            </div>
            <div className="mt-8 flex items-center gap-6 justify-center lg:justify-start text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-accent" />
                <span>Works on any phone</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckIcon className="w-4 h-4 text-accent" />
                <span>No internet needed</span>
              </div>
            </div>
          </div>
          
          <div className="flex-1 flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  )
}

function PhoneMockup() {
  return (
    <div className="relative">
      <div className="w-[280px] md:w-[320px] bg-foreground rounded-[3rem] p-3 shadow-2xl">
        <div className="bg-card rounded-[2.5rem] overflow-hidden">
          <div className="bg-primary/10 px-4 py-3 flex items-center gap-3 border-b border-border">
            <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
              <Image
                src="/semai-logo.png"
                alt="Semai"
                width={32}
                height={32}
                className="w-8 h-8"
              />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Semai</p>
              <p className="text-xs text-muted-foreground">20880</p>
            </div>
          </div>
          
          <div className="p-4 space-y-3 min-h-[400px] bg-card">
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[200px]">
                <p className="text-sm">semai nairobi weather leo</p>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tl-sm max-w-[220px]">
                <p className="text-sm">Nairobi: 24°C, partly cloudy. Expect light showers tonight 🌧️</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[200px]">
                <p className="text-sm">semai jinsi ya kuandika essay</p>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tl-sm max-w-[220px]">
                <p className="text-sm">Andika intro, 3 main points, na conclusion. Intro ya 2-3 sentences...</p>
              </div>
            </div>
            
            <div className="flex justify-end">
              <div className="bg-primary text-primary-foreground px-4 py-2 rounded-2xl rounded-tr-sm max-w-[200px]">
                <p className="text-sm">semai How to start a biz?</p>
              </div>
            </div>
            
            <div className="flex justify-start">
              <div className="bg-secondary text-secondary-foreground px-4 py-2 rounded-2xl rounded-tl-sm max-w-[220px]">
                <p className="text-sm">Research market, create a plan, manage costs. Start small & grow! 💡</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-primary/20 rounded-full blur-3xl" />
    </div>
  )
}

function MessageIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
    </svg>
  )
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  )
}
