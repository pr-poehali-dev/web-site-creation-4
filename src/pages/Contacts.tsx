import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const contactMethods = [
  {
    icon: 'Mail',
    title: 'Email',
    value: 'support@eduplatform.ru',
    description: 'Ответим в течение 24 часов',
    action: 'Написать письмо'
  },
  {
    icon: 'Phone',
    title: 'Телефон',
    value: '+7 (495) 123-45-67',
    description: 'Пн-Пт с 9:00 до 18:00 МСК',
    action: 'Позвонить'
  },
  {
    icon: 'MessageCircle',
    title: 'Онлайн-чат',
    value: 'Прямая связь',
    description: 'Мгновенные ответы на вопросы',
    action: 'Открыть чат'
  }
];

const offices = [
  {
    city: 'Москва',
    address: 'ул. Тверская, д. 1, офис 100',
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    metro: 'м. Охотный ряд'
  },
  {
    city: 'Санкт-Петербург',
    address: 'Невский проспект, д. 50, офис 200',
    workingHours: 'Пн-Пт: 9:00 - 18:00',
    metro: 'м. Невский проспект'
  }
];

const socialLinks = [
  { icon: 'Github', label: 'GitHub', url: '#' },
  { icon: 'Twitter', label: 'Twitter', url: '#' },
  { icon: 'Linkedin', label: 'LinkedIn', url: '#' },
  { icon: 'Youtube', label: 'YouTube', url: '#' },
  { icon: 'Instagram', label: 'Instagram', url: '#' }
];

export default function Contacts() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Контакты</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Свяжитесь с нами любым удобным способом. Мы всегда рады помочь!
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-12 animate-fade-in">
            {contactMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                <CardHeader>
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <Icon name={method.icon as any} size={28} className="text-primary" />
                  </div>
                  <CardTitle className="text-xl">{method.title}</CardTitle>
                  <CardDescription>{method.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="font-semibold text-lg">{method.value}</p>
                  <Button className="w-full">
                    <Icon name={method.icon as any} size={18} />
                    {method.action}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <div className="lg:col-span-2 animate-fade-in">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Отправить сообщение</CardTitle>
                  <CardDescription>
                    Заполните форму, и мы свяжемся с вами в ближайшее время
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Имя *</Label>
                        <Input id="name" placeholder="Ваше имя" required />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email *</Label>
                        <Input id="email" type="email" placeholder="your@email.com" required />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Тема</Label>
                      <Input id="subject" placeholder="Тема вашего обращения" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Сообщение *</Label>
                      <Textarea
                        id="message"
                        placeholder="Опишите ваш вопрос или проблему..."
                        rows={6}
                        required
                      />
                    </div>
                    <Button type="submit" size="lg" className="w-full">
                      <Icon name="Send" size={20} />
                      Отправить сообщение
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Наши офисы</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {offices.map((office, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-start gap-2">
                        <Icon name="MapPin" size={20} className="text-primary shrink-0 mt-0.5" />
                        <div>
                          <p className="font-semibold">{office.city}</p>
                          <p className="text-sm text-muted-foreground">{office.address}</p>
                          <p className="text-sm text-muted-foreground">{office.metro}</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            <Icon name="Clock" size={14} className="inline mr-1" />
                            {office.workingHours}
                          </p>
                        </div>
                      </div>
                      {index < offices.length - 1 && <div className="border-t pt-4"></div>}
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Мы в соцсетях</CardTitle>
                  <CardDescription>Следите за новостями и обновлениями</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <a
                        key={index}
                        href={social.url}
                        className="flex flex-col items-center justify-center p-4 rounded-lg border hover:bg-primary/5 hover:border-primary transition-all group"
                      >
                        <Icon
                          name={social.icon as any}
                          size={24}
                          className="text-muted-foreground group-hover:text-primary transition-colors mb-2"
                        />
                        <span className="text-xs text-muted-foreground">{social.label}</span>
                      </a>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Clock" size={24} />
                    Время работы
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Понедельник - Пятница</span>
                    <span className="font-semibold">9:00 - 18:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Суббота - Воскресенье</span>
                    <span className="font-semibold">Выходной</span>
                  </div>
                  <div className="pt-3 border-t">
                    <p className="text-muted-foreground">
                      <Icon name="Mail" size={14} className="inline mr-1" />
                      Email поддержка работает 24/7
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-primary to-secondary text-white animate-fade-in">
            <CardContent className="p-12 text-center">
              <Icon name="Headphones" size={64} className="mx-auto mb-6 text-white/90" />
              <h2 className="text-3xl font-bold mb-4">Нужна срочная помощь?</h2>
              <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
                Наша служба поддержки готова помочь вам решить любой вопрос
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Button size="lg" variant="secondary">
                  <Icon name="MessageCircle" size={20} />
                  Открыть чат
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                  <Icon name="Phone" size={20} />
                  Позвонить нам
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
