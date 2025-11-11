import { Scissors, Palette, Sparkles, Heart } from "lucide-react";
import { Card } from "@/components/ui/card";

const services = [
  {
    icon: Scissors,
    title: "Cortes",
    description: "Cortes modernos e clássicos para todos os estilos, valorizando sua personalidade única.",
    items: ["Corte Feminino", "Corte Masculino", "Corte Infantil"],
  },
  {
    icon: Palette,
    title: "Coloração",
    description: "Técnicas avançadas de coloração para resultados vibrantes e duradouros.",
    items: ["Balayage", "Ombré", "Luzes", "Coloração Completa"],
  },
  {
    icon: Sparkles,
    title: "Tratamentos",
    description: "Tratamentos profissionais para revitalizar e fortalecer seus cabelos.",
    items: ["Hidratação", "Reconstrução", "Botox Capilar", "Cauterização"],
  },
  {
    icon: Heart,
    title: "Penteados",
    description: "Penteados elegantes e sofisticados para ocasiões especiais.",
    items: ["Penteados Sociais", "Noivas", "Madrinhas", "Formatura"],
  },
];

export const ServicesSection = () => {
  return (
    <section className="py-24 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Nossos Serviços
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Serviços especializados para realçar sua beleza natural
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-glow transition-all duration-500 group cursor-pointer bg-card border-border"
            >
              <div className="mb-6 relative">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors duration-300">
                  <service.icon className="h-8 w-8 text-accent" />
                </div>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4 leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.items.map((item, idx) => (
                  <li key={idx} className="text-sm text-muted-foreground flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
