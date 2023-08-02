var InitialValues={
    todo:['rent','electricity','groceries'],
    sampl:['hello']
}
function TodoReducer(state=InitialValues,action){
    console.log('todo reducer')
   if(action.type=='add'){
        return {...state,todo:[...state.todo,action.payload]}
   }
   if(action.type=='delete'){
        state.todo.splice(action.ind,1)
        return {...state};
   }
    return state
}
export default TodoReducer;