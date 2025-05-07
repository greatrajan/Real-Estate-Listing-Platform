"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      question: "How do I list my property on your website?",
      answer:
        "To list your property, you need to create an account and click on 'List Property' button. Fill in the required details about your property, upload high-quality images, and submit for review. Our team will verify the listing and publish it within 24 hours.",
    },
    {
      question: "What documents do I need to buy a property?",
      answer:
        "The essential documents include identity proof (Aadhar, PAN card), address proof, income proof (salary slips, ITR), property documents (title deed, NOC), and bank statements. Additional documents may be required depending on the property type and location.",
    },
    {
      question: "How long does the property registration process take?",
      answer:
        "The property registration process in India typically takes between 7-30 days, depending on the state and local regulations. This includes document verification, payment of stamp duty and registration fees, and final registration at the sub-registrar's office.",
    },
    {
      question: "Do you help with home loans?",
      answer:
        "Yes, we have partnerships with major banks and financial institutions to help you secure the best home loan rates. Our mortgage advisors can guide you through the application process and help you compare different loan options.",
    },
    {
      question: "What are the typical closing costs when buying a property?",
      answer:
        "Closing costs typically include stamp duty (3-7% of property value), registration fees (1-2%), GST (if applicable), brokerage fees (1-2%), legal fees, and loan processing fees. These vary by state and property value.",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">{faq.question}</AccordionTrigger>
                <AccordionContent>{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        <div className="text-center mt-10">
          <p className="text-gray-600">
            Still have questions?{" "}
            <a href="#" className="text-teal-600 font-medium">
              Contact our support team
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
