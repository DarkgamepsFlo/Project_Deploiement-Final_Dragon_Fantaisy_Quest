import { shallowMount } from '@vue/test-utils'
import HelloWorld from '@/components/HelloWorld.vue'

describe('HelloWorld.vue', () => {
  it('renders props.msg when passed', () => {
    const msg = 'new message'
    const wrapper = shallowMount(HelloWorld, {
      props: { msg }
    })

    // Vérifie que le composant est rendu
    expect(wrapper.exists()).toBe(true);

    // Vérifie que le texte rendu correspond à la prop 'msg'
    expect(wrapper.text()).toMatch(msg);
  })
})