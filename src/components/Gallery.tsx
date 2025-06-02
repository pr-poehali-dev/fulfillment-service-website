import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      url: "https://cdn.poehali.dev/files/41674f9a-5530-49b8-9f53-1463a5e0d3bc.jpg",
      title: "Склад с товарами",
      description: "Современное складское оборудование",
    },
    {
      url: "https://cdn.poehali.dev/files/0498dd2f-04a8-41da-ae49-5ade434c7494.jpg",
      title: "Упаковка товаров",
      description: "Профессиональная упаковка для маркетплейсов",
    },
    {
      url: "https://cdn.poehali.dev/files/9738c1cc-c1e4-40e8-a4f1-69e333fa01b5.jpg",
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
