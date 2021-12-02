# TestWork

Запуск контейнеров

```
$ docker-compose up --build -d
```

Установка зависимостей php

```
$ docker-compose run --rm composer install
```

Запуск миграций

```
$ docker-compose run --rm artisan migrate
```

Установка зависимостей фроненда

```
$ cd frontend
$ npm install
```


Запуск dev-сервера фронтенда

```
$ npm run dev
```


Сборка фронтенда

```
$ npm run build
```