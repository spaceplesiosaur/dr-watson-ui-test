import { messages } from './messages'

describe('messages reducer', () => {
  it('should return the initial state if it doesnt know the action type', () => {
    expect(messages([], {type: undefined, message: {message: "stuff", isUser: true}})).toEqual([])
  })

  it('should return the correct state if the type is ADD_MESSAGE', () => {
    expect(messages([], {type: 'ADD_MESSAGE', message: {message: "stuff", isUser: true}})).toEqual([{message: "stuff", isUser: true}])
  })

  it('should return the correct state if the type is CLEAR_MESSAGES', () => {
    expect(messages([], {type: 'CLEAR_MESSAGES'})).toEqual([])
  })
})
