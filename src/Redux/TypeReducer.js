const initState = "text";
const TypeReducer = (state = initState, action) => {
  if (
    action.type === "text" ||
    action.type === "videos" ||
    action.type === "news" ||
    action.type === "images" ||
    action.type === "shopping"
  )
    return action.type;

  return state;
};

export default TypeReducer;
