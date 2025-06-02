import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      url: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?w=500",
      title: "Склад с товарами",
      description: "Современное складское оборудование",
    },
    {
      url: "https://images.unsplash.com/photo-1553652618-de6239a63500?w=500",
      title: "Упаковка товаров",
      description: "Профессиональная упаковка для маркетплейсов",
    },
    {
      url: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=500",
      title: "Доставка",
      description: "Быстрая отгрузка на склады",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 font-montserrat">
            Наша работа в фотографиях
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Посмотрите, как мы работаем с вашими товарами
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <Card
              key={index}
              className="overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-0">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold mb-2">{image.title}</h3>
                  <p className="text-sm text-gray-600">{image.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
