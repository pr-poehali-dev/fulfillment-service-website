import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Benefits = () => {
  const benefits = [
    {
      icon: "DollarSign",
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Почему выбирают нас
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={benefit.icon}
                    size={32}
                    className="text-blue-600"
                  />
                </div>
                <h3 className="font-semibold text-lg mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
