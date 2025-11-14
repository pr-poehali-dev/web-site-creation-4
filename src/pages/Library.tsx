import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const articles = [
  {
    id: 1,
    title: '10 правил чистого кода',
    description: 'Основные принципы написания читаемого и поддерживаемого кода',
    category: 'Программирование',
    type: 'Статья',
    readTime: '8 мин',
    date: '5 декабря 2024',
    icon: 'FileText'
  },
  {
    id: 2,
    title: 'Асинхронность в JavaScript',
    description: 'Подробное руководство по Promises, async/await и обработке ошибок',
    category: 'Программирование',
    type: 'Руководство',
    readTime: '15 мин',
    date: '3 декабря 2024',
    icon: 'BookOpen'
  },
  {
    id: 3,
    title: 'Основы дизайн-систем',
    description: 'Как создать и поддерживать единообразие в дизайне продукта',
    category: 'Дизайн',
    type: 'Статья',
    readTime: '12 мин',
    date: '1 декабря 2024',
    icon: 'FileText'
  }
];

const videos = [
  {
    id: 1,
    title: 'Введение в React Hooks',
    description: 'Полное руководство по использованию хуков в React приложениях',
    category: 'Программирование',
    duration: '45 мин',
    views: '12.5K',
    date: '4 декабря 2024',
    thumbnail: 'video'
  },
  {
    id: 2,
    title: 'UX исследования',
    description: 'Методы проведения пользовательских исследований',
    category: 'Дизайн',
    duration: '32 мин',
    views: '8.3K',
    date: '2 декабря 2024',
    thumbnail: 'video'
  }
];

const books = [
  {
    id: 1,
    title: 'JavaScript: Полное руководство',
    author: 'Дэвид Флэнаган',
    category: 'Программирование',
    pages: 1096,
    format: 'PDF',
    size: '15 MB'
  },
  {
    id: 2,
    title: 'Чистый код',
    author: 'Роберт Мартин',
    category: 'Программирование',
    pages: 464,
    format: 'PDF',
    size: '8 MB'
  },
  {
    id: 3,
    title: 'Дизайн для реального мира',
    author: 'Дон Норман',
    category: 'Дизайн',
    pages: 368,
    format: 'PDF',
    size: '12 MB'
  }
];

const templates = [
  {
    id: 1,
    title: 'React Dashboard Template',
    description: 'Готовый шаблон админ-панели с компонентами и графиками',
    category: 'Программирование',
    downloads: '2.3K',
    format: 'React + TypeScript'
  },
  {
    id: 2,
    title: 'Figma UI Kit',
    description: 'Набор готовых UI компонентов для быстрого прототипирования',
    category: 'Дизайн',
    downloads: '5.1K',
    format: 'Figma'
  },
  {
    id: 3,
    title: 'Landing Page Template',
    description: 'Современный шаблон лендинга с анимациями',
    category: 'Программирование',
    downloads: '3.7K',
    format: 'HTML + CSS + JS'
  }
];

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Библиотека материалов</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Статьи, видео, книги и шаблоны для вашего обучения
            </p>
          </div>

          <div className="mb-8 max-w-2xl mx-auto animate-fade-in">
            <div className="relative">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск материалов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>
          </div>

          <Tabs defaultValue="articles" className="animate-fade-in">
            <TabsList className="grid w-full max-w-2xl mx-auto grid-cols-4">
              <TabsTrigger value="articles">
                <Icon name="FileText" size={16} />
                Статьи
              </TabsTrigger>
              <TabsTrigger value="videos">
                <Icon name="Video" size={16} />
                Видео
              </TabsTrigger>
              <TabsTrigger value="books">
                <Icon name="Book" size={16} />
                Книги
              </TabsTrigger>
              <TabsTrigger value="templates">
                <Icon name="Layout" size={16} />
                Шаблоны
              </TabsTrigger>
            </TabsList>

            <TabsContent value="articles" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article) => (
                  <Card key={article.id} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                      <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                        <Icon name={article.icon as any} size={24} className="text-primary" />
                      </div>
                      <div className="flex items-start justify-between gap-2 mb-2">
                        <CardTitle className="text-xl">{article.title}</CardTitle>
                      </div>
                      <CardDescription className="line-clamp-2">
                        {article.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary">{article.category}</Badge>
                        <Badge variant="outline">{article.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{article.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          <span>{article.date}</span>
                        </div>
                      </div>
                      <Button className="w-full">
                        <Icon name="BookOpen" size={18} />
                        Читать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="videos" className="mt-8">
              <div className="grid md:grid-cols-2 gap-6">
                {videos.map((video) => (
                  <Card key={video.id} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                      <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                        <Icon name="Play" size={48} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl">{video.title}</CardTitle>
                      <CardDescription>{video.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{video.category}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="Clock" size={16} />
                          <span>{video.duration}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Eye" size={16} />
                          <span>{video.views}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="Calendar" size={16} />
                          <span>{video.date}</span>
                        </div>
                      </div>
                      <Button className="w-full">
                        <Icon name="Play" size={18} />
                        Смотреть
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="books" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                  <Card key={book.id} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                      <div className="w-full aspect-[3/4] bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg flex items-center justify-center mb-4">
                        <Icon name="Book" size={48} className="text-primary" />
                      </div>
                      <CardTitle className="text-xl">{book.title}</CardTitle>
                      <CardDescription>Автор: {book.author}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-2">
                        <Badge variant="secondary">{book.category}</Badge>
                        <Badge variant="outline">{book.format}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Icon name="FileText" size={16} />
                          <span>{book.pages} стр.</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Icon name="HardDrive" size={16} />
                          <span>{book.size}</span>
                        </div>
                      </div>
                      <Button className="w-full">
                        <Icon name="Download" size={18} />
                        Скачать
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            <TabsContent value="templates" className="mt-8">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {templates.map((template) => (
                  <Card key={template.id} className="hover:shadow-xl transition-all hover:scale-[1.02]">
                    <CardHeader>
                      <div className="w-full aspect-video bg-gradient-to-br from-accent/20 to-primary/20 rounded-lg flex items-center justify-center mb-4">
                        <Icon name="Layout" size={48} className="text-accent" />
                      </div>
                      <CardTitle className="text-xl">{template.title}</CardTitle>
                      <CardDescription>{template.description}</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary">{template.category}</Badge>
                        <Badge variant="outline">{template.format}</Badge>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Download" size={16} />
                        <span>{template.downloads} скачиваний</span>
                      </div>
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="Eye" size={18} />
                          Просмотр
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Download" size={18} />
                          Скачать
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </Layout>
  );
}
