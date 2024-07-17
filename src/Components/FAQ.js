import React, { useState } from 'react';
import './Faq.css';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: 'What is health for best food?',
      answer: 'Fruits: Apples, oranges, bananas, berries (like strawberries, blueberries, raspberries), kiwis.',
      open: false
    },
    {
      question: 'best food for you?',
      answer: 'Vegetables: Spinach, kale, broccoli, carrots, bell peppers, tomatoes..',
      open: false
    },
    {
      question: 'veg food is healthy from other food ?',
      answer: 'Yes, vegetarian food can be very healthy Rich in Nutrients: Vegetables, fruits, grains, and legumes are packed with vitamins, minerals, and antioxidants..',
      open: false
    },
    {
      question: 'do you know who is the largest food producers in the world?',
      answer: 'top three country is China Crops Rice, wheat, potatoes, tea, apples, fish, and various vegetables. IndiaCrops Rice, wheat, cotton, sugarcane, fruits, and vegetables.United States  Corn, soybeans, wheat, fruits, and vegetables Livestock: Beef, pork, poultry, dairy products',
      open: false
    },
    {
      question: 'fast food is not healthy for a human?',
      answer: 'Fast food is typically unhealthy due to its high levels of calories, fats, sugars, and sodium. Regular consumption can lead to health issues like obesity, heart disease, and diabetes.',
      open: false
    },
    {
      question: 'frequently ask question?',
      answer: 'Sure, here are some frequently asked questions (FAQs) about fast food and its health effects.',
      open: false
    },
    // Add more FAQs as needed
  ]);

  const toggleFAQ = index => {
    setFaqs(
      faqs.map((faq, i) =>
        i === index ? { ...faq, open: !faq.open } : { ...faq, open: false }
      )
    );
  };

  return (
    <div className="faq-wrapper" id='faq'>
      <div className='faq-container'>
        <h1> Frequently Asked Questions </h1>
        {faqs.map((faq, index) => (
          <div key={index} className='faq-question'>
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
