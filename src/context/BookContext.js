import React, { createContext, useContext, useReducer } from "react";

export const BookContext = createContext();

const initialBookState = {
  author: "",
  title: "",
  condition: "",
  location: "",
  category: "",
  images: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TITLE":
      {
        return {
          ...state,
          title: action.value,
        };
      }
      break;
    case "ADD_AUTHOR":
      {
        return {
          ...state,
          author: action.value,
        };
      }
      break;
    case "ADD_CONDITION":
      {
        return {
          ...state,
          condition: action.value,
        };
      }
      break;
    case "ADD_CATEGORY":
      {
        return {
          ...state,
          category: action.value,
        };
      }
      break;
    case "ADD_LOCATION":
      {
        return {
          ...state,
          location: action.value,
        };
      }
      break;
    case "ADD_IMAGES":
      {
        return {
          ...state,
          images: [...state.images, action.value],
        };
      }
      break;
      case "CLEAN_STATE":
        {
          return {
            author: "",
            title: "",
            condition: "",
            location: "",
            category: "",
            images: [],
          };
        }
        break;
    default:
      return state;
  }
};

export const BookContextProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialBookState);
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {props.children}
    </BookContext.Provider>
  );
};
