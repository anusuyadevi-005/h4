import {
  FaDumbbell,
  FaRunning,
  FaUserTie,
  FaHeartbeat,
  FaAppleAlt,
  FaFire,
} from "react-icons/fa";

const services = [
  {
    icon: <FaDumbbell size={45} />,
    title: "Strength Training",
    desc: "Build muscle and improve strength using professional equipment.",
  },
  {
    icon: <FaRunning size={45} />,
    title: "Cardio Training",
    desc: "Improve stamina and burn calories with modern cardio machines.",
  },
  {
    icon: <FaUserTie size={45} />,
    title: "Personal Training",
    desc: "One-on-one coaching with certified fitness experts.",
  },
  {
    icon: <FaHeartbeat size={45} />,
    title: "CrossFit",
    desc: "High-intensity workouts to improve overall fitness.",
  },
  {
    icon: <FaAppleAlt size={45} />,
    title: "Nutrition Guidance",
    desc: "Healthy meal plans and nutrition advice from experts.",
  },
  {
    icon: <FaFire size={45} />,
    title: "Weight Loss Program",
    desc: "Customized programs designed to help you lose weight safely.",
  },
];

function Services() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Our Services
        </h2>

        <p className="text-center text-gray-400 mt-5 mb-16">
          Everything you need to achieve your fitness goals.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl p-8 shadow-lg hover:-translate-y-3 hover:bg-yellow-400 hover:text-black transition-all duration-300"
            >
              <div className="text-yellow-400 mb-6">
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>

              <p className="text-gray-300">
                {service.desc}
              </p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Services;