const gymImages = [
  "/gym/gym1.jpg",
  "/gym/gym2.jpg",
  "/gym/gym3.jpg",
  "/gym/gym4.jpg",
  "/gym/gym5.jpg",
];

const machines = [
  {
    name: "Treadmill",
    desc: "Improve endurance and burn calories with high-performance treadmills.",
  },
  {
    name: "Bench Press",
    desc: "Build chest, shoulders, and triceps with premium bench press stations.",
  },
  {
    name: "Smith Machine",
    desc: "Safe and effective strength training for beginners and professionals.",
  },
  {
    name: "Cable Machine",
    desc: "Full-body workouts with adjustable resistance and multiple exercises.",
  },
  {
    name: "Leg Press",
    desc: "Develop lower-body strength using advanced leg press machines.",
  },
  {
    name: "Dumbbell Zone",
    desc: "Complete range of dumbbells for strength and muscle development.",
  },
];

function Equipment() {
  return (
    <section className="bg-[#111] py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Featured Equipment
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Train with premium fitness equipment for every workout style.
        </p>

        <div className="grid md:grid-cols-3 gap-8">

          {machines.map((machine, index) => (
            <div
              key={index}
              className="bg-[#1a1a1a] rounded-2xl overflow-hidden shadow-lg hover:-translate-y-3 transition duration-300"
            >
              {/* Real gym image cycling through 5 photos */}
              <div className="h-60 overflow-hidden">
                <img
                  src={gymImages[index % gymImages.length]}
                  alt={machine.name}
                  className="w-full h-full object-cover hover:scale-110 transition duration-500"
                />
              </div>

              <div className="p-6">

                <h3 className="text-2xl font-bold text-yellow-400">
                  {machine.name}
                </h3>

                <p className="text-gray-300 mt-4">
                  {machine.desc}
                </p>

                <button className="mt-6 bg-yellow-400 text-black px-6 py-3 rounded-full font-bold hover:bg-yellow-300 transition">
                  Learn More
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Equipment;