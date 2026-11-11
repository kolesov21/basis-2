# basis-2

Площадка для выполнения тестовых заданий.

## Стек

Vue 3 (Composition API, `<script setup>`), TypeScript в строгом режиме, VueUse, Vite, Vitest,
ESLint + oxlint, Prettier.

## Требования

Node.js ≥ 24.12, npm.

## Установка

```sh
npm install
```

## Команды

| Команда                | Что делает                           |
| ---------------------- | ------------------------------------ |
| `npm run dev`          | dev-сервер Vite                      |
| `npm run build`        | проверка типов и production-сборка   |
| `npm run preview`      | локальный просмотр production-сборки |
| `npm run type-check`   | проверка типов (`vue-tsc`)           |
| `npm run lint`         | oxlint + ESLint, только проверка     |
| `npm run lint:fix`     | oxlint + ESLint с автоисправлением   |
| `npm run format`       | форматирование Prettier              |
| `npm run format:check` | проверка форматирования              |
| `npm test`             | юнит-тесты однократно                |
| `npm run test:unit`    | юнит-тесты в режиме наблюдения       |

## Git

Сообщения коммитов — [Conventional Commits](https://www.conventionalcommits.org/) на русском
(`feat(cart): добавить счётчик количества`), ветки — `<type>/<kebab-описание>`.
Соблюдение проверяют хуки husky (commitlint и имя ветки). Подробнее — [`.claude/rules/git.md`](.claude/rules/git.md).
