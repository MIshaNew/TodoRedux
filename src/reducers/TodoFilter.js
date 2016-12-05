const todoFilter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'CHECK':
      return action.filter
    return state;
    
    default:
      return state;
  }
}

export default todoFilter;