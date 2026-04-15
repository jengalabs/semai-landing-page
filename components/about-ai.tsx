export function AboutAI() {
  return (
    <section id="about-ai" className="py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-card border border-border rounded-3xl p-8 md:p-12">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            What is AI?
          </h2>
          
          <div className="space-y-6 text-muted-foreground">
            <p className="text-lg leading-relaxed">
              AI stands for <span className="font-semibold text-foreground">Artificial Intelligence</span>—a computer system that learns from information and can answer questions, solve problems, and help you with tasks, just like talking to a knowledgeable person.
            </p>

            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">How Semai&apos;s AI Works</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>You send a question via SMS</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>Semai&apos;s AI understands your question in any language</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>It finds the best answer from its knowledge base</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold text-xl">→</span>
                  <span>It sends back a helpful reply via SMS</span>
                </li>
              </ul>
            </div>

            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-secondary/20 rounded-2xl p-5">
                <h4 className="font-semibold text-foreground mb-2">What You Can Ask</h4>
                <p className="text-sm">Homework help, recipes, weather, business advice, language translation, health tips, job advice, and much more.</p>
              </div>
              <div className="bg-accent/20 rounded-2xl p-5">
                <h4 className="font-semibold text-foreground mb-2">No Special Skills Needed</h4>
                <p className="text-sm">If you can send an SMS, you can use Semai. Just type naturally in any language and the AI will understand.</p>
              </div>
            </div>

            <p className="text-lg leading-relaxed pt-4">
              Think of Semai as a smart friend in your phone who speaks your language, knows a lot of things, and is always available to help—accessible via simple text message.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
