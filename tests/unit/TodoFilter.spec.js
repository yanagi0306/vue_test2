import { shallowMount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import TodoFilter from '@/components/TodoFilter.vue'

const localVue = createLocalVue()

localVue.use(Vuex)

describe('TodoFilter.vue', () => {
  let store
  let actions


  beforeEach(() => {
    actions = {
      changeFilter: jest.fn()
    }
    store = new Vuex.Store({

      actions
    })

  })

  it('Allのradoボタン確認', () => {
    const wrapper = shallowMount(TodoFilter, { store, localVue })
    const All = wrapper.find('#All')
    All.trigger('click')
    expect(actions.changeFilter).toHaveBeenCalled()
  })
  it('Doneのradoボタン確認', () => {
    const wrapper = shallowMount(TodoFilter, { store, localVue })
    const Done = wrapper.find('#Done')
    Done.trigger('click')
    expect(actions.changeFilter).toHaveBeenCalled()
  })
  it('Workingのradoボタン確認', () => {
    const wrapper = shallowMount(TodoFilter, { store, localVue })
    const Working = wrapper.find('#Working')
    Working.trigger('click')
    expect(actions.changeFilter).toHaveBeenCalled()
  })
})