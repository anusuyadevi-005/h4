import { FaCheckCircle } from "react-icons/fa";

const plans = [
  {
    title: "Basic",
    price: "₹999",
    duration: "/Month",
    features: [
      "Gym Access",
      "Cardio Zone",
      "Locker Facility",
      "Free Wi-Fi",
    ],
    button: "Join Now",
  },
  {
    title: "Premium",
    price: "₹1499",
    duration: "/Month",
    features: [
      "Everything in Basic",
      "Personal Trainer",
      "Diet Consultation",
      "Group Classes",
      "Body Assessment",
    ],
    button: "Most Popular",
    highlight: true,
  },
  {
    title: "Elite",
    price: "₹2499",
    duration: "/Month",
    features: [
      "Everything in Premium",
      "Unlimited Personal Training",
      "Nutrition Plan",
      "Steam Bath",
      "Priority Support",
    ],
    button: "Join Now",
  },
];

function Membership() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Membership Plans
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Choose the membership that fits your fitness journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 shadow-xl transition duration-300 hover:-translate-y-3 ${
                plan.highlight
                  ? "bg-yellow-400 text-black scale-105"
                  : "bg-[#1a1a1a] text-white"
              }`}
            >
              <h3 className="text-3xl font-bold text-center">
                {plan.title}
              </h3>

              <div className="text-center mt-6">
                <span className="text-5xl font-bold">
                  {plan.price}
                </span>

                <span className="text-lg">
                  {plan.duration}
                </span>
              </div>

              <div className="mt-8 space-y-4">

                {plan.features.map((feature, i) => (
                  <div key={i} className="flex items-center gap-3">

                    <FaCheckCircle />

                    <span>{feature}</span>

                  </div>
                ))}

              </div>

              <button
                className={`w-full mt-10 py-3 rounded-full font-bold transition ${
                  plan.highlight
                    ? "bg-black text-yellow-400 hover:bg-gray-900"
                    : "bg-yellow-400 text-black hover:bg-yellow-300"
                }`}
              >
                {plan.button}
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Membership;