import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const works = [
  { image: gallery1, title: "Ombré Hair", category: "Coloração" },
  { image: gallery2, title: "Corte Masculino", category: "Corte" },
  { image: gallery3, title: "Penteado Noiva", category: "Penteados" },
  { image: gallery4, title: "Platinado", category: "Coloração" },
  { image: gallery5, title: "Cachos Definidos", category: "Tratamento" },
  { image: gallery6, title: "Bob Moderno", category: "Corte" },
];

export const WorkGallery = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Trabalhos
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Cada cliente é único e merece um visual exclusivo
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {works.map((work, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg shadow-elegant hover:shadow-glow transition-all duration-500 cursor-pointer aspect-square"
            >
              <img
                src={work.image}
                alt={work.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="inline-block px-3 py-1 bg-accent text-accent-foreground text-sm rounded-full mb-2">
                    {work.category}
                  </span>
                  <h3 className="text-2xl font-bold text-primary-foreground">
                    {work.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
