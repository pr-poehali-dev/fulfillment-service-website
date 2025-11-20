import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Geography = () => {
  const { ref, isVisible } = useScrollAnimation();
  const locations = [
    { name: "Садовод", type: "Рынок", city: "Москва" },
    { name: "Люблино", type: "Рынок", city: "Москва" },
    { name: "Карго", type: "Логистический центр", city: "Москва" },
    {
      name: "От поставщика в Москве и области",
      type: "Забор товара",
      city: "Московская обл.",
    },
    { name: "Южные Ворота", type: "Рынок", city: "Москва" },
    { name: "Дзержинск", type: "Склады", city: "Нижегородская обл." },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-6 font-montserrat text-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          География работы
        </h2>
        <div className={`mb-12 text-center transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            Забираем товар с крупнейших торговых площадок и логистических
            центров
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-3 shadow-md group-hover:scale-110 transition-transform">
                  <Icon name="MapPin" size={28} className="text-primary" />
                </div>
                <CardTitle className="text-lg font-bold text-primary">{location.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-secondary font-semibold">{location.type}</p>
                <p className="text-gray-500 text-sm">{location.city}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Geography;