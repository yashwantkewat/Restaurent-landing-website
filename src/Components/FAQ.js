import React, { useState } from "react";
import "../Allcss/Faq.css";

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What is health for best food?",
      answer: "Fruits: Apples, oranges, bananas, berries (like strawberries, blueberries, raspberries), kiwis.",
      open: false,
    },
    {
      question: "Best food for you?",
      answer: "Vegetables: Spinach, kale, broccoli, carrots, bell peppers, tomatoes.",
      open: false,
    },
    {
      question: "Is veg food healthier than other food?",
      answer: "Yes, vegetarian food can be very healthy. It is rich in nutrients like vitamins, minerals, and antioxidants.",
      open: false,
    },
    {
      question: "Do you know who is the largest food producer in the world?",
      answer: "Top three countries: China, India, and the United States.",
      open: false,
    },
    {
      question: "Is fast food unhealthy for humans?",
      answer: "Fast food is typically unhealthy due to high calories, fats, sugars, and sodium. It can lead to obesity and heart issues.",
      open: false,
    },
  ]);

  const toggleFAQ = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) => ({
        ...faq,
        open: i === index ? !faq.open : false, // Toggle the clicked FAQ, close others
      }))
    );
  };

  return (
    <div className="faq-wrapper" id="faq">
      <div className="faq-container">
        <h1> Frequently Asked Questions </h1>
        {faqs.map((faq, index) => (
          <div key={index} className={`faq-question ${faq.open ? "open" : ""}`}>
            <div onClick={() => toggleFAQ(index)}>
              <h1>{faq.question}</h1>
              {faq.open && <h4>{faq.answer}</h4>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
