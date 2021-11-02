import getters from '../../src/store/getters.js'

describe('gettersテスト', () => {
  const state = {
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
  it('type＝Allの時', () => {
    expect(getters.displayTodos(state)).toMatchObject(state.todos)
  })
  it('type=Workingの時', () => {
    state.type = 'Working'
    const displayTodos = [{
      name: '散歩',
      completed: false,
      id: 0
    }]
    expect(getters.displayTodos(state)).toMatchObject(displayTodos)
  })
  it('type=Doneの時', () => {
    state.type = 'Done'
    const displayTodos = [{
      name: '掃除',
      completed: true,
      id: 1
    }]
    expect(getters.displayTodos(state)).toMatchObject(displayTodos)
  })
})