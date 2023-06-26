/* What's Reducer?
 * fn that takes in state and action as args
 * must return state based on the action type that is dispatched
 */

/* action
  ----
    * is an object
    * can have 2 properties
    * must have type property
    * payload can be another property
*/

const todoReducer = (state = [], action) => {
  console.log('INSIDE todoReducer');

  switch (action.type) {
  case 'ADD_TODO':
    return [...state, action.payload];

  case 'LIST_TODOS':
    return action.payload;

  default:
    return state;
  }
};

export default todoReducer;
