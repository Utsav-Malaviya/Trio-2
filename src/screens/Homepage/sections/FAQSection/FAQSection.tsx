import { ChevronDownIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FAQSection = (): JSX.Element => {
  // FAQ data for mapping
  const faqItems = [
    {
      question: "What exactly is dropshipping?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How do I know this isn't a scam?",
      answer:
        "We understand your concern. Over 60+ students from India and abroad are already enrolled and learning with us. We offer live sessions and one-on-one doubt-solving to ensure real progress.",
      defaultOpen: true,
    },
    {
      question: "Is my payment safe and refundable?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Do I need any experience or investment to start?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How do I know what products to sell?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "Why are your prices lower than other platforms?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "I still have doubts before enrolling. Can I talk to someone?",
      answer:
        "Of course! Just submit your details through our Contact Us form, and our representative will call you directly to answer all your questions.",
      defaultOpen: true,
    },
    {
      question: "Can I talk to a student who has already enrolled?",
      answer: "",
      defaultOpen: false,
    },
    {
      question: "How do I make a payment after filling the form?",
      answer: "",
      defaultOpen: false,
    },
  ];

  return (
    <section className="py-16 px-4 lg:px-8 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-roboto-serif font-bold text-3xl lg:text-4xl text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="font-poppins font-medium text-lg text-gray-600 max-w-2xl mx-auto">
            Get answers to the most common questions about our e-commerce training program
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          <div className="w-full lg:w-3/5">
        <Accordion type="single" collapsible className="space-y-4">
          {faqItems.map((item, index) => (
            <AccordionItem
              key={`faq-${index}`}
              value={`item-${index}`}
              className={`bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group ${item.defaultOpen ? "border-2 border-[#1ab2b7] shadow-[#1ab2b7]/20" : "border border-gray-200"}`}
            >
              <AccordionTrigger
                className={`px-4 lg:px-6 py-4 lg:py-5 flex items-center justify-between ${item.defaultOpen ? "text-[#1ab2b7]" : "text-gray-800"} font-semibold text-sm lg:text-base leading-6 hover:text-[#1ab2b7] transition-colors duration-300`}
              >
                <span className="text-left flex-1 pr-4">{item.question}</span>
                <div className="w-[28px] h-[28px] bg-gradient-to-r from-[#1ab2b7] to-[#4cd0d4] rounded-full flex items-center justify-center shrink-0 ml-2 group-hover:scale-110 transition-transform duration-300 shadow-md">
                  <ChevronDownIcon className="w-5 h-5 text-white" />
                </div>
              </AccordionTrigger>
              {item.answer && (
                <AccordionContent className="px-6 pb-4">
                  <p className="font-poppins font-medium text-gray-600 text-sm lg:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </div>

          <div className="w-full lg:w-2/5 flex flex-col items-center">
            <div className="relative w-full max-w-sm lg:max-w-[376px] group">
          <img
                className="w-64 h-64 lg:w-80 lg:h-80 mx-auto object-cover rounded-2xl shadow-2xl group-hover:shadow-3xl transition-all duration-500 group-hover:scale-105"
                alt="Customer support team"
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
          />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1ab2b7]/20 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
              <p className="font-poppins font-medium text-gray-500 text-sm lg:text-base leading-relaxed mt-6 text-center">
                Ask anything you want to know about E-commerce and Dropshipping
          </p>

            <div className="w-full max-w-sm lg:max-w-[399px] mt-6">
          <Input
                className="h-12 lg:h-14 rounded-xl border-2 border-gray-200 focus:border-[#1ab2b7] font-medium text-gray-700 text-sm lg:text-base px-4 transition-all duration-300 hover:border-[#4cd0d4] shadow-sm focus:shadow-lg"
            placeholder="Enter your question here"
          />
        </div>

            <Button className="mt-8 lg:mt-10 w-full max-w-xs lg:w-[320px] h-12 lg:h-[57px] bg-gradient-to-r from-[#4cd0d4] to-[#1ab2b7] hover:from-[#3ab8bc] hover:to-[#158a8e] rounded-full shadow-2xl hover:shadow-3xl font-pt-serif font-bold text-white text-lg lg:text-xl transition-all duration-300 hover:scale-105 group">
              <span>Send Question</span>
              <div className="w-6 h-6 lg:w-8 lg:h-8 ml-4 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-all duration-300">
                <span className="text-sm">→</span>
              </div>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
