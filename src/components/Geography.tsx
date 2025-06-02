import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Geography = () => {
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
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 font-montserrat">
          География работы
        </h2>
        <div className="mb-8 text-center">
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Забираем товар с крупнейших торговых площадок и логистических
            центров
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {locations.map((location, index) => (
            <Card
              key={index}
              className="text-center hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Icon name="MapPin" size={24} className="text-blue-600" />
                </div>
                <CardTitle className="text-lg">{location.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-green-600 font-medium">{location.type}</p>
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
