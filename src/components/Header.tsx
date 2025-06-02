import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Логотип/Название */}
          <div className="flex items-center">
            <h2 className="text-2xl font-bold text-blue-800 font-montserrat">
              ФулфилментПро
            </h2>
          </div>

          {/* Контакты */}
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="text-gray-700 hover:text-blue-800"
              asChild
            >
              <a href="tel:+79688901002" className="flex items-center gap-2">
                <Icon name="Phone" size={16} />
                <span className="hidden sm:inline">+7 (968) 890-10-02</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-[#25D366] hover:bg-[#25D366] hover:text-white"
              asChild
            >
              <a
                href="https://wa.me/+79688901002"
                className="flex items-center gap-2"
              >
                <Icon name="MessageCircle" size={16} />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </Button>

            <Button
              variant="ghost"
              size="sm"
              className="text-[#0088cc] hover:bg-[#0088cc] hover:text-white"
              asChild
            >
              <a
                href="https://t.me/best_shoping"
                className="flex items-center gap-2"
              >
                <Icon name="Send" size={16} />
                <span className="hidden sm:inline">Telegram</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
