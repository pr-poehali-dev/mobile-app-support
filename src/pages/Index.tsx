import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

type Screen = 'onboarding' | 'main' | 'knowledge' | 'chat' | 'buddy' | 'events' | 'consultations' | 'article';

const Index = () => {
  const [currentScreen, setCurrentScreen] = useState<Screen>('onboarding');
  const [onboardingStep, setOnboardingStep] = useState(0);
  const [selectedArticle, setSelectedArticle] = useState<string>('');

  const onboardingSteps = [
    {
      title: 'Добро пожаловать!',
      description: 'Мы здесь, чтобы помочь вам адаптироваться и найти поддержку',
      icon: 'Heart',
    },
    {
      title: 'База знаний',
      description: 'Полезные статьи и гайды по важным вопросам',
      icon: 'BookOpen',
    },
    {
      title: 'Найди своего бадди',
      description: 'Мы подберем для вас человека с похожим опытом',
      icon: 'Users',
    },
  ];

  const articles = [
    { id: '1', title: 'Как оформить регистрацию', category: 'Документы', time: '5 мин' },
    { id: '2', title: 'Поиск жилья: с чего начать', category: 'Жильё', time: '7 мин' },
    { id: '3', title: 'Медицинская помощь', category: 'Здоровье', time: '4 мин' },
    { id: '4', title: 'Трудоустройство: первые шаги', category: 'Работа', time: '8 мин' },
  ];

  const events = [
    { id: '1', title: 'Встреча для новичков', date: '15 декабря', time: '18:00', participants: 12 },
    { id: '2', title: 'Мастер-класс по резюме', date: '18 декабря', time: '19:00', participants: 8 },
    { id: '3', title: 'Прогулка по городу', date: '20 декабря', time: '14:00', participants: 15 },
  ];

  const messages = [
    { id: '1', sender: 'Анна', text: 'Привет! Чем могу помочь?', time: '14:23', isVolunteer: true },
    { id: '2', sender: 'Вы', text: 'Здравствуйте, у меня вопрос про документы', time: '14:25', isVolunteer: false },
    { id: '3', sender: 'Анна', text: 'Конечно, слушаю вас', time: '14:26', isVolunteer: true },
  ];

  const renderOnboarding = () => (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-b from-blue-50 to-white">
      <div className="w-full max-w-md animate-fade-in">
        <div className="flex justify-center mb-8">
          <div className="w-24 h-24 rounded-full bg-primary/10 flex items-center justify-center">
            <Icon name={onboardingSteps[onboardingStep].icon as any} size={48} className="text-primary" />
          </div>
        </div>
        
        <h1 className="text-3xl font-bold text-center mb-4">
          {onboardingSteps[onboardingStep].title}
        </h1>
        
        <p className="text-center text-muted-foreground mb-8 text-lg">
          {onboardingSteps[onboardingStep].description}
        </p>

        <div className="flex justify-center gap-2 mb-8">
          {onboardingSteps.map((_, index) => (
            <div
              key={index}
              className={`h-2 rounded-full transition-all ${
                index === onboardingStep ? 'w-8 bg-primary' : 'w-2 bg-gray-300'
              }`}
            />
          ))}
        </div>

        <Button
          onClick={() => {
            if (onboardingStep < onboardingSteps.length - 1) {
              setOnboardingStep(onboardingStep + 1);
            } else {
              setCurrentScreen('main');
            }
          }}
          className="w-full h-12 text-base"
          size="lg"
        >
          {onboardingStep < onboardingSteps.length - 1 ? 'Далее' : 'Начать'}
        </Button>

        {onboardingStep > 0 && (
          <Button
            variant="ghost"
            onClick={() => setOnboardingStep(onboardingStep - 1)}
            className="w-full mt-2"
          >
            Назад
          </Button>
        )}
      </div>
    </div>
  );

  const renderMain = () => (
    <div className="min-h-screen bg-background pb-20">
      <div className="p-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Привет! 👋</h2>
          <p className="text-muted-foreground">Чем можем помочь сегодня?</p>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <Card 
            className="cursor-pointer hover-scale transition-all hover:shadow-md"
            onClick={() => setCurrentScreen('knowledge')}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                <Icon name="BookOpen" size={24} className="text-primary" />
              </div>
              <h3 className="font-semibold">База знаний</h3>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover-scale transition-all hover:shadow-md"
            onClick={() => setCurrentScreen('chat')}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                <Icon name="MessageCircle" size={24} className="text-green-600" />
              </div>
              <h3 className="font-semibold">Чат</h3>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover-scale transition-all hover:shadow-md"
            onClick={() => setCurrentScreen('buddy')}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                <Icon name="Users" size={24} className="text-purple-600" />
              </div>
              <h3 className="font-semibold">Бадди</h3>
            </CardContent>
          </Card>

          <Card 
            className="cursor-pointer hover-scale transition-all hover:shadow-md"
            onClick={() => setCurrentScreen('events')}
          >
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-12 h-12 rounded-full bg-orange-100 flex items-center justify-center mb-3">
                <Icon name="Calendar" size={24} className="text-orange-600" />
              </div>
              <h3 className="font-semibold">События</h3>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">Консультации</CardTitle>
            <CardDescription>Запишитесь на онлайн-консультацию</CardDescription>
          </CardHeader>
          <CardContent>
            <Button 
              className="w-full" 
              onClick={() => setCurrentScreen('consultations')}
            >
              Записаться
            </Button>
          </CardContent>
        </Card>
      </div>

      <div className="fixed bottom-0 left-0 right-0 bg-white border-t">
        <div className="flex justify-around items-center h-16">
          <Button variant="ghost" size="sm" className="flex-col h-auto py-2" onClick={() => setCurrentScreen('main')}>
            <Icon name="Home" size={20} className="text-primary" />
            <span className="text-xs mt-1">Главная</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto py-2" onClick={() => setCurrentScreen('knowledge')}>
            <Icon name="BookOpen" size={20} />
            <span className="text-xs mt-1">Знания</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto py-2" onClick={() => setCurrentScreen('chat')}>
            <Icon name="MessageCircle" size={20} />
            <span className="text-xs mt-1">Чат</span>
          </Button>
          <Button variant="ghost" size="sm" className="flex-col h-auto py-2">
            <Icon name="User" size={20} />
            <span className="text-xs mt-1">Профиль</span>
          </Button>
        </div>
      </div>
    </div>
  );

  const renderKnowledge = () => (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 bg-white border-b z-10 p-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('main')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-bold">База знаний</h1>
      </div>

      <div className="p-4">
        <div className="relative mb-6">
          <Icon name="Search" size={20} className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Поиск статей..." className="pl-10" />
        </div>

        <div className="flex gap-2 mb-6 overflow-x-auto pb-2">
          <Badge variant="default" className="cursor-pointer">Все</Badge>
          <Badge variant="outline" className="cursor-pointer">Документы</Badge>
          <Badge variant="outline" className="cursor-pointer">Жильё</Badge>
          <Badge variant="outline" className="cursor-pointer">Здоровье</Badge>
          <Badge variant="outline" className="cursor-pointer">Работа</Badge>
        </div>

        <div className="space-y-3">
          {articles.map((article) => (
            <Card 
              key={article.id}
              className="cursor-pointer hover-scale"
              onClick={() => {
                setSelectedArticle(article.id);
                setCurrentScreen('article');
              }}
            >
              <CardContent className="p-4">
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold flex-1">{article.title}</h3>
                  <Icon name="ChevronRight" size={20} className="text-muted-foreground" />
                </div>
                <div className="flex items-center gap-3 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Icon name="Tag" size={14} />
                    {article.category}
                  </span>
                  <span className="flex items-center gap-1">
                    <Icon name="Clock" size={14} />
                    {article.time}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderArticle = () => (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 bg-white border-b z-10 p-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('knowledge')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-bold">Статья</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-6 max-w-2xl">
          <div className="mb-4">
            <Badge className="mb-3">Документы</Badge>
            <h1 className="text-3xl font-bold mb-3">Как оформить регистрацию</h1>
            <p className="text-muted-foreground flex items-center gap-2">
              <Icon name="Clock" size={16} />
              5 минут чтения
            </p>
          </div>

          <div className="prose prose-sm max-w-none space-y-4 text-foreground">
            <p className="text-lg leading-relaxed">
              Регистрация — важный шаг для законного пребывания. В этой статье мы расскажем о процессе оформления.
            </p>

            <h2 className="text-xl font-semibold mt-6 mb-3">Необходимые документы</h2>
            <ul className="space-y-2 ml-4">
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-0.5" />
                <span>Паспорт или документ, удостоверяющий личность</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-0.5" />
                <span>Миграционная карта</span>
              </li>
              <li className="flex items-start gap-2">
                <Icon name="Check" size={20} className="text-primary mt-0.5" />
                <span>Документ, подтверждающий право пребывания</span>
              </li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-3">Порядок действий</h2>
            <div className="space-y-3">
              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
                      1
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Подготовьте документы</h3>
                      <p className="text-sm text-muted-foreground">Соберите все необходимые документы из списка выше</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
                      2
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Обратитесь в МФЦ</h3>
                      <p className="text-sm text-muted-foreground">Запишитесь на прием или придите в порядке живой очереди</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4">
                  <div className="flex gap-3">
                    <div className="w-8 h-8 rounded-full bg-primary text-white flex items-center justify-center font-semibold flex-shrink-0">
                      3
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Получите подтверждение</h3>
                      <p className="text-sm text-muted-foreground">Срок оформления — до 7 рабочих дней</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-amber-50 border-amber-200 mt-6">
              <CardContent className="p-4 flex gap-3">
                <Icon name="Info" size={20} className="text-amber-600 flex-shrink-0" />
                <div className="text-sm">
                  <p className="font-semibold mb-1">Важно знать</p>
                  <p className="text-muted-foreground">
                    Регистрация должна быть оформлена в течение 7 дней с момента прибытия
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="mt-8 pt-6 border-t">
            <h3 className="font-semibold mb-3">Была ли эта статья полезной?</h3>
            <div className="flex gap-2">
              <Button variant="outline" size="sm">
                <Icon name="ThumbsUp" size={16} className="mr-1" />
                Да
              </Button>
              <Button variant="outline" size="sm">
                <Icon name="ThumbsDown" size={16} className="mr-1" />
                Нет
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  );

  const renderChat = () => (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="sticky top-0 bg-white border-b z-10 p-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('main')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <Avatar className="w-10 h-10">
          <AvatarFallback className="bg-green-100 text-green-600">А</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <h2 className="font-semibold">Анна</h2>
          <p className="text-xs text-muted-foreground">Волонтер • Онлайн</p>
        </div>
      </div>

      <ScrollArea className="flex-1 p-4">
        <div className="space-y-4 pb-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex gap-2 ${message.isVolunteer ? 'justify-start' : 'justify-end'}`}
            >
              {message.isVolunteer && (
                <Avatar className="w-8 h-8 mt-1">
                  <AvatarFallback className="bg-green-100 text-green-600 text-xs">А</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[75%] rounded-2xl px-4 py-2 ${
                  message.isVolunteer
                    ? 'bg-gray-100 text-foreground'
                    : 'bg-primary text-primary-foreground'
                }`}
              >
                <p className="text-sm">{message.text}</p>
                <p className={`text-xs mt-1 ${message.isVolunteer ? 'text-muted-foreground' : 'text-primary-foreground/70'}`}>
                  {message.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </ScrollArea>

      <div className="border-t bg-white p-4">
        <div className="flex gap-2">
          <Input placeholder="Напишите сообщение..." className="flex-1" />
          <Button size="icon">
            <Icon name="Send" size={20} />
          </Button>
        </div>
      </div>
    </div>
  );

  const renderBuddy = () => (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 bg-white border-b z-10 p-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('main')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-bold">Подбор бадди</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Найдем вашего бадди</h2>
            <p className="text-muted-foreground">
              Ответьте на несколько вопросов, и мы подберем человека с похожим опытом
            </p>
          </div>

          <Tabs defaultValue="interests" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="interests">Интересы</TabsTrigger>
              <TabsTrigger value="goals">Цели</TabsTrigger>
              <TabsTrigger value="about">О вас</TabsTrigger>
            </TabsList>

            <TabsContent value="interests" className="space-y-4 mt-6">
              <div>
                <Label className="text-base font-semibold mb-3 block">Ваши интересы</Label>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Спорт</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Культура</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Образование</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Путешествия</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Технологии</Badge>
                  <Badge variant="outline" className="cursor-pointer hover:bg-primary hover:text-primary-foreground">Искусство</Badge>
                </div>
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Язык общения</Label>
                <RadioGroup defaultValue="russian">
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="russian" id="russian" />
                    <Label htmlFor="russian" className="cursor-pointer">Русский</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="english" id="english" />
                    <Label htmlFor="english" className="cursor-pointer">Английский</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both" id="both" />
                    <Label htmlFor="both" className="cursor-pointer">Оба языка</Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>

            <TabsContent value="goals" className="space-y-4 mt-6">
              <div>
                <Label htmlFor="goal" className="text-base font-semibold mb-3 block">
                  Что для вас важно сейчас?
                </Label>
                <Textarea 
                  id="goal"
                  placeholder="Например: найти работу, освоиться в городе, найти друзей..."
                  className="min-h-32"
                />
              </div>

              <div>
                <Label className="text-base font-semibold mb-3 block">Помощь бадди</Label>
                <RadioGroup defaultValue="advice">
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="advice" id="advice" />
                    <Label htmlFor="advice" className="cursor-pointer">Советы и рекомендации</Label>
                  </div>
                  <div className="flex items-center space-x-2 mb-2">
                    <RadioGroupItem value="support" id="support" />
                    <Label htmlFor="support" className="cursor-pointer">Моральная поддержка</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem value="both-help" id="both-help" />
                    <Label htmlFor="both-help" className="cursor-pointer">Все вместе</Label>
                  </div>
                </RadioGroup>
              </div>
            </TabsContent>

            <TabsContent value="about" className="space-y-4 mt-6">
              <div>
                <Label htmlFor="name" className="text-base font-semibold mb-2 block">Ваше имя</Label>
                <Input id="name" placeholder="Как к вам обращаться?" />
              </div>

              <div>
                <Label htmlFor="about" className="text-base font-semibold mb-2 block">
                  Расскажите о себе
                </Label>
                <Textarea 
                  id="about"
                  placeholder="Пару слов о том, кто вы и что вас интересует..."
                  className="min-h-32"
                />
              </div>

              <Card className="bg-blue-50 border-blue-200">
                <CardContent className="p-4 flex gap-3">
                  <Icon name="Lock" size={20} className="text-primary flex-shrink-0" />
                  <p className="text-sm text-muted-foreground">
                    Вся информация конфиденциальна и используется только для подбора бадди
                  </p>
                </CardContent>
              </Card>

              <Button className="w-full" size="lg">
                Найти бадди
              </Button>
            </TabsContent>
          </Tabs>
        </div>
      </ScrollArea>
    </div>
  );

  const renderEvents = () => (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 bg-white border-b z-10 p-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('main')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-bold">События</h1>
      </div>

      <div className="p-4">
        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-1">Предстоящие мероприятия</h2>
          <p className="text-sm text-muted-foreground">Присоединяйтесь к нашим встречам</p>
        </div>

        <div className="space-y-3">
          {events.map((event) => (
            <Card key={event.id} className="hover-scale cursor-pointer">
              <CardContent className="p-4">
                <div className="flex gap-4">
                  <div className="w-16 h-16 rounded-lg bg-primary/10 flex flex-col items-center justify-center flex-shrink-0">
                    <span className="text-2xl font-bold text-primary">
                      {event.date.split(' ')[0]}
                    </span>
                    <span className="text-xs text-muted-foreground">
                      {event.date.split(' ')[1]}
                    </span>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{event.title}</h3>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <span className="flex items-center gap-1">
                        <Icon name="Clock" size={14} />
                        {event.time}
                      </span>
                      <span className="flex items-center gap-1">
                        <Icon name="Users" size={14} />
                        {event.participants} участников
                      </span>
                    </div>
                    <Button size="sm" variant="outline">
                      Записаться
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  const renderConsultations = () => (
    <div className="min-h-screen bg-background pb-20">
      <div className="sticky top-0 bg-white border-b z-10 p-4 flex items-center gap-3">
        <Button variant="ghost" size="sm" onClick={() => setCurrentScreen('main')}>
          <Icon name="ArrowLeft" size={20} />
        </Button>
        <h1 className="text-xl font-bold">Консультации</h1>
      </div>

      <ScrollArea className="h-[calc(100vh-80px)]">
        <div className="p-6">
          <div className="mb-6">
            <h2 className="text-2xl font-bold mb-2">Онлайн-консультации</h2>
            <p className="text-muted-foreground">
              Запишитесь на консультацию со специалистом
            </p>
          </div>

          <div className="space-y-4 mb-6">
            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Юридическая консультация</CardTitle>
                    <CardDescription>Помощь в оформлении документов</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
                    <Icon name="Scale" size={24} className="text-blue-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Длительность: 30-45 минут
                </p>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Психологическая поддержка</CardTitle>
                    <CardDescription>Индивидуальная сессия</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center">
                    <Icon name="Heart" size={24} className="text-green-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Длительность: 50 минут
                </p>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>

            <Card className="border-primary/20">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">Карьерная консультация</CardTitle>
                    <CardDescription>Помощь в поиске работы</CardDescription>
                  </div>
                  <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                    <Icon name="Briefcase" size={24} className="text-purple-600" />
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-3">
                  Длительность: 40 минут
                </p>
                <Button className="w-full">Записаться</Button>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-amber-50 border-amber-200">
            <CardContent className="p-4 flex gap-3">
              <Icon name="Info" size={20} className="text-amber-600 flex-shrink-0" />
              <div className="text-sm">
                <p className="font-semibold mb-1">Как это работает</p>
                <p className="text-muted-foreground">
                  После записи мы свяжемся с вами для подтверждения времени. Консультация проходит онлайн через видеосвязь.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </ScrollArea>
    </div>
  );

  return (
    <div className="bg-background">
      {currentScreen === 'onboarding' && renderOnboarding()}
      {currentScreen === 'main' && renderMain()}
      {currentScreen === 'knowledge' && renderKnowledge()}
      {currentScreen === 'article' && renderArticle()}
      {currentScreen === 'chat' && renderChat()}
      {currentScreen === 'buddy' && renderBuddy()}
      {currentScreen === 'events' && renderEvents()}
      {currentScreen === 'consultations' && renderConsultations()}
    </div>
  );
};

export default Index;
