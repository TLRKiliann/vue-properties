import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import SecondComp from '../SecondComp.vue'

describe('SecondComp', () => {
  test('snapshot UI testing', () => {
    const wrapper = mount(SecondComp,{});
    expect(wrapper.text()).toMatchSnapshot()
  })
  test('renders properly', () => {
    const wrapper = mount(SecondComp, { props: { firstName: 'Clark' , lastName: 'Kent'} })
    expect(wrapper.text()).toContain('Clark Kent')
  })
  test('click button', async () => {
    const wrapper = mount(SecondComp)
    await wrapper.find('button').trigger('click')
  })
})
