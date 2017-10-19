const test = (state = false, action) => {
  switch (action.type) {
    case 'TOGGLE_TEST':
      return !state;
    default:
      return state;
  }
};

export default test;
