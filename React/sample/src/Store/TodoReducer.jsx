var InitialValues={
    todo:['rent','electricity','groceries']
}
function TodoReducer(state=InitialValues,action){
    console.log(action)
   if(action.type=='add'){
    return {...state,todo:[...state.todo,action.payload]}
   }
    return state;
}
export default TodoReducer;