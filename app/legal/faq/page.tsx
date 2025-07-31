import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const faqs = [
  {
    question: "What makes Duria durians different from others?",
    answer: "Our durians are hand-selected from premium orchards across Southeast Asia, with strict quality control measures. We work directly with experienced farmers and ensure proper handling throughout the supply chain to preserve the authentic flavor and texture."
  },
  {
    question: "How do you ensure the freshness during shipping?",
    answer: "We use temperature-controlled logistics and specialized packaging to maintain optimal conditions during transport. All shipments are tracked and monitored to ensure your durians arrive in perfect condition."
  },
  {
    question: "Are your products halal certified?",
    answer: "Yes, all our durian products are halal certified and meet international food safety standards. We provide certification documents upon request."
  },
  {
    question: "What is the shelf life of your durian products?",
    answer: "Fresh whole durians last 3-5 days at room temperature and up to 1 week refrigerated. Frozen pulp can be stored for up to 12 months. Processed products like ice cream and mochi have varying shelf lives as indicated on packaging."
  },
  {
    question: "Do you ship internationally?",
    answer: "Yes, we ship to over 15 countries worldwide. Shipping availability and costs vary by location. Contact us for specific shipping information to your country."
  },
  {
    question: "How can I become a retail partner?",
    answer: "We're always looking for quality retail partners. Please contact our business development team at business@durianexport.com with your company information and we'll discuss partnership opportunities."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept bank transfers, credit cards, and trade financing for bulk orders. Payment terms vary based on order size and customer relationship."
  },
  {
    question: "Can I visit your facilities?",
    answer: "We welcome visits from serious buyers and potential partners. Please schedule an appointment in advance through our contact page."
  },
  {
    question: "What varieties of durian do you offer?",
    answer: "We specialize in premium varieties including Musang King, D24, Tekka, and seasonal specialties. Product availability varies based on harvest seasons."
  },
  {
    question: "How do I know if a durian is ripe?",
    answer: "Ripe durians have a strong aroma, slightly soft shell when pressed gently, and may have small cracks. Our team provides detailed ripeness guides with each shipment."
  }
];

export default function FAQ() {
  return (
    <div className="min-h-screen py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about our products, shipping, and services.
          </p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-primary/5 rounded-lg p-8">
          <h3 className="text-xl font-semibold mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our team is here to help.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}