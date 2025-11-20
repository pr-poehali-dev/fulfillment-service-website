import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-500 via-blue-600 to-blue-700 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold mb-6 font-montserrat"
        >
          Фулфилмент услуги для маркетплейсов Wildberries и Ozon
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xl mb-10 max-w-3xl mx-auto opacity-95 leading-relaxed"
        >
          Профессиональный фулфилмент: забираем товар от поставщика, проводим
          полный цикл обработки и отгружаем на склады маркетплейсов. Складские
          услуги с экономией до 40%!
        </motion.p>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-4 flex-wrap"
        >
          <Button
            size="lg"
            className="bg-secondary hover:bg-secondary/90 text-white px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
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
            className="border-2 border-white text-white hover:bg-white hover:text-primary px-8 py-6 text-lg shadow-lg hover:shadow-xl transition-all hover:scale-105"
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