
export default function reducer(state, action) {
  switch (action.type) {
    case "LOGIN":
      console.log('Logged in');
      console.log(state);
      return { ...state, loggedIn: true }
  
    case "LOGOUT":
      console.log('logged out');
        return { ...state, loggedIn: false }
    default:
      return state
  }
  
};
