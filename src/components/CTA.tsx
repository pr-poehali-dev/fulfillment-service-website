import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const CTA = () => {
  return (
    <section className="py-16 bg-blue-600">
      <div className="container mx-auto px-4">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 text-center">
            <h2 className="text-3xl font-bold mb-4 font-montserrat">
              Готовы начать сотрудничество?
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              Свяжитесь с нами для расчета стоимости услуг и обсуждения условий
              сотрудничества. Первая консультация бесплатно!
            </p>
            <div className="flex justify-center gap-4 flex-wrap">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 px-8 py-3"
              >
                <Icon name="Phone" size={20} />
                Позвонить нам
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="Mail" size={20} />
                Написать письмо
              </Button>
              <Button variant="outline" size="lg" className="px-8 py-3">
                <Icon name="MessageCircle" size={20} />
                Telegram чат
              </Button>
            </div>
            <div className="mt-8 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
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
