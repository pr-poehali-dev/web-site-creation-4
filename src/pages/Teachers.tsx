import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

const teachers = [
  {
    id: 1,
    name: 'Александр Петров',
    role: 'Senior Frontend Developer',
    specialization: 'JavaScript, React, TypeScript',
    rating: 4.9,
    students: 12500,
    courses: 15,
    experience: '10+ лет',
    description: 'Эксперт во frontend-разработке с большим опытом работы в крупных IT-компаниях. Специализируется на React и современных JavaScript-фреймворках.'
  },
  {
    id: 2,
    name: 'Мария Смирнова',
    role: 'Lead UX/UI Designer',
    specialization: 'Figma, UX Research, Design Systems',
    rating: 4.9,
    students: 8900,
    courses: 12,
    experience: '8+ лет',
    description: 'Опытный дизайнер с глубокими знаниями в области пользовательского опыта. Создала дизайн-системы для множества успешных продуктов.'
  },
  {
    id: 3,
    name: 'Иван Соколов',
    role: 'Data Scientist',
    specialization: 'Python, Machine Learning, Data Analysis',
    rating: 4.8,
    students: 6700,
    courses: 10,
    experience: '7+ лет',
    description: 'Специалист по анализу данных и машинному обучению. Работал над проектами в области финтеха и e-commerce.'
  },
  {
    id: 4,
    name: 'Елена Волкова',
    role: 'Backend Developer',
    specialization: 'Node.js, PostgreSQL, API Design',
    rating: 4.7,
    students: 5400,
    courses: 8,
    experience: '9+ лет',
    description: 'Эксперт в серверной разработке и проектировании баз данных. Специализируется на создании масштабируемых API.'
  },
  {
    id: 5,
    name: 'Дмитрий Козлов',
    role: 'Digital Marketing Expert',
    specialization: 'SEO, SMM, Content Marketing',
    rating: 4.8,
    students: 9200,
    courses: 11,
    experience: '6+ лет',
    description: 'Специалист по цифровому маркетингу с опытом продвижения стартапов и крупных брендов в digital-пространстве.'
  },
  {
    id: 6,
    name: 'Анна Лебедева',
    role: 'Mobile Developer',
    specialization: 'React Native, iOS, Android',
    rating: 4.9,
    students: 4300,
    courses: 7,
    experience: '5+ лет',
    description: 'Разработчик мобильных приложений с фокусом на кроссплатформенной разработке. Создала более 20 приложений.'
  }
];

export default function Teachers() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Наши преподаватели</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Учитесь у лучших специалистов индустрии с реальным опытом работы
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
            {teachers.map((teacher, index) => (
              <Card
                key={teacher.id}
                className="hover:shadow-xl transition-all hover:scale-[1.02]"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-20 h-20 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shrink-0">
                      <Icon name="User" size={40} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-2xl mb-1">{teacher.name}</CardTitle>
                      <CardDescription className="text-base mb-2">{teacher.role}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-2">
                        {teacher.specialization.split(', ').map((skill, i) => (
                          <Badge key={i} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{teacher.description}</p>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Star" size={18} className="text-yellow-500 fill-yellow-500" />
                        <div>
                          <p className="text-sm text-muted-foreground">Рейтинг</p>
                          <p className="font-semibold">{teacher.rating}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="BookOpen" size={18} className="text-primary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Курсов</p>
                          <p className="font-semibold">{teacher.courses}</p>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Icon name="Users" size={18} className="text-secondary" />
                        <div>
                          <p className="text-sm text-muted-foreground">Студентов</p>
                          <p className="font-semibold">{teacher.students.toLocaleString()}</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Icon name="Award" size={18} className="text-accent" />
                        <div>
                          <p className="text-sm text-muted-foreground">Опыт</p>
                          <p className="font-semibold">{teacher.experience}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Link to="/courses" className="flex-1">
                      <Button className="w-full">
                        <Icon name="BookOpen" size={18} />
                        Курсы
                      </Button>
                    </Link>
                    <Button variant="outline" className="flex-1">
                      <Icon name="MessageSquare" size={18} />
                      Написать
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <Card className="mt-12 bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
            <CardHeader className="text-center">
              <CardTitle className="text-2xl">Хотите стать преподавателем?</CardTitle>
              <CardDescription className="text-base">
                Присоединяйтесь к нашей команде экспертов и делитесь своими знаниями
              </CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button size="lg">
                <Icon name="Send" size={20} />
                Подать заявку
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </Layout>
  );
}
