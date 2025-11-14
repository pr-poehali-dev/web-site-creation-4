import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { useState } from 'react';

const categories = [
  { name: 'Программирование', count: 342, icon: 'Code' },
  { name: 'Дизайн', count: 156, icon: 'Palette' },
  { name: 'Data Science', count: 89, icon: 'Database' },
  { name: 'Маркетинг', count: 124, icon: 'TrendingUp' },
  { name: 'Карьера', count: 78, icon: 'Briefcase' }
];

const topics = [
  {
    id: 1,
    title: 'Как начать изучать React в 2024?',
    author: 'Алексей М.',
    category: 'Программирование',
    replies: 24,
    views: 1234,
    lastActivity: '2 часа назад',
    isHot: true,
    isPinned: false
  },
  {
    id: 2,
    title: 'Лучшие практики работы с TypeScript',
    author: 'Мария К.',
    category: 'Программирование',
    replies: 18,
    views: 892,
    lastActivity: '4 часа назад',
    isHot: true,
    isPinned: true
  },
  {
    id: 3,
    title: 'Какой UI Kit выбрать для проекта?',
    author: 'Дмитрий П.',
    category: 'Дизайн',
    replies: 31,
    views: 1567,
    lastActivity: '6 часов назад',
    isHot: false,
    isPinned: false
  },
  {
    id: 4,
    title: 'Переход в IT: с чего начать?',
    author: 'Елена С.',
    category: 'Карьера',
    replies: 45,
    views: 2341,
    lastActivity: '8 часов назад',
    isHot: true,
    isPinned: false
  },
  {
    id: 5,
    title: 'Библиотеки для визуализации данных',
    author: 'Игорь В.',
    category: 'Data Science',
    replies: 12,
    views: 654,
    lastActivity: '1 день назад',
    isHot: false,
    isPinned: false
  }
];

export default function Forum() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Форум сообщества</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Обсуждайте темы, задавайте вопросы и делитесь опытом с другими студентами
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            <div className="lg:col-span-3 space-y-6">
              <div className="flex flex-col sm:flex-row gap-4 animate-fade-in">
                <div className="relative flex-1">
                  <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                  <Input
                    type="search"
                    placeholder="Поиск по форуму..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-10"
                  />
                </div>
                <Button>
                  <Icon name="Plus" size={18} />
                  Новая тема
                </Button>
              </div>

              <Tabs defaultValue="all" className="animate-fade-in">
                <TabsList>
                  <TabsTrigger value="all">
                    <Icon name="Grid" size={16} />
                    Все темы
                  </TabsTrigger>
                  <TabsTrigger value="hot">
                    <Icon name="Flame" size={16} />
                    Горячие
                  </TabsTrigger>
                  <TabsTrigger value="unanswered">
                    <Icon name="MessageSquare" size={16} />
                    Без ответов
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="all" className="space-y-4 mt-6">
                  {topics.map((topic) => (
                    <Card key={topic.id} className="hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl flex items-center justify-center shrink-0">
                            <Icon name="MessageSquare" size={24} className="text-primary" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-start gap-2 mb-2">
                              {topic.isPinned && (
                                <Badge variant="secondary" className="shrink-0">
                                  <Icon name="Pin" size={12} />
                                  Закреплено
                                </Badge>
                              )}
                              {topic.isHot && (
                                <Badge variant="destructive" className="shrink-0">
                                  <Icon name="Flame" size={12} />
                                  Горячее
                                </Badge>
                              )}
                              <Badge variant="outline" className="shrink-0">{topic.category}</Badge>
                            </div>
                            <h3 className="text-lg font-semibold mb-2 hover:text-primary transition-colors">
                              {topic.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <div className="flex items-center gap-1">
                                <Icon name="User" size={14} />
                                <span>{topic.author}</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="MessageCircle" size={14} />
                                <span>{topic.replies} ответов</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Eye" size={14} />
                                <span>{topic.views} просмотров</span>
                              </div>
                              <div className="flex items-center gap-1">
                                <Icon name="Clock" size={14} />
                                <span>{topic.lastActivity}</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="hot" className="space-y-4 mt-6">
                  {topics.filter(t => t.isHot).map((topic) => (
                    <Card key={topic.id} className="hover:shadow-lg transition-all hover:scale-[1.01] cursor-pointer">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="w-12 h-12 bg-gradient-to-br from-destructive/20 to-accent/20 rounded-xl flex items-center justify-center shrink-0">
                            <Icon name="Flame" size={24} className="text-destructive" />
                          </div>
                          <div className="flex-1">
                            <h3 className="text-lg font-semibold mb-2">{topic.title}</h3>
                            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                              <span>{topic.author}</span>
                              <span>{topic.replies} ответов</span>
                              <span>{topic.views} просмотров</span>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="unanswered" className="mt-6">
                  <Card>
                    <CardContent className="p-12 text-center">
                      <Icon name="CheckCircle2" size={48} className="mx-auto text-muted-foreground mb-4" />
                      <h3 className="text-xl font-semibold mb-2">Все темы получили ответы!</h3>
                      <p className="text-muted-foreground">
                        Отличная работа сообщества 🎉
                      </p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Категории</CardTitle>
                </CardHeader>
                <CardContent className="space-y-2">
                  {categories.map((category) => (
                    <Button
                      key={category.name}
                      variant="ghost"
                      className="w-full justify-between"
                    >
                      <div className="flex items-center gap-2">
                        <Icon name={category.icon as any} size={18} />
                        <span>{category.name}</span>
                      </div>
                      <Badge variant="secondary">{category.count}</Badge>
                    </Button>
                  ))}
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Статистика</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MessageSquare" size={18} />
                      <span className="text-sm">Тем</span>
                    </div>
                    <span className="font-semibold">789</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="MessageCircle" size={18} />
                      <span className="text-sm">Сообщений</span>
                    </div>
                    <span className="font-semibold">5,342</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Users" size={18} />
                      <span className="text-sm">Участников</span>
                    </div>
                    <span className="font-semibold">1,234</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Lightbulb" size={24} />
                    Правила форума
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm">
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>Будьте уважительны</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>Пишите по теме</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>Помогайте другим</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <Icon name="Check" size={16} className="text-primary shrink-0 mt-0.5" />
                    <span>Используйте поиск</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
