import * as actionTypes from "../actions/actions";

const initialState = {
  results: []
};

const resultReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // Important to use concat() instead of push(), push will manipulate original array
        results: state.results.concat({ id: new Date(), value: action.result })
      };
    case actionTypes.DELETE_RESULT:
      // Can be done this way also
      // const id =  2;
      // const newArray = [...state.results];
      // newArray.splice(id, 1)

      const newArray = state.results.filter(
        result => result.id !== action.resultElId
      );
      return {
        ...state,
        results: newArray
      };
  }
  return state;
};

export default resultReducer;
