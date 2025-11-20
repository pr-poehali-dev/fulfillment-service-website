import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const Benefits = () => {
  const { ref, isVisible } = useScrollAnimation();
  const benefits = [
    {
      icon: "Ruble",
      title: "Низкие цены",
      description:
        "Конкурентная стоимость услуг — экономьте на логистике до 40%",
    },
    {
      icon: "Clock",
      title: "Быстрая обработка",
      description: "Весь цикл от приемки до отгрузки за 24-48 часов",
    },
    {
      icon: "Shield",
      title: "Контроль качества",
      description: "Тщательная проверка каждой единицы товара на брак",
    },
    {
      icon: "Truck",
      title: "Полный цикл",
      description: "От забора товара до доставки на склады маркетплейсов",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="container mx-auto px-4">
        <h2 className={`text-4xl font-bold text-center mb-16 font-montserrat text-primary transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          Преимущества нашего фулфилмента
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className={`text-center hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border-2 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <CardContent className="p-8">
                <div className="bg-gradient-to-br from-blue-100 to-blue-200 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md">
                  <Icon
                    name={benefit.icon}
                    size={36}
                    className="text-primary"
                  />
                </div>
                <h3 className="font-bold text-xl mb-3 text-primary">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;