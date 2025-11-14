import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

export default function CourseDetail() {
  const { id } = useParams();

  const course = {
    id: Number(id),
    title: 'JavaScript для начинающих',
    description: 'Полный курс по основам программирования и современному JavaScript. Вы научитесь создавать интерактивные веб-приложения, работать с DOM, освоите асинхронное программирование и современные возможности ES6+.',
    level: 'Начальный',
    duration: '8 недель',
    students: 1243,
    rating: 4.8,
    price: 'Бесплатно',
    category: 'Программирование',
    icon: 'Code2',
    instructor: 'Александр Петров',
    instructorRole: 'Senior Frontend Developer',
    totalLessons: 42,
    totalDuration: '24 часа'
  };

  const modules = [
    {
      title: 'Модуль 1: Введение в программирование',
      lessons: [
        { title: 'Что такое программирование?', duration: '15 мин', type: 'video' },
        { title: 'Установка и настройка окружения', duration: '20 мин', type: 'video' },
        { title: 'Первая программа на JavaScript', duration: '25 мин', type: 'video' },
        { title: 'Тест: Основы программирования', duration: '10 мин', type: 'test' }
      ]
    },
    {
      title: 'Модуль 2: Основы JavaScript',
      lessons: [
        { title: 'Переменные и типы данных', duration: '30 мин', type: 'video' },
        { title: 'Операторы и выражения', duration: '25 мин', type: 'video' },
        { title: 'Условные операторы', duration: '35 мин', type: 'video' },
        { title: 'Циклы и итерации', duration: '40 мин', type: 'video' },
        { title: 'Практика: Калькулятор', duration: '45 мин', type: 'practice' },
        { title: 'Тест: Основы синтаксиса', duration: '15 мин', type: 'test' }
      ]
    },
    {
      title: 'Модуль 3: Функции',
      lessons: [
        { title: 'Объявление и вызов функций', duration: '30 мин', type: 'video' },
        { title: 'Параметры и возврат значений', duration: '25 мин', type: 'video' },
        { title: 'Стрелочные функции', duration: '20 мин', type: 'video' },
        { title: 'Замыкания и область видимости', duration: '35 мин', type: 'video' },
        { title: 'Практика: Функции высшего порядка', duration: '40 мин', type: 'practice' }
      ]
    },
    {
      title: 'Модуль 4: Работа с объектами и массивами',
      lessons: [
        { title: 'Создание и использование объектов', duration: '30 мин', type: 'video' },
        { title: 'Методы объектов', duration: '25 мин', type: 'video' },
        { title: 'Массивы и их методы', duration: '40 мин', type: 'video' },
        { title: 'Map, filter, reduce', duration: '35 мин', type: 'video' },
        { title: 'Деструктуризация', duration: '20 мин', type: 'video' }
      ]
    },
    {
      title: 'Модуль 5: DOM и события',
      lessons: [
        { title: 'Введение в DOM', duration: '25 мин', type: 'video' },
        { title: 'Поиск и изменение элементов', duration: '30 мин', type: 'video' },
        { title: 'Работа с событиями', duration: '35 мин', type: 'video' },
        { title: 'Создание интерактивных элементов', duration: '40 мин', type: 'video' },
        { title: 'Проект: Todo приложение', duration: '60 мин', type: 'project' }
      ]
    }
  ];

  const features = [
    { icon: 'Video', label: '42 видео урока', description: 'Подробные объяснения' },
    { icon: 'FileText', label: '15 тестов', description: 'Проверка знаний' },
    { icon: 'Code', label: '10 практик', description: 'Реальные задачи' },
    { icon: 'Award', label: 'Сертификат', description: 'После завершения' },
    { icon: 'Clock', label: '24 часа', description: 'Видео контента' },
    { icon: 'Download', label: 'Материалы', description: 'Для скачивания' }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="bg-gradient-to-r from-primary/90 to-secondary/90 text-white py-16 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 animate-fade-in">
                <Badge className="mb-4 bg-white/20 text-white border-white/30">
                  {course.category}
                </Badge>
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{course.title}</h1>
                <p className="text-xl text-white/90 mb-6">{course.description}</p>
                
                <div className="flex flex-wrap gap-6 mb-6">
                  <div className="flex items-center gap-2">
                    <Icon name="Star" size={20} className="text-yellow-300 fill-yellow-300" />
                    <span className="font-semibold">{course.rating}</span>
                    <span className="text-white/80">({course.students.toLocaleString()} студентов)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Clock" size={20} />
                    <span>{course.totalDuration}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Icon name="Signal" size={20} />
                    <span>{course.level}</span>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <Icon name="User" size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">{course.instructor}</p>
                    <p className="text-white/80 text-sm">{course.instructorRole}</p>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-1 animate-scale-in">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-3xl text-primary">{course.price}</CardTitle>
                    <CardDescription>Полный доступ к курсу</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <Button className="w-full" size="lg">
                      <Icon name="Play" size={20} />
                      Начать обучение
                    </Button>
                    <Button variant="outline" className="w-full" size="lg">
                      <Icon name="Heart" size={20} />
                      В избранное
                    </Button>
                    <div className="pt-4 border-t space-y-3 text-sm">
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Пожизненный доступ</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Доступ с любого устройства</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Сертификат о прохождении</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Check" size={16} className="text-primary" />
                        <span>Поддержка преподавателя</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Что вы изучите</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    {[
                      'Основы программирования и JavaScript',
                      'Работа с переменными и типами данных',
                      'Функции и замыкания',
                      'Объекты и массивы',
                      'DOM манипуляции',
                      'Обработка событий',
                      'Асинхронное программирование',
                      'Современные возможности ES6+'
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-2">
                        <Icon name="Check" size={20} className="text-primary shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle className="text-2xl">Программа курса</CardTitle>
                  <CardDescription>
                    {modules.length} модулей • {course.totalLessons} уроков • {course.totalDuration}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Accordion type="single" collapsible className="space-y-2">
                    {modules.map((module, index) => (
                      <AccordionItem key={index} value={`module-${index}`} className="border rounded-lg px-4">
                        <AccordionTrigger className="hover:no-underline">
                          <div className="flex items-center gap-3 text-left">
                            <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                              <span className="text-sm font-bold text-primary">{index + 1}</span>
                            </div>
                            <div>
                              <p className="font-semibold">{module.title}</p>
                              <p className="text-sm text-muted-foreground">{module.lessons.length} уроков</p>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-2 mt-2">
                            {module.lessons.map((lesson, lessonIndex) => (
                              <div key={lessonIndex} className="flex items-center justify-between p-3 hover:bg-muted/50 rounded-lg transition-colors">
                                <div className="flex items-center gap-3">
                                  <Icon 
                                    name={
                                      lesson.type === 'video' ? 'PlayCircle' :
                                      lesson.type === 'test' ? 'FileText' :
                                      lesson.type === 'practice' ? 'Code' : 'FolderOpen'
                                    } 
                                    size={18} 
                                    className="text-muted-foreground"
                                  />
                                  <span className="text-sm">{lesson.title}</span>
                                </div>
                                <span className="text-sm text-muted-foreground">{lesson.duration}</span>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Что входит в курс</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center shrink-0">
                        <Icon name={feature.icon as any} size={20} className="text-primary" />
                      </div>
                      <div>
                        <p className="font-semibold">{feature.label}</p>
                        <p className="text-sm text-muted-foreground">{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>О преподавателе</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center">
                      <Icon name="User" size={32} className="text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-lg">{course.instructor}</p>
                      <p className="text-sm text-muted-foreground">{course.instructorRole}</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm">
                    <div className="flex items-center gap-2">
                      <Icon name="Star" size={16} className="text-primary" />
                      <span>Рейтинг 4.9 • 15 курсов</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Icon name="Users" size={16} className="text-primary" />
                      <span>12,500+ студентов</span>
                    </div>
                  </div>
                  <Link to="/teachers">
                    <Button variant="outline" className="w-full">
                      Все курсы автора
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
