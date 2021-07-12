import { shallowMount, createLocalVue } from "@vue/test-utils";
import TodoDisplay from '@/components/TodoDisplay.vue'
import Vuex from 'vuex'


const localVue = createLocalVue()
localVue.use(Vuex)

describe('TodoDisplay.vue', () => {
  let actions
  let state
  let store
  let getters
  let wrapper
  beforeEach(() => {
    state = {
      todos: [{
        name: '散歩',
        completed: false,
        id: 0
      }, {
        name: '掃除',
        completed: true,
        id: 1
      }],
      type: 'All'
    }

    actions = {
      toggleTodos: jest.fn(),
      del: jest.fn()
    }
    getters = {
      displayTodos(state) {
        if (state.type == 'All') {
          return state.todos
        } else if (state.type == 'Working') {
          return state.todos.filter(todo => {
            return todo.completed == false
          })
        } else if (state.type == 'Done') {
          return state.todos.filter(todo => {
            return todo.completed == true
          })
        }
      }
    }
    store = new Vuex.Store({
      state,
      actions,
      getters
    })
  })

  describe('ラジオボタンが全ての時', () => {
    beforeEach(() => {
      wrapper = shallowMount(TodoDisplay, { store, localVue })
    })
    it('表示確認', () => {
      expect(wrapper.find('.working').exists()).toBe(true)
      expect(wrapper.find('.done').exists()).toBe(true)
    })
    it('ボタン動作確認(作業中)', () => {
      wrapper.find('.working').trigger('click')
      expect(actions.toggleTodos).toHaveBeenCalled()
    })
    it('ボタン動作確認(完了)', () => {
      wrapper.find('.done').trigger('click')
      expect(actions.toggleTodos).toHaveBeenCalled()
    })
    it('ボタン動作確認(削除)', () => {
      wrapper.findAll('.del').at(0).trigger('click')
      expect(actions.del).toHaveBeenCalled()
    })
  })

  describe('ラジオボタンが作業中の時', () => {
    beforeEach(() => {
      state.type = 'Working'
      wrapper = shallowMount(TodoDisplay, { store, localVue })
    })
    it('表示確認', () => {
      expect(wrapper.find('.working').exists()).toBe(true)
      expect(wrapper.find('.done').exists()).toBe(false)
    })
    it('ボタン動作確認(作業中)', () => {
      wrapper.find('.working').trigger('click')
      expect(actions.toggleTodos).toHaveBeenCalled()
    })
    it('ボタン動作確認(削除)', () => {
      wrapper.findAll('.del').at(0).trigger('click')
      expect(actions.del).toHaveBeenCalled()
    })
  })

  describe('ラジオボタンが完了の時', () => {
    beforeEach(() => {
      state.type = 'Done'
      wrapper = shallowMount(TodoDisplay, { store, localVue })
    })
    it('表示確認', () => {
      expect(wrapper.find('.working').exists()).toBe(false)
      expect(wrapper.find('.done').exists()).toBe(true)
    })
    it('ボタン動作確認(完了)', () => {
      wrapper.find('.done').trigger('click')
      expect(actions.toggleTodos).toHaveBeenCalled()
    })
    it('ボタン動作確認(削除)', () => {
      wrapper.findAll('.del').at(0).trigger('click')
      expect(actions.del).toHaveBeenCalled()
    })
  })
})
