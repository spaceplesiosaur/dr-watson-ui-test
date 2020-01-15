import {addMessage, clearMessages} from './index.js';
// import * as actions from './actions.test.js'

describe('actions', () => {
  it('should have a type of ADD_MESSAGE', () => {
    const mockActionPayload = "I am scared"
    const expected = {type: "ADD_MESSAGE", message: mockActionPayload, isUser: true}

    expect(addMessage(mockActionPayload, true)).toEqual(expected)
  })

  it('should have a type of CLEAR_MESSAGES', () => {
    const expected = {type: "CLEAR_MESSAGES"}

    expect(clearMessages()).toEqual(expected)
  })
})
