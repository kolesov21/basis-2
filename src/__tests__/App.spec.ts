import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

describe('App', () => {
  it('рендерит заголовок', () => {
    expect(mount(App).get('h1').text()).toBe('basis-2')
  })
})
