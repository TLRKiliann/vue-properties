import { describe, test, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import ThirdComp from '../ThirdComp.vue'

describe('ThirdComp', () => {
  test('snapshot UI testing', () => {
    const wrapper = mount(ThirdComp,{});
    expect(wrapper.text()).toMatchSnapshot()
  })
  test('click button', async () => {
    const wrapper = mount(ThirdComp)
    await wrapper.find('button').trigger('click')
  })
})