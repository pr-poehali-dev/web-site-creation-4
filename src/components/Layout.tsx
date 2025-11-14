import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import { useState } from 'react';

const navigation = [
  { name: 'Главная', path: '/', icon: 'Home' },
  { name: 'Курсы', path: '/courses', icon: 'BookOpen' },
  { name: 'Библиотека', path: '/library', icon: 'Library' },
  { name: 'Расписание', path: '/schedule', icon: 'Calendar' },
  { name: 'Преподаватели', path: '/teachers', icon: 'Users' },
  { name: 'Форум', path: '/forum', icon: 'MessageSquare' },
  { name: 'О нас', path: '/about', icon: 'Info' },
  { name: 'FAQ', path: '/faq', icon: 'HelpCircle' },
  { name: 'Контакты', path: '/contacts', icon: 'Mail' },
];

export default function Layout({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                <Icon name="GraduationCap" size={24} className="text-white" />
              </div>
              <span className="text-xl font-bold">EduPlatform</span>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navigation.slice(0, 6).map((item) => (
                <Link key={item.path} to={item.path}>
                  <Button
                    variant={location.pathname === item.path ? 'default' : 'ghost'}
                    size="sm"
                    className="gap-2"
                  >
                    <Icon name={item.icon as any} size={16} />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <Link to="/profile">
                <Button variant="outline" size="sm" className="gap-2">
                  <Icon name="User" size={16} />
                  <span className="hidden sm:inline">Профиль</span>
                </Button>
              </Link>
              <Button
                variant="ghost"
                size="sm"
                className="lg:hidden"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <Icon name={mobileMenuOpen ? 'X' : 'Menu'} size={24} />
              </Button>
            </div>
          </div>

          {mobileMenuOpen && (
            <div className="lg:hidden py-4 space-y-1 animate-fade-in">
              {navigation.map((item) => (
                <Link key={item.path} to={item.path} onClick={() => setMobileMenuOpen(false)}>
                  <Button
                    variant={location.pathname === item.path ? 'default' : 'ghost'}
                    className="w-full justify-start gap-2"
                  >
                    <Icon name={item.icon as any} size={18} />
                    {item.name}
                  </Button>
                </Link>
              ))}
            </div>
          )}
        </div>
      </header>

      <main>{children}</main>

      <footer className="border-t bg-muted/30 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 bg-gradient-to-br from-primary to-secondary rounded-xl flex items-center justify-center">
                  <Icon name="GraduationCap" size={24} className="text-white" />
                </div>
                <span className="text-xl font-bold">EduPlatform</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Современная образовательная платформа для развития ваших навыков
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Обучение</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/courses" className="hover:text-primary transition-colors">Все курсы</Link></li>
                <li><Link to="/library" className="hover:text-primary transition-colors">Библиотека</Link></li>
                <li><Link to="/schedule" className="hover:text-primary transition-colors">Расписание</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Сообщество</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/teachers" className="hover:text-primary transition-colors">Преподаватели</Link></li>
                <li><Link to="/forum" className="hover:text-primary transition-colors">Форум</Link></li>
                <li><Link to="/about" className="hover:text-primary transition-colors">О платформе</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><Link to="/faq" className="hover:text-primary transition-colors">FAQ</Link></li>
                <li><Link to="/contacts" className="hover:text-primary transition-colors">Контакты</Link></li>
              </ul>
            </div>
          </div>

          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground">
              © 2024 EduPlatform. Все права защищены.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Github" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Twitter" size={20} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Icon name="Linkedin" size={20} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
