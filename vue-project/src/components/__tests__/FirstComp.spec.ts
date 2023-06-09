import { describe, it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import FirstComp from '../FirstComp.vue'

describe('HelloWorld', () => {
  it('snapshot UI testing', () => {
    const wrapper = mount(FirstComp,{});
    expect(wrapper.text()).toMatchSnapshot()
  })
  it('renders properly', () => {
    const wrapper = mount(FirstComp, { props: { name: 'Hello Vitest' } })
    expect(wrapper.text()).toContain('Hello Vitest')
  })
})
