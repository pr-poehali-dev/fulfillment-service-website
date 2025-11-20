import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const CTA = () => {
  const { ref, isVisible } = useScrollAnimation();
  
  return (
    <section ref={ref} className="py-20 bg-gradient-to-br from-primary via-blue-600 to-blue-700 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
      <div className="container mx-auto px-4 relative z-10">
        <Card className={`max-w-4xl mx-auto shadow-2xl border-2 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <CardContent className="p-12 text-center">
            <h2 className="text-4xl font-bold mb-6 font-montserrat text-primary">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
              Свяжитесь с нами для расчета стоимости услуг и обсуждения условий
              сотрудничества. Первая консультация бесплатно!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 px-10 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <a href="tel:+79688901002">
                  <Icon name="Phone" size={20} />
                  Позвонить нам
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-lg border-2 border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <a href="https://wa.me/+79688901002">
                  <Icon name="MessageCircle" size={24} />
                  WhatsApp
                </a>
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="px-10 py-6 text-lg border-2 border-[#0088cc] text-[#0088cc] hover:bg-[#0088cc] hover:text-white shadow-lg hover:shadow-xl transition-all hover:scale-105"
                asChild
              >
                <a href="https://t.me/best_shoping">
                  <Icon name="Send" size={24} />
                  Telegram чат
                </a>
              </Button>
            </div>
            <div className="mt-10 pt-8 border-t-2 border-gray-200">
              <p className="text-base text-gray-600 mb-3 flex items-center justify-center gap-2">
                📍 Москва, ул. Сормовский проезд 7а К2
              </p>
              <p className="text-base text-gray-600">
                Работаем ежедневно с 9:00 до 21:00 | Быстрый ответ в течение
                часа
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default CTA;