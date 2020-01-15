export const messages = (state = [], action) => {
  switch(action.type) {
    case 'ADD_MESSAGE':
      return [...state, {message: action.message, isUser: action.isUser}];
    case 'CLEAR_MESSAGES':
      return [];
    default:
      return state;
  }
}
