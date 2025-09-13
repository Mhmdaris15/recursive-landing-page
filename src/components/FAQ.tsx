import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQProps {
  question: string;
  answer: string;
  value: string;
}

const FAQList: FAQProps[] = [
  {
    question: "What IT services does Recursive Tech offer?",
    answer: "We provide comprehensive IT solutions including web development, mobile app development, AI integration, cloud solutions, cybersecurity, digital transformation consulting, and custom software development tailored to your business needs.",
    value: "item-1",
  },
  {
    question: "How long does a typical web development project take?",
    answer: "Project timelines vary based on complexity and requirements. A simple business website typically takes 2-4 weeks, while complex web applications can take 8-16 weeks. We provide detailed timelines during our initial consultation and keep you updated throughout the development process.",
    value: "item-2",
  },
  {
    question: "Do you provide ongoing support and maintenance after project completion?",
    answer: "Yes, we offer comprehensive post-launch support including regular updates, security patches, performance monitoring, and technical assistance. We provide various maintenance packages to ensure your systems run smoothly and stay up-to-date.",
    value: "item-3",
  },
  {
    question: "Can you help integrate AI solutions into our existing business processes?",
    answer: "Absolutely! We specialize in AI integration and can help automate workflows, implement chatbots, data analytics, machine learning models, and other AI-powered solutions that enhance efficiency and drive business growth.",
    value: "item-4",
  },
  {
    question: "What makes Recursive Tech different from other IT service providers?",
    answer: "Our recursive approach means we continuously iterate and improve solutions based on real-world feedback. We combine cutting-edge technology with proven methodologies, offer personalized service, and maintain long-term partnerships with our clients to ensure sustained success.",
    value: "item-5",
  },
  {
    question: "Do you work with small businesses or only large enterprises?",
    answer: "We work with businesses of all sizes, from startups and small businesses to large enterprises. Our scalable solutions and flexible pricing models are designed to accommodate different budgets and requirements while delivering exceptional value.",
    value: "item-6",
  },
];

export const FAQ = () => {
  return (
    <section
      id="faq"
      className="container py-24 sm:py-32"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-4">
        Frequently Asked{" "}
        <span className="bg-gradient-to-b from-primary/60 to-primary text-transparent bg-clip-text">
          Questions
        </span>
      </h2>

      <Accordion
        type="single"
        collapsible
        className="w-full AccordionRoot"
      >
        {FAQList.map(({ question, answer, value }: FAQProps) => (
          <AccordionItem
            key={value}
            value={value}
          >
            <AccordionTrigger className="text-left">
              {question}
            </AccordionTrigger>

            <AccordionContent>{answer}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>

      <h3 className="font-medium mt-4">
        Still have questions?{" "}
        <a
          rel="noreferrer noopener"
          href="#contact"
          className="text-primary transition-all border-primary hover:border-b-2"
        >
          Contact us
        </a>
      </h3>
    </section>
  );
};
