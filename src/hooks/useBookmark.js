import { useReducer, useCallback, useEffect } from "react";

import { uploadData } from "../components/utils/request";

const bookmarkReducer = (state, action) => {
  switch (action.type) {
    case "CHANGE":
      return {
        isSaved: !state.isSaved,
        data: action.data,
      };
    default:
      return {
        isSaved: false,
        data: null,
      };
  }
};

const retrieveData = (id) => {
  const data = JSON.parse(localStorage.getItem(id));
  return !!data ? data.isSaved : false;
};

const useBookmark = (id, tag) => {
  const [state, dispatch] = useReducer(bookmarkReducer, {
    data: localStorage.getItem(id) ? JSON.parse(localStorage.getItem(id)) : null,
    isSaved: retrieveData(id),
  });

  const addToBookmark = useCallback(
    (recipe) => {
      dispatch({ type: "CHANGE", data: { ...recipe } });
    },
    [id]
  );

  useEffect(() => {
    if (state.isSaved) {
      localStorage.setItem(id, JSON.stringify({ ...state.data, isSaved: true, tag }));
    }

    if (!state.isSaved) {
      localStorage.removeItem(id);
    }
  }, [state.isSaved]);

  useEffect(() => {
    const stored = {
      ...state.data,
    };

    uploadData(tag, id, stored, state.isSaved ? "PUT" : "DELETE").catch((err) => {
      console.log(err);
    });
  }, [state.isSaved]);

  return {
    ...state,
    event: addToBookmark,
  };
};
export default useBookmark;
