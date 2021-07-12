import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoInput from '../../src/components/TodoInput.vue'



const localVue = createLocalVue()
localVue.use(Vuex)


describe('TodoInput.vue', () => {
  let store
  let actions
  beforeEach(() => {
    actions = {
      addTodo: jest.fn(),
    }
    store = new Vuex.Store({
      actions
    })

  })
  it('何も入力しなかった時の追加ボタン動作確認', () => {
    const wrapper = shallowMount(TodoInput, { store, localVue })
    const button = wrapper.find('#add')
    button.trigger('click')
    expect(actions.addTodo).not.toHaveBeenCalled()
  })
  it('入力後の追加ボタン確認', () => {
    const wrapper = shallowMount(TodoInput, { store, localVue })
    const text = wrapper.find('#textbox')
    const button = wrapper.find('#add')
    text.setValue('散歩')
    button.trigger('click')
    expect(actions.addTodo).toHaveBeenCalled()
  })
})