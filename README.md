# basis-2

Площадка для выполнения тестовых заданий.

## Стек

Vue 3 (Composition API, `<script setup>`), TypeScript в строгом режиме, VueUse, Tailwind CSS, Vite, Vitest,
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

## Стили

Tailwind CSS 4 подключён через `@tailwindcss/vite`. Единая точка входа стилей —
`src/styles/main.css`, импортируемая в `src/main.ts`.

Основной способ стилизации — utility-классы в шаблонах Vue. Общие токены задаются через
`@theme`, локальный CSS для исключений — через `<style scoped>`.
Prettier сортирует классы с помощью `prettier-plugin-tailwindcss`: `npm run format`
исправляет порядок, `npm run format:check` проверяет его.

Подробные соглашения — [`.agents/rules/styles.md`](.agents/rules/styles.md).

## Git

Сообщения коммитов — [Conventional Commits](https://www.conventionalcommits.org/) на русском
(`feat(cart): добавить счётчик количества`), ветки — `<type>/<kebab-описание>`.
Соблюдение проверяют хуки husky (commitlint и имя ветки). Подробнее — [`.agents/rules/git.md`](.agents/rules/git.md).

## Работа с Codex

Открой корень проекта в Codex. Инструкции проекта находятся в [AGENTS.md](AGENTS.md):
порядок работы, проверки и ссылки на правила стека, стилей и Git.

Локальные навыки находятся в `.agents/skills/`:

- `grilling` — согласование задачи перед изменениями;
- `frontend-design` — проектирование интерфейса, если нет макета;
- `karpathy-guidelines` — принципы реализации;
- `post-task-review` — трёхшаговое ревью перед завершением задачи.

В Codex CLI и расширении IDE навык можно явно вызвать через `$grilling`, `$frontend-design`,
`$karpathy-guidelines` или `$post-task-review`. Если текущая сессия была открыта до переноса
инструкций, начни новую сессию из корня проекта.

Правила из `.agents/rules/` читаются по указанию в `AGENTS.md`.
Глобальные настройки Codex для этого проекта менять не требуется.

Форматы: [инструкции AGENTS.md](https://learn.chatgpt.com/docs/agent-configuration/agents-md)
и [навыки Codex](https://learn.chatgpt.com/docs/build-skills).
