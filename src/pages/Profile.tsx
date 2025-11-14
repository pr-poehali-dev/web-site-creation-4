import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';
import { Link } from 'react-router-dom';

export default function Profile() {
  const user = {
    name: 'Мария Иванова',
    email: 'maria@example.com',
    joined: 'Сентябрь 2024',
    avatar: null,
    coursesCompleted: 5,
    coursesInProgress: 3,
    totalPoints: 1250,
    level: 'Продвинутый'
  };

  const coursesInProgress = [
    {
      id: 2,
      title: 'React разработка',
      progress: 65,
      nextLesson: 'Хуки React: useEffect',
      dueDate: '15 декабря'
    },
    {
      id: 4,
      title: 'UI/UX дизайн',
      progress: 45,
      nextLesson: 'Создание прототипов',
      dueDate: '20 декабря'
    },
    {
      id: 6,
      title: 'Python для анализа данных',
      progress: 30,
      nextLesson: 'Работа с Pandas',
      dueDate: '25 декабря'
    }
  ];

  const completedCourses = [
    { id: 1, title: 'JavaScript для начинающих', completedDate: '1 декабря', grade: 95 },
    { id: 7, title: 'Основы SQL', completedDate: '15 ноября', grade: 88 },
    { id: 5, title: 'Figma для дизайнеров', completedDate: '30 октября', grade: 92 }
  ];

  const achievements = [
    { icon: 'Award', title: 'Первый курс', description: 'Завершен первый курс', unlocked: true },
    { icon: 'Trophy', title: 'Отличник', description: 'Оценка выше 90%', unlocked: true },
    { icon: 'Target', title: 'Целеустремленный', description: '3 курса подряд', unlocked: true },
    { icon: 'Zap', title: 'Быстрый старт', description: 'Курс за 1 неделю', unlocked: true },
    { icon: 'Star', title: 'Звезда', description: '5 курсов завершено', unlocked: true },
    { icon: 'Crown', title: 'Мастер', description: '10 курсов завершено', unlocked: false }
  ];

  const recentActivity = [
    { type: 'lesson', title: 'Завершен урок "useState и работа с состоянием"', date: '2 часа назад', icon: 'PlayCircle' },
    { type: 'test', title: 'Пройден тест по основам React', date: '5 часов назад', icon: 'FileText', score: 90 },
    { type: 'achievement', title: 'Получено достижение "Отличник"', date: 'Вчера', icon: 'Award' },
    { type: 'course', title: 'Начат курс "Python для анализа данных"', date: '2 дня назад', icon: 'BookOpen' }
  ];

  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen py-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-1 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name="User" size={48} className="text-white" />
                  </div>
                  <CardTitle className="text-2xl">{user.name}</CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                  <Badge className="mt-2">{user.level}</Badge>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <p className="text-2xl font-bold text-primary">{user.coursesCompleted}</p>
                      <p className="text-xs text-muted-foreground">Завершено</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-secondary">{user.coursesInProgress}</p>
                      <p className="text-xs text-muted-foreground">В процессе</p>
                    </div>
                    <div>
                      <p className="text-2xl font-bold text-accent">{user.totalPoints}</p>
                      <p className="text-xs text-muted-foreground">Баллов</p>
                    </div>
                  </div>
                  <div className="pt-4 border-t space-y-2 text-sm">
                    <div className="flex items-center gap-2 text-muted-foreground">
                      <Icon name="Calendar" size={16} />
                      <span>На платформе с {user.joined}</span>
                    </div>
                  </div>
                  <Button className="w-full">
                    <Icon name="Settings" size={18} />
                    Настройки профиля
                  </Button>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Достижения</CardTitle>
                  <CardDescription>{achievements.filter(a => a.unlocked).length} из {achievements.length}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-3">
                    {achievements.map((achievement, index) => (
                      <div
                        key={index}
                        className={`aspect-square rounded-xl flex items-center justify-center transition-all ${
                          achievement.unlocked
                            ? 'bg-gradient-to-br from-primary to-secondary shadow-lg hover:scale-110'
                            : 'bg-muted opacity-50'
                        }`}
                        title={`${achievement.title}: ${achievement.description}`}
                      >
                        <Icon name={achievement.icon as any} size={24} className={achievement.unlocked ? 'text-white' : 'text-muted-foreground'} />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="lg:col-span-2 space-y-6">
              <Tabs defaultValue="progress" className="animate-fade-in">
                <TabsList className="grid w-full grid-cols-3">
                  <TabsTrigger value="progress">
                    <Icon name="TrendingUp" size={16} />
                    Прогресс
                  </TabsTrigger>
                  <TabsTrigger value="completed">
                    <Icon name="CheckCircle2" size={16} />
                    Завершено
                  </TabsTrigger>
                  <TabsTrigger value="activity">
                    <Icon name="Activity" size={16} />
                    Активность
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="progress" className="space-y-4 mt-6">
                  {coursesInProgress.map((course) => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription className="mt-1">
                              Следующий урок: {course.nextLesson}
                            </CardDescription>
                          </div>
                          <Badge variant="outline">
                            <Icon name="Clock" size={14} />
                            {course.dueDate}
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div>
                          <div className="flex justify-between text-sm mb-2">
                            <span className="text-muted-foreground">Прогресс</span>
                            <span className="font-semibold">{course.progress}%</span>
                          </div>
                          <Progress value={course.progress} className="h-2" />
                        </div>
                        <Link to={`/course/${course.id}`}>
                          <Button className="w-full">
                            <Icon name="Play" size={18} />
                            Продолжить обучение
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="completed" className="space-y-4 mt-6">
                  {completedCourses.map((course) => (
                    <Card key={course.id} className="hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex items-start justify-between">
                          <div>
                            <CardTitle className="text-lg">{course.title}</CardTitle>
                            <CardDescription className="mt-1">
                              Завершен {course.completedDate}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-primary mb-1">
                              <Icon name="Award" size={20} />
                              <span className="text-2xl font-bold">{course.grade}%</span>
                            </div>
                            <Badge variant="secondary">Отлично</Badge>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex gap-2">
                          <Button variant="outline" className="flex-1">
                            <Icon name="Download" size={18} />
                            Сертификат
                          </Button>
                          <Link to={`/course/${course.id}`} className="flex-1">
                            <Button variant="outline" className="w-full">
                              <Icon name="RefreshCw" size={18} />
                              Пройти снова
                            </Button>
                          </Link>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </TabsContent>

                <TabsContent value="activity" className="space-y-4 mt-6">
                  <Card>
                    <CardHeader>
                      <CardTitle>Последняя активность</CardTitle>
                      <CardDescription>Ваши недавние действия на платформе</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-4">
                        {recentActivity.map((activity, index) => (
                          <div key={index} className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
                            <div className={`w-10 h-10 rounded-lg flex items-center justify-center shrink-0 ${
                              activity.type === 'achievement' ? 'bg-accent/20' :
                              activity.type === 'test' ? 'bg-primary/20' :
                              activity.type === 'course' ? 'bg-secondary/20' : 'bg-muted'
                            }`}>
                              <Icon name={activity.icon as any} size={20} className={
                                activity.type === 'achievement' ? 'text-accent' :
                                activity.type === 'test' ? 'text-primary' :
                                activity.type === 'course' ? 'text-secondary' : 'text-foreground'
                              } />
                            </div>
                            <div className="flex-1">
                              <p className="font-medium">{activity.title}</p>
                              <p className="text-sm text-muted-foreground">{activity.date}</p>
                              {activity.score && (
                                <Badge variant="secondary" className="mt-1">
                                  Результат: {activity.score}%
                                </Badge>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
