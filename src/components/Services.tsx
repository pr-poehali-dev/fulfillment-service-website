import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Services = () => {
  const { ref, isVisible } = useScrollAnimation();
  const services = [
    {
      icon: "PackageOpen",
      title: "Забор товара",
      description: "Забираем товар напрямую от поставщиков с рынков и складов",
    },
    {
      icon: "Calculator",
      title: "Пересчет товара",
      description:
        "Точный подсчет количества и проверка соответствия документам",
    },
    {
      icon: "Search",
      title: "Проверка на брак",
      description:
        "Тщательная проверка каждой единицы на дефекты и повреждения",
    },
    {
      icon: "Tag",
      title: "Маркировка",
      description:
        "Нанесение необходимых этикеток и штрих-кодов для маркетплейсов",
    },
    {
      icon: "Package",
      title: "Упаковка",
      description:
        "Профессиональная упаковка согласно требованиям маркетплейсов",
    },
    {
      icon: "Truck",
      title: "Отгрузка",
      description:
        "Доставка готового товара на склады Wildberries, Ozon и других площадок",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 font-montserrat text-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Фулфилмент услуги полного цикла
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={`hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 group ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardHeader className="text-center">
                <div className="bg-gradient-to-br from-secondary/20 to-secondary/30 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md group-hover:scale-110 transition-transform">
                  <Icon
                    name={service.icon}
                    size={36}
                    className="text-secondary"
                  />
                </div>
                <CardTitle className="text-xl font-bold text-primary">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center leading-relaxed">
                  {service.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;