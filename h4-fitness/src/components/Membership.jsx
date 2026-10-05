import { FaCheckCircle, FaStar } from "react-icons/fa";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const plans = [
  {
    title: "1 Month",
    price: "₹2,500",
    duration: "PER MONTH",
    features: [
      "Access to gym equipment",
      "Cardio zone access",
      "Locker facilities",
      "Basic fitness assessment",
      "Standard hours access"
    ],
    button: "JOIN NOW",
    highlight: false,
    tag: null
  },
  {
    title: "3 Months",
    price: "₹6,000",
    duration: "FOR 3 MONTHS",
    features: [
      "All 1 Month features",
      "Group class access",
      "Nutrition consultation",
      "Extended hours access",
      "Better value per month"
    ],
    button: "JOIN NOW",
    highlight: true,
    tag: "MOST POPULAR"
  },
  {
    title: "6 Months",
    price: "₹9,000",
    duration: "FOR 6 MONTHS",
    features: [
      "All 3 Month features",
      "Priority equipment access",
      "Diet plan customization",
      "Guest passes included",
      "Extended hours access",
      "Best value per month"
    ],
    button: "JOIN NOW",
    highlight: false,
    tag: null
  },
  {
    title: "12 Months",
    price: "₹14,000",
    duration: "FOR 1 YEAR",
    features: [
      "All 6 Month features",
      "12 PT Sessions FREE",
      "Personal training included",
      "Premium locker access",
      "Maximum savings",
      "Complete fitness package"
    ],
    button: "JOIN NOW",
    highlight: false,
    tag: "BEST VALUE"
  }
];

function Membership() {
  return (
    <section className="bg-[#050505] pt-12 pb-16 md:pt-16 md:pb-20 text-white relative overflow-hidden font-sans">
      {/* Background glowing blobs for Ultra-Premium feel */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full flex justify-center relative z-10 mt-4 px-4 md:px-8 pb-12 lg:pb-24 mb-16 lg:mb-24">
        <div className="w-full max-w-[1300px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 items-stretch pt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8, scale: 1.01 }}
              className={`flex flex-col rounded-[24px] p-8 lg:p-10 min-h-[600px] transition-all duration-300 h-full backdrop-blur-xl mt-4 ${
                plan.highlight
                  ? "bg-gradient-to-b from-yellow-500/20 to-black/90 border-2 border-yellow-500 shadow-[0_0_40px_rgba(234,179,8,0.25)] z-20"
                  : "bg-white/5 border border-white/10 hover:border-yellow-500/40 hover:bg-white/10 hover:shadow-[0_0_20px_rgba(234,179,8,0.1)]"
              }`}
            >
              {/* FIXED BADGE AREA - Ensures alignment */}
              <div className="h-8 mb-6 mt-4 flex items-center justify-center">
                {plan.tag && (
                  <div className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-black px-4 py-1.5 rounded-full text-[11px] md:text-xs font-black tracking-widest uppercase flex items-center justify-center gap-1.5 shadow-[0_0_15px_rgba(234,179,8,0.5)]">
                    <FaStar className="flex-shrink-0 text-[10px]" /> 
                    <span>{plan.tag}</span> 
                    <FaStar className="flex-shrink-0 text-[10px]" />
                  </div>
                )}
              </div>

              {/* CARD HEADER */}
              <div className="text-center mb-8 flex flex-col items-center">
                <h3 className={`text-2xl md:text-3xl font-bold mb-4 ${plan.highlight ? "text-yellow-400" : "text-white"}`}>
                  {plan.title}
                </h3>
                <div className="text-4xl lg:text-4xl xl:text-5xl font-black mb-3 tracking-tighter">
                  {plan.price}
                </div>
                <div className="text-sm font-bold text-gray-400 tracking-wider uppercase">
                  {plan.duration}
                </div>
              </div>

              {/* FEATURES */}
              <div className="flex-1 w-full flex flex-col gap-4 text-left px-1 mb-8">
                {plan.features.map((feature, i) => (
                  <motion.div 
                    key={i} 
                    className="flex items-start gap-3"
                    whileHover={{ x: 4 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <FaCheckCircle className={`mt-1 text-base flex-shrink-0 ${plan.highlight ? "text-yellow-400" : "text-gray-500"}`} />
                    <span className={`text-[15px] font-medium leading-relaxed ${plan.highlight ? "text-gray-100" : "text-gray-400"}`}>
                      {feature}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* JOIN NOW BUTTON - perfectly bottom aligned */}
              <div className="mt-auto w-full pt-6">
                <Link to="/contact" className="block w-full">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    className={`w-full py-4 rounded-[12px] font-black text-[15px] uppercase tracking-wider transition-all duration-300 flex items-center justify-center ${
                      plan.highlight
                        ? "bg-gradient-to-r from-yellow-400 to-yellow-600 text-black shadow-[0_4px_20px_rgba(234,179,8,0.4)] hover:shadow-[0_4px_25px_rgba(234,179,8,0.6)]"
                        : "bg-white/10 text-white hover:bg-yellow-500 hover:text-black border border-white/20 hover:border-yellow-500"
                    }`}
                  >
                    {plan.button}
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Membership;