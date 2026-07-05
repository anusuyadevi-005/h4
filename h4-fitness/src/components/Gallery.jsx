const gallery = [
  { src: "/gym/gym1.jpg", alt: "Premium gym machines at H4 Fitness Studio" },
  { src: "/gym/gym6.jpg", alt: "Treadmills and motivation mural wall" },
  { src: "/gym/gym3.jpg", alt: "H4 Fitness branded dumbbell rack" },
  { src: "/gym/gym7.jpg", alt: "Elliptical trainers and cardio section" },
  { src: "/gym/gym4.jpg", alt: "Motivation wall and Smith machine" },
  { src: "/gym/gym8.jpg", alt: "Pull-up station and yellow rack area" },
  { src: "/gym/gym2.jpg", alt: "Cable training area at H4 Fitness" },
  { src: "/gym/gym9.jpg", alt: "Barbell plates and wellness word wall" },
  { src: "/gym/gym5.jpg", alt: "Functional trainer cable crossover machine" },
];

function Gallery() {
  return (
    <section className="bg-black py-24">
      <div className="max-w-7xl mx-auto px-6">

        <h2 className="text-5xl font-bold text-center text-yellow-400">
          Our Gym
        </h2>

        <p className="text-center text-gray-400 mt-4 mb-16">
          Take a look inside H4 Fitness Studio — premium equipment, motivating atmosphere.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

          {gallery.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl group shadow-lg"
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-72 object-cover group-hover:scale-110 transition duration-500"
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Gallery;