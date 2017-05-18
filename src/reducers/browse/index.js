
const initialState = {};

export default function(state = initialState, action) {
  switch (action) {
    case true:
      return mergeActivities(state, action.activities, action.genre);
  }
  return state;
}
