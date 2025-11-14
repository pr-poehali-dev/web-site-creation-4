import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Icon from '@/components/ui/icon';
import Layout from '@/components/Layout';

interface Course {
  id: number;
  title: string;
  description: string;
  level: string;
  duration: string;
  icon: string;
  color: string;
  tests: number;
}

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const courses: Course[] = [
  {
    id: 1,
    title: 'JavaScript для начинающих',
    description: 'Основы программирования и современный JavaScript',
    level: 'Начальный',
    duration: '8 недель',
    icon: 'Code2',
    color: 'bg-primary',
    tests: 5
  },
  {
    id: 2,
    title: 'React разработка',
    description: 'Создание интерактивных веб-приложений с React',
    level: 'Средний',
    duration: '10 недель',
    icon: 'Layers',
    color: 'bg-secondary',
    tests: 7
  },
  {
    id: 3,
    title: 'TypeScript мастерство',
    description: 'Типизация и продвинутые концепции TypeScript',
    level: 'Продвинутый',
    duration: '6 недель',
    icon: 'FileCode',
    color: 'bg-accent',
    tests: 6
  }
];

const testQuestions: Question[] = [
  {
    id: 1,
    question: 'Что такое замыкание в JavaScript?',
    options: [
      'Функция внутри функции с доступом к внешней области видимости',
      'Метод массива для закрытия элементов',
      'Оператор для завершения цикла',
      'Способ защиты данных через private'
    ],
    correctAnswer: 0
  },
  {
    id: 2,
    question: 'Какой метод используется для создания нового массива на основе существующего?',
    options: [
      'forEach()',
      'map()',
      'filter()',
      'reduce()'
    ],
    correctAnswer: 1
  },
  {
    id: 3,
    question: 'Что возвращает Promise?',
    options: [
      'Синхронное значение',
      'Объект с состоянием асинхронной операции',
      'Callback функцию',
      'Boolean значение'
    ],
    correctAnswer: 1
  },
  {
    id: 4,
    question: 'Какой хук React используется для работы с состоянием?',
    options: [
      'useEffect',
      'useContext',
      'useState',
      'useReducer'
    ],
    correctAnswer: 2
  },
  {
    id: 5,
    question: 'Что такое Virtual DOM?',
    options: [
      'Копия реального DOM в памяти',
      'База данных для хранения компонентов',
      'Метод для виртуализации списков',
      'Библиотека для 3D графики'
    ],
    correctAnswer: 0
  }
];

