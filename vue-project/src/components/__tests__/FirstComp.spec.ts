import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FirstComp from '../FirstComp.vue'

describe('HelloWorld', () => {
  it('renders properly', () => {
    const wrapper = mount(FirstComp, { props: { msg: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
