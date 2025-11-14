import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

const upcomingClasses = [
  {
    id: 1,
    title: 'Живой вебинар: React Best Practices',
    instructor: 'Александр Петров',
    date: '15 декабря 2024',
    time: '18:00 - 19:30',
    type: 'Вебинар',
    participants: 45,
    maxParticipants: 100,
    category: 'Программирование'
  },
  {
    id: 2,
    title: 'Воркшоп: Figma для начинающих',
    instructor: 'Мария Смирнова',
    date: '16 декабря 2024',
    time: '19:00 - 21:00',
    type: 'Воркшоп',
    participants: 23,
    maxParticipants: 30,
    category: 'Дизайн'
  },
  {
    id: 3,
    title: 'Консультация: Карьера в IT',
    instructor: 'Дмитрий Козлов',
    date: '17 декабря 2024',
    time: '17:00 - 18:00',
    type: 'Консультация',
    participants: 12,
    maxParticipants: 20,
    category: 'Карьера'
  }
];

const weekSchedule = [
  {
    day: 'Понедельник',
    date: '16 декабря',
    events: [
      { time: '18:00', title: 'JavaScript: Замыкания', type: 'Лекция', instructor: 'А. Петров' },
      { time: '20:00', title: 'Q&A сессия', type: 'Вопросы', instructor: 'А. Петров' }
    ]
  },
  {
    day: 'Вторник',
    date: '17 декабря',
    events: [
      { time: '19:00', title: 'UI/UX: Проектирование', type: 'Воркшоп', instructor: 'М. Смирнова' }
    ]
  },
  {
    day: 'Среда',
    date: '18 декабря',
    events: [
      { time: '17:00', title: 'Python: ООП', type: 'Лекция', instructor: 'И. Соколов' },
      { time: '19:00', title: 'Практика: Решение задач', type: 'Практика', instructor: 'И. Соколов' }
    ]
  },
  {
    day: 'Четверг',
    date: '19 декабря',
    events: [
      { time: '18:30', title: 'React: Hooks', type: 'Лекция', instructor: 'А. Петров' }
    ]
  },
  {
    day: 'Пятница',
    date: '20 декабря',
    events: [
      { time: '18:00', title: 'SQL: Оптимизация запросов', type: 'Лекция', instructor: 'Н. Волков' },
      { time: '20:00', title: 'Итоги недели', type: 'Обсуждение', instructor: 'Команда' }
    ]
  }
];

const mySchedule = [
  {
    id: 1,
    course: 'React разработка',
    nextLesson: 'Хуки React: useEffect',
    scheduledFor: 'Сегодня, 20:00',
    duration: '45 мин'
  },
  {
    id: 2,
    course: 'UI/UX дизайн',
    nextLesson: 'Создание прототипов',
    scheduledFor: 'Завтра, 19:00',
    duration: '60 мин'
  }
];

export default function Schedule() {
  return (
    <Layout>
      <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl font-bold mb-4">Расписание занятий</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Живые вебинары, воркшопы и консультации с преподавателями
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-8">
              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Ближайшие события</h2>
                <div className="space-y-4">
                  {upcomingClasses.map((event) => (
                    <Card key={event.id} className="hover:shadow-xl transition-all">
                      <CardHeader>
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex-1">
                            <div className="flex items-center gap-2 mb-2">
                              <Badge>{event.type}</Badge>
                              <Badge variant="outline">{event.category}</Badge>
                            </div>
                            <CardTitle className="text-xl mb-2">{event.title}</CardTitle>
                            <CardDescription className="flex items-center gap-2">
                              <Icon name="User" size={16} />
                              {event.instructor}
                            </CardDescription>
                          </div>
                          <div className="text-right">
                            <div className="flex items-center gap-1 text-sm text-muted-foreground mb-1">
                              <Icon name="Calendar" size={16} />
                              <span>{event.date}</span>
                            </div>
                            <div className="flex items-center gap-1 text-sm font-medium">
                              <Icon name="Clock" size={16} />
                              <span>{event.time}</span>
                            </div>
                          </div>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Icon name="Users" size={16} />
                            <span>{event.participants} / {event.maxParticipants} участников</span>
                          </div>
                          <Button>
                            <Icon name="Plus" size={18} />
                            Записаться
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="animate-fade-in">
                <h2 className="text-2xl font-bold mb-6">Расписание на неделю</h2>
                <Card>
                  <CardContent className="p-0">
                    {weekSchedule.map((day, index) => (
                      <div key={index} className={`p-6 ${index !== weekSchedule.length - 1 ? 'border-b' : ''}`}>
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                            <Icon name="Calendar" size={24} className="text-primary" />
                          </div>
                          <div>
                            <h3 className="font-semibold text-lg">{day.day}</h3>
                            <p className="text-sm text-muted-foreground">{day.date}</p>
                          </div>
                        </div>
                        <div className="space-y-3 ml-15">
                          {day.events.map((event, eventIndex) => (
                            <div key={eventIndex} className="flex items-start gap-4 p-3 rounded-lg hover:bg-muted/50 transition-colors">
                              <div className="text-sm font-medium text-primary min-w-[60px]">
                                {event.time}
                              </div>
                              <div className="flex-1">
                                <p className="font-medium">{event.title}</p>
                                <div className="flex items-center gap-3 mt-1">
                                  <Badge variant="outline" className="text-xs">{event.type}</Badge>
                                  <span className="text-xs text-muted-foreground">{event.instructor}</span>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="lg:col-span-1 space-y-6">
              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Мое расписание</CardTitle>
                  <CardDescription>Ваши запланированные уроки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {mySchedule.map((item) => (
                    <div key={item.id} className="p-4 border rounded-lg space-y-3">
                      <div>
                        <p className="font-semibold">{item.course}</p>
                        <p className="text-sm text-muted-foreground">{item.nextLesson}</p>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <Icon name="Clock" size={16} className="text-primary" />
                        <span className="font-medium text-primary">{item.scheduledFor}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <Icon name="Timer" size={16} />
                        <span>{item.duration}</span>
                      </div>
                    </div>
                  ))}
                  <Button className="w-full" variant="outline">
                    <Icon name="Calendar" size={18} />
                    Управление расписанием
                  </Button>
                </CardContent>
              </Card>

              <Card className="animate-fade-in">
                <CardHeader>
                  <CardTitle>Фильтры</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Code" size={18} />
                    Программирование
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Palette" size={18} />
                    Дизайн
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Database" size={18} />
                    Data Science
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="TrendingUp" size={18} />
                    Маркетинг
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-primary/10 to-secondary/10 border-primary/20 animate-fade-in">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Icon name="Bell" size={24} />
                    Напоминания
                  </CardTitle>
                  <CardDescription>
                    Включите уведомления, чтобы не пропустить занятия
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button className="w-full">
                    <Icon name="BellRing" size={18} />
                    Включить уведомления
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
