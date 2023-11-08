const initState = "phone";
export default function reducer(state = initState, action) {
  //console.log(state);
  if (action.payload !== "" && state !== action.payload && action.payload)
    return action.payload;
  return state;
}
