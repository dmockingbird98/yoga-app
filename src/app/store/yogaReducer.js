import yogaAction from "./yogaAction";

// const initialState = {
//     data: "1",
// }

export default function yogaReducer(state={},action)
{   console.log(action.payload);
    if(yogaAction.TYPES.ADD_DATA)
    {
        return {
            ...state,
            data:action.payload
        }
    }
    return state;
}