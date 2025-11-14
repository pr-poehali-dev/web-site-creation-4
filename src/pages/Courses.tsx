import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  students: number;
  rating: number;
  price: string;
  category: string;
  icon: string;
  color: string;
}

const allCourses: Course[] = [
  {
    id: 1,
    title: 'JavaScript для начинающих',
    description: 'Изучите основы программирования и современный JavaScript с нуля',
    level: 'Начальный',
    duration: '8 недель',
    students: 1243,
    rating: 4.8,
    price: 'Бесплатно',
    category: 'Программирование',
    icon: 'Code2',
    color: 'bg-primary'
  },
  {
    id: 2,
    title: 'React разработка',
    description: 'Создание интерактивных веб-приложений с React и современными инструментами',
    level: 'Средний',
    duration: '10 недель',
    students: 892,
    rating: 4.9,
    price: '12 990 ₽',
    category: 'Программирование',
    icon: 'Layers',
    color: 'bg-secondary'
  },
  {
    id: 3,
    title: 'TypeScript мастерство',
    description: 'Продвинутая типизация и паттерны разработки на TypeScript',
    level: 'Продвинутый',
    duration: '6 недель',
    students: 567,
    rating: 4.7,
    price: '9 990 ₽',
    category: 'Программирование',
    icon: 'FileCode',
    color: 'bg-accent'
  },
  {
    id: 4,
    title: 'UI/UX дизайн',
    description: 'Проектирование пользовательских интерфейсов и опыта взаимодействия',
    level: 'Начальный',
    duration: '12 недель',
    students: 2134,
    rating: 4.9,
    price: '14 990 ₽',
    category: 'Дизайн',
    icon: 'Palette',
    color: 'bg-primary'
  },
  {
    id: 5,
    title: 'Figma для дизайнеров',
    description: 'Полный курс по работе с Figma от базовых инструментов до прототипирования',
    level: 'Начальный',
    duration: '4 недели',
    students: 1876,
    rating: 4.8,
    price: '7 990 ₽',
    category: 'Дизайн',
    icon: 'Figma',
    color: 'bg-secondary'
  },
  {
    id: 6,
    title: 'Python для анализа данных',
    description: 'Работа с данными, визуализация и машинное обучение на Python',
    level: 'Средний',
    duration: '14 недель',
    students: 1432,
    rating: 4.9,
    price: '16 990 ₽',
    category: 'Data Science',
    icon: 'Database',
    color: 'bg-accent'
  },
  {
    id: 7,
    title: 'Основы SQL',
    description: 'Работа с базами данных и написание эффективных SQL запросов',
    level: 'Начальный',
    duration: '5 недель',
    students: 2341,
    rating: 4.7,
    price: 'Бесплатно',
    category: 'Data Science',
    icon: 'Table',
    color: 'bg-primary'
  },
  {
    id: 8,
    title: 'Digital маркетинг',
    description: 'Комплексный курс по интернет-маркетингу и продвижению',
    level: 'Начальный',
    duration: '8 недель',
    students: 1654,
    rating: 4.6,
    price: '11 990 ₽',
    category: 'Маркетинг',
    icon: 'TrendingUp',
    color: 'bg-secondary'
  },
  {
    id: 9,
    title: 'SMM и контент',
    description: 'Создание контента и управление социальными сетями',
    level: 'Начальный',
    duration: '6 недель',
    students: 2876,
    rating: 4.8,
    price: '8 990 ₽',
    category: 'Маркетинг',
    icon: 'Share2',
    color: 'bg-accent'
  }
];

const categories = ['Все', 'Программирование', 'Дизайн', 'Data Science', 'Маркетинг'];
const levels = ['Все', 'Начальный', 'Средний', 'Продвинутый'];

export default function Courses() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedLevel, setSelectedLevel] = useState('Все');

  const filteredCourses = allCourses.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'Все' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'Все' || course.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Каталог курсов</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Более 50 курсов по разным направлениям для развития ваших навыков
            </p>
          </div>

          <div className="mb-8 space-y-6 animate-fade-in">
            <div className="relative max-w-2xl mx-auto">
              <Icon name="Search" size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Поиск курсов..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-lg"
              />
            </div>

            <div className="flex flex-wrap gap-4 justify-center">
              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Категория:</p>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <p className="text-sm font-medium text-muted-foreground">Уровень:</p>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? 'default' : 'outline'}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mb-4">
            <p className="text-muted-foreground">
              Найдено курсов: <span className="font-semibold text-foreground">{filteredCourses.length}</span>
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
            {filteredCourses.map((course, index) => (
              <Card
                key={course.id}
                className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] group"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon name={course.icon as any} size={28} className="text-white" />
                  </div>
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <CardTitle className="text-xl">{course.title}</CardTitle>
                    <Badge variant="secondary" className="shrink-0">
                      {course.price}
                    </Badge>
                  </div>
                  <CardDescription className="line-clamp-2">
                    {course.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={16} className="text-yellow-500 fill-yellow-500" />
                      <span className="font-medium">{course.rating}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Users" size={16} />
                      <span>{course.students.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Icon name="Clock" size={16} />
                      <span>{course.duration}</span>
                    </div>
                  </div>

                  <div className="flex gap-2 flex-wrap">
                    <Badge variant="outline">
                      <Icon name="Signal" size={14} />
                      {course.level}
                    </Badge>
                    <Badge variant="outline">
                      <Icon name="Tag" size={14} />
                      {course.category}
                    </Badge>
                  </div>

                  <Link to={`/course/${course.id}`}>
                    <Button className="w-full group">
                      Подробнее
                      <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="text-center py-12">
              <Icon name="Search" size={64} className="mx-auto text-muted-foreground mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Курсы не найдены</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
