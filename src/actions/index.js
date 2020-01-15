export const createUser = user => ({
  type: 'CREATE_USER',
  user
});

export const removeUser = () => ({
  type: 'REMOVE_USER'
});

export const hasErrored = errorMsg => ({
  type: 'HAS_ERRORED',
  errorMsg
});

export const addMessage = (newMessage, boolean) => ({
  type: 'ADD_MESSAGE',
  message: newMessage,
  isUser: boolean
});

export const clearMessages = () => ({
  type: 'CLEAR_MESSAGES'
});
