import mutations from '../../src/store/mutations.js'

let state
describe('mutationテスト', () => {
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
  })
  it('addTodoテスト', () => {
    const todoName = '料理'
    mutations.addTodo(state, todoName)
    expect(state.todos).toMatchObject([{
      name: '散歩',
      completed: false,
      id: 0
    }, {
      name: '掃除',
      completed: true,
      id: 1
    }, {
      name: '料理',
      completed: false,
      id: 2
    }])
  })
  it('toggleTodosテスト', () => {
    mutations.toggleTodos(state, 0)
    expect(state.todos[0].completed).toBe(true)
  })
  it('changeFilterテスト', () => {
    mutations.changeFilter(state, 'Working')
    expect(state.type).toBe('Working')
  })
  it('delテスト', () => {
    const todos = [{
      name: '掃除',
      completed: true,
      id: 0
    }]
    mutations.del(state, 0)
    expect(state.todos).toMatchObject(todos)
  })
})