import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { AboutAI } from "@/components/about-ai"
import { UseCases } from "@/components/use-cases"
import { Features } from "@/components/features"
import { Pricing } from "@/components/pricing"
import { CTA } from "@/components/cta"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <AboutAI />
        <UseCases />
        <Features />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
