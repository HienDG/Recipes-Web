import { useCallback, useReducer } from "react";
import { SEARCH_QUERIES } from "../components/utils/fake-data";

const regex = /\D\b/g;

const isValidate = (value) => {
  const isValid = value.match(regex) ? true : false;
  return isValid;
};

const initialState = {
  value: "",
  isTouched: false,
};

const searchReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        value: action.value,
        isTouched: state.isTouched,
      };
    case "BLUR":
      return {
        value: state.value,
        isTouched: true,
      };
    case "ENTER": {
      return {
        value: state.value,
        isTouched: state.isTouched,
      };
    }
    case "RESET":
    default:
      return initialState;
  }
};

const useSearch = () => {
  const [state, dispatch] = useReducer(searchReducer, initialState);
  const isValid = useCallback(isValidate(state.value), [state.value]);
  //   const filterValue = SEARCH_QUERIES.filter((item) => item.includes(isValid ? state.value : null));

  const inputChangeHandler = (event) => {
    dispatch({ type: "CHANGE", value: event.target.value });
  };

  const resetInput = () => {
    dispatch({ type: "RESET" });
  };

  const handleBlur = () => {
    dispatch({ type: "BLUR" });
  };

  return {
    state: {
      ...state,
      error: !isValid,
      // filter: filterValue,
      // isFloat: isValid && !state.isTouched,
      // isEnter: state.isEnter,
    },
    event: {
      change: inputChangeHandler,
      reset: resetInput,
      blur: handleBlur,
    },
  };
};

export default useSearch;
