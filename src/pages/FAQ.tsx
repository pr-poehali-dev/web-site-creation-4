import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const faqCategories = [
  {
    category: 'Общие вопросы',
    icon: 'HelpCircle',
    questions: [
      {
        q: 'Как начать обучение на платформе?',
        a: 'Зарегистрируйтесь на платформе, выберите интересующий курс и нажмите "Начать обучение". Многие курсы доступны бесплатно, для платных курсов потребуется оплата.'
      },
      {
        q: 'Нужны ли предварительные знания?',
        a: 'Это зависит от курса. В описании каждого курса указан рекомендуемый уровень подготовки. Есть курсы для абсолютных новичков, а есть продвинутые программы.'
      },
      {
        q: 'Сколько времени нужно уделять обучению?',
        a: 'Рекомендуем заниматься 3-5 часов в неделю. Вы можете учиться в своем темпе — все материалы доступны без ограничений по времени.'
      }
    ]
  },
  {
    category: 'Оплата и доступ',
    icon: 'CreditCard',
    questions: [
      {
        q: 'Какие способы оплаты доступны?',
        a: 'Мы принимаем банковские карты (Visa, MasterCard, МИР), электронные кошельки и банковские переводы. Оплата защищена и проходит через безопасное соединение.'
      },
      {
        q: 'Есть ли рассрочка?',
        a: 'Да, для большинства платных курсов доступна беспроцентная рассрочка на 3-12 месяцев. Условия указаны на странице каждого курса.'
      },
      {
        q: 'Можно ли вернуть деньги?',
        a: 'Да, в течение 14 дней с момента покупки вы можете запросить полный возврат средств, если курс вам не подошел.'
      }
    ]
  },
  {
    category: 'Обучение',
    icon: 'BookOpen',
    questions: [
      {
        q: 'В каком формате проходит обучение?',
        a: 'Обучение включает видеоуроки, текстовые материалы, практические задания и тесты. Некоторые курсы включают живые вебинары с преподавателями.'
      },
      {
        q: 'Как проверяются домашние задания?',
        a: 'Домашние задания проверяются автоматически или преподавателем, в зависимости от курса. Вы получите обратную связь и рекомендации по улучшению.'
      },
      {
        q: 'Что делать, если не понял тему?',
        a: 'Вы можете пересмотреть урок, задать вопрос на форуме или обратиться напрямую к преподавателю через систему сообщений.'
      }
    ]
  },
  {
    category: 'Сертификаты',
    icon: 'Award',
    questions: [
      {
        q: 'Выдаете ли вы сертификаты?',
        a: 'Да, после успешного завершения курса вы получите сертификат, который можно добавить в портфолио или резюме.'
      },
      {
        q: 'Признаются ли ваши сертификаты работодателями?',
        a: 'Наши сертификаты признаются многими компаниями в IT-индустрии. Мы партнеры крупных технологических компаний.'
      },
      {
        q: 'В каком формате выдается сертификат?',
        a: 'Сертификат доступен в цифровом формате PDF с уникальным номером для проверки. По запросу можем отправить печатную версию.'
      }
    ]
  },
  {
    category: 'Техническая поддержка',
    icon: 'Settings',
    questions: [
      {
        q: 'Не могу войти в аккаунт, что делать?',
        a: 'Попробуйте восстановить пароль через кнопку "Забыли пароль?" на странице входа. Если проблема сохраняется, напишите в поддержку.'
      },
      {
        q: 'Видео не загружается, как исправить?',
        a: 'Проверьте интернет-соединение, попробуйте другой браузер или очистите кэш. Если не помогло — сообщите нам о проблеме.'
      },
      {
        q: 'Как связаться с поддержкой?',
        a: 'Напишите нам на support@eduplatform.ru или используйте форму обратной связи в разделе "Контакты". Мы отвечаем в течение 24 часов.'
      }
    ]
  }
];

export default function FAQ() {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(
      q => q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
           q.a.toLowerCase().includes(searchQuery.toLowerCase())
    )
  })).filter(category => category.questions.length > 0);

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Часто задаваемые вопросы</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Найдите ответы на популярные вопросы о платформе и обучении
            </p>
          </div>

          <div className="mb-12 animate-fade-in">
            <div className="relative max-w-2xl mx-auto">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск по вопросам..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <div className="space-y-8 animate-fade-in">
            {filteredCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex}>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                      <Icon name={category.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl">{category.category}</CardTitle>
                      <CardDescription>{category.questions.length} вопросов</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {category.questions.map((item, index) => (
                      <AccordionItem key={index} value={`item-${categoryIndex}-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="hover:no-underline text-left">
                          <span className="font-semibold">{item.q}</span>
                        </AccordionTrigger>
                        <AccordionContent>
                          <p className="text-muted-foreground leading-relaxed">{item.a}</p>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <Card className="animate-fade-in">
              <CardContent className="p-12 text-center">
                <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
                <h3 className="text-2xl font-semibold mb-2">Ничего не найдено</h3>
                <p className="text-muted-foreground mb-6">
                  Попробуйте изменить запрос или свяжитесь с нами напрямую
                </p>
                <Link to="/contacts">
                  <Button>
                    <Icon name="Mail" size={18} />
                    Связаться с поддержкой
                  </Button>
                </Link>
              </CardContent>
            </Card>
          )}

          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
            <CardContent className="p-8 text-center">
              <Icon name="MessageCircle" size={48} className="mx-auto text-primary mb-4" />
              <h3 className="text-2xl font-bold mb-2">Не нашли ответ на свой вопрос?</h3>
              <p className="text-muted-foreground mb-6">
                Свяжитесь с нами, и мы с радостью поможем вам
              </p>
              <div className="flex gap-4 justify-center flex-wrap">
                <Link to="/contacts">
                  <Button size="lg">
                    <Icon name="Mail" size={20} />
                    Написать в поддержку
                  </Button>
                </Link>
                <Link to="/forum">
                  <Button size="lg" variant="outline">
                    <Icon name="MessageSquare" size={20} />
                    Форум сообщества
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
