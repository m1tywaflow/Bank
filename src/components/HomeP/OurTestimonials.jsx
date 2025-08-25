import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const testimonialsData = {
  individuals: [
    {
      text: "YourBank has been my trusted financial partner for years. Their personalized service and innovative digital banking solutions have made managing my finances a breeze.",
      author: "Sara T",
    },
    {
      text: "I recently started my own business, and YourBank has been instrumental in helping me set up my business accounts and secure the financing I needed. Their expert guidance and tailored solutions have been invaluable.",
      author: "John D",
    },
    {
      text: "I love the convenience of YourBank's mobile banking app. It allows me to stay on top of my finances and make transactions on the go. The app is user-friendly and secure, giving me peace of mind.",
      author: "Emily G",
    },
  ],
  businesses: [
    {
      text: "YourBank has provided our company with innovative financial tools that streamline our operations. Their solutions save us time and money.",
      author: "Michael R",
    },
    {
      text: "Partnering with YourBank has transformed our business finances. Their expert team understands our needs and provides tailored support.",
      author: "Anna L",
    },
  ],
};

export default function Testimonials() {
  const [activeTab, setActiveTab] = useState("individuals");
  const [currentIndex, setCurrentIndex] = useState(0);

  const testimonials = testimonialsData[activeTab];

  const prevSlide = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? testimonials.length - 1 : prev - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prev) =>
      prev === testimonials.length - 1 ? 0 : prev + 1
    );
  };

  // Автопрокрутка каждые 5 секунд
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [currentIndex, activeTab]);

  return (
    <section className="bg-[#0a0a0a] text-white py-16 px-6 md:px-20">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Our <span className="text-lime-400">Testimonials</span>
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-8">
          Discover how YourBank has transformed lives with innovative digital
          solutions and personalized customer service. See why our clients trust
          us for a secure and prosperous financial journey.
        </p>

        {/* Tabs */}
        <div className="flex justify-center space-x-2 mb-12">
          <button
            onClick={() => {
              setActiveTab("individuals");
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === "individuals"
                ? "bg-lime-400 text-black font-semibold"
                : "bg-gray-900 text-gray-300"
            }`}
          >
            For Individuals
          </button>
          <button
            onClick={() => {
              setActiveTab("businesses");
              setCurrentIndex(0);
            }}
            className={`px-6 py-2 rounded-full transition ${
              activeTab === "businesses"
                ? "bg-lime-400 text-black font-semibold"
                : "bg-gray-900 text-gray-300"
            }`}
          >
            For Businesses
          </button>
        </div>

        {/* Testimonials Slider */}
        <div className="relative flex items-center justify-center">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>

          {/* Animated Testimonial Card */}
          <div className="bg-transparent max-w-xl px-6 text-center min-h-[220px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
              >
                <Quote className="w-10 h-10 text-lime-400 mx-auto mb-4" />
                <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                  {testimonials[currentIndex].text}
                </p>
                <p className="text-lime-400 font-semibold">
                  {testimonials[currentIndex].author}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 p-3 rounded-full bg-gray-900 hover:bg-gray-800 transition"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        </div>
      </div>
    </section>
  );
}
