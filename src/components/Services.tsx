import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Services = () => {
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
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          Фулфилмент услуги полного цикла
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon
                    name={service.icon}
                    size={32}
                    className="text-green-600"
                  />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-center">
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
