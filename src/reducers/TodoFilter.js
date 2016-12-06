const todoFilter = (state='SHOW_ALL', action) => {
  switch (action.type) {
    case 'CHECK':
      
      
    return action.filter;
    
    default:
      return state;
  }
}

export default todoFilter;