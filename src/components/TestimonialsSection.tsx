import { Star } from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    name: "Ana Paula Silva",
    initials: "AP",
    rating: 5,
    text: "Simplesmente perfeito! A coloração ficou exatamente como eu queria. A equipe é super atenciosa e profissional. Já virei cliente fiel!",
    service: "Balayage",
  },
  {
    name: "Carlos Eduardo",
    initials: "CE",
    rating: 5,
    text: "Melhor barbeiro da região! Sempre saio satisfeito com o corte. O ambiente é agradável e o atendimento é impecável.",
    service: "Corte Masculino",
  },
  {
    name: "Mariana Costa",
    initials: "MC",
    rating: 5,
    text: "Meu cabelo estava muito danificado e o tratamento de reconstrução fez milagres! Voltou a ter vida e brilho. Super recomendo!",
    service: "Tratamento Capilar",
  },
  {
    name: "Juliana Mendes",
    initials: "JM",
    rating: 5,
    text: "O penteado para o meu casamento ficou um sonho! Durou o dia todo e recebi tantos elogios. Muito obrigada por tornar meu dia ainda mais especial!",
    service: "Penteado Noiva",
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-24 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A satisfação dos nossos clientes é nossa maior recompensa
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-elegant transition-all duration-500 flex flex-col bg-card border-border"
            >
              <div className="flex items-center gap-4 mb-4">
                <Avatar className="h-12 w-12 bg-accent/10 border-2 border-accent/20">
                  <AvatarFallback className="text-accent font-semibold">
                    {testimonial.initials}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <h4 className="font-semibold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.service}</p>
                </div>
              </div>

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>

              <p className="text-muted-foreground leading-relaxed flex-grow">
                "{testimonial.text}"
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
