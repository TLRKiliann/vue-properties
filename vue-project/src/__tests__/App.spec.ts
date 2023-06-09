import { it, expect } from 'vitest'

import { mount } from '@vue/test-utils'
import App from '../App.vue'

it('snapshot UI testing', () => {
    const wrapper = mount(App,{});
    expect(wrapper.text()).toMatchSnapshot()
})