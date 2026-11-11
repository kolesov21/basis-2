# Правила стека: Vue 3 + TypeScript

## TypeScript
- `strict: true` и дополнительно `noUncheckedIndexedAccess: true`.
- Без `any`: для неизвестных данных — `unknown` + сужение типа (type guard, схема валидации).
- Без `@ts-ignore`; `@ts-expect-error` — только с комментарием-причиной.
- Типы проверяются `npm run type-check` (`vue-tsc --build`).

## Компоненты
- Только `<script setup lang="ts">` и Composition API, без Options API.
- `defineProps` / `defineEmits` / `defineModel` — с type-based объявлением; значения по умолчанию через деструктуризацию props.
- Имена компонентов — PascalCase и многословные (`UserCard`, не `Card`).
- Один компонент — одна ответственность; логику, переиспользуемую или крупную, выносить в композаблы.
- Семантичная разметка и доступность по умолчанию: правильные теги, `label` у полей, фокус с клавиатуры.

## Состояние и композаблы
- Локальное состояние — `ref` / `computed`. Если понадобится общее состояние — добавить Pinia (setup stores).
- Композаблы — `useXxx` в `src/composables/`, возвращают объект из `ref`ов.
- **VueUse первым делом**: прежде чем писать свой композабл, проверить, нет ли готового в VueUse
  (`useStorage`, `useFetch`, `useDebounceFn`, `useThrottleFn`, `useEventListener`,
  `useIntersectionObserver`, `onClickOutside`, `useMediaQuery` и т.д.). Для v-model в своих компонентах — `defineModel`, а не `useVModel`.

## Качество
- Линтинг: oxlint + ESLint flat config (`eslint-plugin-vue` + `@vue/eslint-config-typescript`); форматирование — Prettier.
- Тесты — Vitest + `@vue/test-utils`, файлы в `__tests__/` рядом с кодом. Тестируется поведение, а не реализация.
