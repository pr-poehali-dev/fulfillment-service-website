import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

const Gallery = () => {
  const images = [
    {
      url: "https://cdn.poehali.dev/files/487cd19b-bf46-4da1-8684-2104d3413fb6.jpg",
      title: "Упаковка товаров",
      description: "Профессиональная упаковка для маркетплейсов",
    },
    {
      url: "https://cdn.poehali.dev/files/89fd2c6a-bd8b-44ef-8032-e379eb12c6ab.jpg",
      title: "Складская логистика",
      description: "Организация и хранение товаров",
    },
    {
      url: "https://cdn.poehali.dev/files/79e98387-b799-4029-8a5a-30308753f014.jpg",
      title: "Подготовка к отгрузке",
      description: "Контроль качества перед отправкой",
    },
    {
      url: "https://cdn.poehali.dev/files/fdab3e31-29ef-4d99-8f00-ff6dccb68191.jpg",
      title: "Работа с товарами",
      description: "Профессиональная обработка заказов",
    },
    {
      url: "https://cdn.poehali.dev/files/cbc5a9cd-baf2-4ecf-bbd2-eb569a90ca31.jpg",
      title: "Упаковочное оборудование",
      description: "Современные технологии упаковки",
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

        <div className="max-w-4xl mx-auto">
          <Carousel className="w-full">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                    <CardContent className="p-0">
                      <img
                        src={image.url}
                        alt={image.title}
                        className="w-full h-64 object-cover"
                      />
                      <div className="p-4">
                        <h3 className="font-semibold mb-2">{image.title}</h3>
                        <p className="text-sm text-gray-600">
                          {image.description}
                        </p>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
