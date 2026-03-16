import AnimatedSection from "@/components/AnimatedSection";

const reviews = [
  {
    initials: "A.M.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Dr. Speth was incredibly thorough and caring throughout the entire process.",
    procedure: "Septorhinoplasty",
  },
  {
    initials: "K.S.",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. The results exceeded my expectations — both functionally and aesthetically.",
    procedure: "Revision Surgery",
  },
  {
    initials: "M.W.",
    text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa.",
    procedure: "Sinus Surgery",
  },
  {
    initials: "T.B.",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Highly professional and empathetic approach.",
    procedure: "Septoplasty",
  },
  {
    initials: "L.H.",
    text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. I could not have been in better hands.",
    procedure: "Turbinate Surgery",
  },
];

const Reviews = () => {
  return (
    <div className="pt-24">
      <section className="py-20 lg:py-28">
        <div className="container mx-auto px-6 lg:px-8 max-w-4xl">
          <AnimatedSection>
            <p className="text-gold text-sm tracking-[0.2em] uppercase font-body mb-4">Testimonials</p>
            <h1 className="font-display text-4xl lg:text-5xl text-primary font-semibold mb-6">Patient Reviews</h1>
            <p className="text-foreground/70 font-body leading-relaxed mb-16 max-w-2xl">
              Hear from patients who have trusted Dr. Speth with their care.
            </p>
          </AnimatedSection>

          <div className="space-y-8">
            {reviews.map((review, i) => (
              <AnimatedSection key={i} delay={i * 0.08}>
                <div className="bg-card border border-border rounded-sm p-8">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-sm font-body font-medium">
                      {review.initials}
                    </div>
                    <span className="text-accent text-xs font-body font-medium tracking-wider uppercase">{review.procedure}</span>
                  </div>
                  <p className="text-foreground/70 font-body leading-relaxed italic">"{review.text}"</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Reviews;
