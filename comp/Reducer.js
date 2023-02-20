import * as Types from './Types';

const initialState = {
    todoList:[]
};

const reducer = (state = initialState, actions ) => {
    switch(actions.type){
            case Types.ADD_TODO:
                return [
                    ...state.todoList,
                    action.payload
                ]
    }
}

export default reducer;