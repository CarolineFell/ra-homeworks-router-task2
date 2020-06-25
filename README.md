[![Build status](https://ci.appveyor.com/api/projects/status/3fup1rqr5a8gp39e/branch/master?svg=true)](https://ci.appveyor.com/project/CarolineFell/ra-homeworks-router-task2/branch/master)

https://CarolineFell.github.io/ra-homeworks-router-task2/

## Задача

Только id, content и created, в качестве остальных значений (имя, фото) - заглушки.

## Общая механика

При нахождении на странице `/` отображается список существующих постов (GET на адрес http://localhost:7777/posts), полученные данные отображаются в виде карточек.

Кнопка "Создать пост" ведёт на страницу создания и добавления `/posts/new` (+ регулярные выражения).

При клике на саму карточку происходит переход на страницу просмотра поста `/posts/{postId}`.

### Страница создания

На странице создания `/posts/new` отображается карточка создания:

- Текстовое поле и кнопка "Опубликовать".

При нажатии на кнопку "Опубликовать", пост сохраняется (POST на адрес http://localhost:7777/posts body: `{"id": 0, "content": "То, что введено в поле ввода"}`), после чего осуществляется редирект на главную страницу.

При нажатии на крестик (в верхнем правом углу) происходит редирект на главную без сохранения (advanced: сохранить в localStorage и потом вытащить оттуда).

### Страница просмотра

На странице просмотра `/posts/{id}` отображается краточка просмотра:

- Имя, дата, текст поста, подробнее (редактировать, удалить)

При клике на кнопку "Удалить" происходит удаление поста (DELETE на адрес http://localhost:7777/posts/{id}), после чего осуществляется редирект на главную страницу.

При клике на кнопку "Редактировать" карточка просмотра заменяется карточкой редактирования:

На карточке редактирования:
* кнопка сохранить приводит к сохранению поста (POST на адрес http://localhost:7777/posts body: `{"id": не 0, "content": "То, что введено в поле ввода"}`) и  отображению карточки просмотра (с обновлёнными данными).
* кнопка крестик приводит к возврату к карточки просмотра.

**Важно**:

1. React Router позволяет использовать регулярные выражения в роутах: https://github.com/pillarjs/path-to-regexp/tree/v1.7.0