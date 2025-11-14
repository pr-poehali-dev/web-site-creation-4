import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const stats = [
  { icon: 'Users', value: '50,000+', label: 'Студентов' },
  { icon: 'BookOpen', value: '200+', label: 'Курсов' },
  { icon: 'Award', value: '95%', label: 'Завершают курсы' },
  { icon: 'Star', value: '4.9', label: 'Средний рейтинг' }
];

const values = [
  {
    icon: 'Target',
    title: 'Фокус на практике',
    description: 'Все наши курсы построены на реальных кейсах и проектах из индустрии'
  },
  {
    icon: 'Users',
    title: 'Сильное сообщество',
    description: 'Учитесь вместе с единомышленниками и получайте поддержку на каждом шаге'
  },
  {
    icon: 'Zap',
    title: 'Актуальные знания',
    description: 'Программы курсов обновляются в соответствии с последними трендами'
  },
  {
    icon: 'Award',
    title: 'Экспертные преподаватели',
    description: 'Учитесь у действующих специалистов с многолетним опытом в индустрии'
  }
];

const timeline = [
  { year: '2020', title: 'Основание', description: 'Запуск платформы с первыми 5 курсами' },
  { year: '2021', title: 'Рост', description: '10,000 студентов и 50 курсов' },
  { year: '2022', title: 'Расширение', description: 'Запуск мобильного приложения' },
  { year: '2023', title: 'Международный выход', description: 'Курсы на 5 языках' },
  { year: '2024', title: 'Сегодня', description: '50,000+ студентов по всему миру' }
];

export default function About() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="bg-gradient-to-r from-primary to-secondary text-white py-20 px-4">
          <div className="max-w-4xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">О платформе</h1>
            <p className="text-xl text-white/90 mb-8">
              Мы создаем лучший опыт онлайн-обучения для тех, кто хочет развиваться в IT
            </p>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-16 animate-fade-in">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center hover:scale-105 transition-transform">
                <CardContent className="pt-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <Icon name={stat.icon as any} size={32} className="text-white" />
                  </div>
                  <p className="text-4xl font-bold text-primary mb-2">{stat.value}</p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Наша миссия</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Сделать качественное IT-образование доступным для каждого, кто хочет изменить свою жизнь и построить карьеру в технологиях
              </p>
            </div>

            <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold">Что делает нас уникальными?</h3>
                    <p className="text-muted-foreground">
                      Мы не просто учебная платформа — это целая экосистема для развития в IT. Наши курсы созданы практиками для практиков.
                    </p>
                    <p className="text-muted-foreground">
                      Каждый урок проверен на реальных проектах, каждое задание основано на задачах, с которыми сталкиваются специалисты в работе.
                    </p>
                  </div>
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl flex items-center justify-center">
                    <Icon name="Rocket" size={120} className="text-primary/40" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mb-16 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Наши ценности</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="hover:shadow-xl transition-shadow">
                  <CardHeader>
                    <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                      <Icon name={value.icon as any} size={28} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-16 animate-fade-in">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Наш путь</h2>
              <p className="text-xl text-muted-foreground">
                От стартапа до крупнейшей образовательной платформы в России
              </p>
            </div>
            <div className="relative">
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-primary via-secondary to-accent hidden md:block"></div>
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <Card className="hover:shadow-xl transition-shadow">
                        <CardHeader>
                          <CardTitle className="text-2xl">{item.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground">{item.description}</p>
                        </CardContent>
                      </Card>
                    </div>
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shrink-0 relative z-10 shadow-lg">
                      <span className="text-white font-bold">{item.year}</span>
                    </div>
                    <div className="flex-1 hidden md:block"></div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-white animate-fade-in">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Готовы начать обучение?</h2>
              <p className="text-xl text-white/90 mb-8">
                Присоединяйтесь к тысячам студентов, которые уже меняют свою жизнь
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/courses">
                  <Button size="lg" variant="secondary">
                    <Icon name="BookOpen" size={20} />
                    Смотреть курсы
                  </Button>
                </Link>
                <Link to="/contacts">
                  <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                    <Icon name="Mail" size={20} />
                    Связаться с нами
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