const Index = () => {
  const [testStarted, setTestStarted] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleStartTest = (course: Course) => {
    setSelectedCourse(course);
    setTestStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
  };

  const handleAnswer = (answerIndex: number) => {
    const newAnswers = [...selectedAnswers];
    newAnswers[currentQuestion] = answerIndex;
    setSelectedAnswers(newAnswers);
  };

  const handleNext = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    selectedAnswers.forEach((answer, index) => {
      if (answer === testQuestions[index].correctAnswer) {
        correct++;
      }
    });
    return Math.round((correct / testQuestions.length) * 100);
  };

  const resetTest = () => {
    setTestStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers([]);
    setShowResults(false);
    setSelectedCourse(null);
  };

  if (testStarted && !showResults) {
    const question = testQuestions[currentQuestion];
    const progress = ((currentQuestion + 1) / testQuestions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 px-4">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-2xl font-bold text-foreground">
                {selectedCourse?.title}
              </h2>
              <Button variant="ghost" onClick={resetTest}>
                <Icon name="X" size={20} />
              </Button>
            </div>
            <Progress value={progress} className="h-2" />
            <p className="text-sm text-muted-foreground mt-2">
              Вопрос {currentQuestion + 1} из {testQuestions.length}
            </p>
          </div>

          <Card className="animate-scale-in">
            <CardHeader>
              <CardTitle className="text-xl">{question.question}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {question.options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(index)}
                  className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 hover:scale-[1.02] ${
                    selectedAnswers[currentQuestion] === index
                      ? 'border-primary bg-primary/10 shadow-md'
                      : 'border-border hover:border-primary/50'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div
                      className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${
                        selectedAnswers[currentQuestion] === index
                          ? 'border-primary bg-primary'
                          : 'border-muted-foreground'
                      }`}
                    >
                      {selectedAnswers[currentQuestion] === index && (
                        <Icon name="Check" size={16} className="text-primary-foreground" />
                      )}
                    </div>
                    <span className="font-medium">{option}</span>
                  </div>
                </button>
              ))}

              <div className="flex gap-3 pt-6">
                <Button
                  variant="outline"
                  onClick={handlePrevious}
                  disabled={currentQuestion === 0}
                  className="flex-1"
                >
                  <Icon name="ChevronLeft" size={20} />
                  Назад
                </Button>
                <Button
                  onClick={handleNext}
                  disabled={selectedAnswers[currentQuestion] === undefined}
                  className="flex-1"
                >
                  {currentQuestion === testQuestions.length - 1 ? 'Завершить' : 'Далее'}
                  <Icon name="ChevronRight" size={20} />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    const correctAnswers = selectedAnswers.filter(
      (answer, index) => answer === testQuestions[index].correctAnswer
    ).length;

    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-12 px-4">
        <div className="max-w-2xl mx-auto animate-fade-in">
          <Card className="text-center animate-scale-in">
            <CardHeader>
              <div className="mx-auto w-24 h-24 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center mb-4">
                <Icon name="Trophy" size={48} className="text-white" />
              </div>
              <CardTitle className="text-3xl mb-2">Тест завершен!</CardTitle>
              <CardDescription className="text-lg">
                {selectedCourse?.title}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="text-6xl font-bold text-primary">{score}%</div>
                <Progress value={score} className="h-3" />
                <p className="text-muted-foreground">
                  Правильных ответов: {correctAnswers} из {testQuestions.length}
                </p>
              </div>

              <div className="grid grid-cols-3 gap-4 py-6">
                <div className="space-y-2">
                  <Icon name="Target" size={32} className="mx-auto text-primary" />
                  <p className="text-sm text-muted-foreground">Точность</p>
                  <p className="text-xl font-bold">{score}%</p>
                </div>
                <div className="space-y-2">
                  <Icon name="CheckCircle2" size={32} className="mx-auto text-secondary" />
                  <p className="text-sm text-muted-foreground">Верных</p>
                  <p className="text-xl font-bold">{correctAnswers}</p>
                </div>
                <div className="space-y-2">
                  <Icon name="Award" size={32} className="mx-auto text-accent" />
                  <p className="text-sm text-muted-foreground">Вопросов</p>
                  <p className="text-xl font-bold">{testQuestions.length}</p>
                </div>
              </div>

              <div className="space-y-3 pt-4">
                <Button onClick={resetTest} className="w-full" size="lg">
                  <Icon name="RotateCcw" size={20} />
                  Вернуться к курсам
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <Layout>
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5">
      <div className="relative overflow-hidden bg-gradient-to-r from-primary via-secondary to-accent py-20 px-4">
        <div className="absolute inset-0 bg-grid-white/10"></div>
        <div className="max-w-6xl mx-auto text-center relative z-10 animate-fade-in">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            <Icon name="Sparkles" size={16} />
            Образовательная платформа будущего
          </Badge>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 animate-scale-in">
            Учись. Тестируй. Развивайся.
          </h1>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Проходите интерактивные курсы и проверяйте свои знания с помощью современной системы тестирования
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" variant="secondary" className="group">
              Начать обучение
              <Icon name="ArrowRight" size={20} className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
              <Icon name="PlayCircle" size={20} />
              Смотреть демо
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto py-16 px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl font-bold mb-4">Популярные курсы</h2>
          <p className="text-lg text-muted-foreground">
            Выберите курс и начните тестирование прямо сейчас
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
          {courses.map((course, index) => (
            <Card
              key={course.id}
              className="hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className={`w-14 h-14 rounded-xl ${course.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <Icon name={course.icon as any} size={28} className="text-white" />
                </div>
                <CardTitle className="text-xl mb-2">{course.title}</CardTitle>
                <CardDescription className="text-base">
                  {course.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex gap-2 flex-wrap">
                  <Badge variant="secondary">
                    <Icon name="Signal" size={14} />
                    {course.level}
                  </Badge>
                  <Badge variant="outline">
                    <Icon name="Clock" size={14} />
                    {course.duration}
                  </Badge>
                  <Badge variant="outline">
                    <Icon name="FileText" size={14} />
                    {course.tests} тестов
                  </Badge>
                </div>
                <Link to={`/course/${course.id}`} className="block">
                  <Button className="w-full group">
                    Подробнее
                    <Icon name="ArrowRight" size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Button>
                </Link>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16 px-4 mt-12">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Почему выбирают нас</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center space-y-4 animate-fade-in">
              <div className="w-16 h-16 bg-primary rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Brain" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Адаптивные тесты</h3>
              <p className="text-muted-foreground">
                Система подстраивается под ваш уровень знаний
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '100ms' }}>
              <div className="w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="TrendingUp" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Отслеживание прогресса</h3>
              <p className="text-muted-foreground">
                Следите за своими результатами в реальном времени
              </p>
            </div>
            <div className="text-center space-y-4 animate-fade-in" style={{ animationDelay: '200ms' }}>
              <div className="w-16 h-16 bg-accent rounded-2xl flex items-center justify-center mx-auto">
                <Icon name="Award" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold">Сертификаты</h3>
              <p className="text-muted-foreground">
                Получайте сертификаты после успешного прохождения
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Layout>
  );
};

export default Index;