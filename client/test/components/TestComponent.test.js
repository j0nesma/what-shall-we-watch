import { mount } from '@vue/test-utils'
import '@testing-library/jest-dom'
import Test from 'components/Test.vue'

describe('Component', () => {
  test('is a Vue instance', () => {
    const wrapper = mount(Test);
    expect(wrapper.get('span').element).toBeTruthy();
    expect(wrapper.find('span').element).toBeVisible();
    expect(wrapper.find('span').element.innerHTML).toBe('Testing');
  })
})