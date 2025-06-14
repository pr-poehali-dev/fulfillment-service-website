import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-600 to-blue-800 text-white py-20">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-5xl font-bold mb-6 font-montserrat">
          Фулфилмент услуги для маркетплейсов Wildberries и Ozon
        </h1>
        <p className="text-xl mb-8 max-w-3xl mx-auto opacity-90">
          Профессиональный фулфилмент: забираем товар от поставщика, проводим
          полный цикл обработки и отгружаем на склады маркетплейсов. Складские
          услуги с экономией до 40%!
        </p>
        <div className="flex justify-center gap-4 flex-wrap">
          <Button
            size="lg"
            className="bg-green-500 hover:bg-green-600 text-white px-8 py-3"
            asChild
          >
            <a href="tel:+79688901002">
              <Icon name="Phone" size={20} />
              Узнать стоимость
            </a>
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-white text-white hover:bg-white hover:text-blue-800 px-8 py-3"
            asChild
          >
            <a href="https://wa.me/+79688901002">
              <Icon name="MessageCircle" size={20} />
              WhatsApp
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
