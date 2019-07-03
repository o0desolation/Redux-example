const list = []
let idCouter = 0

const listReducer = (state = list ,action)=>{
    switch(action.type){
        case "SUBMIT":{
            return [
                ...state,
                {
                id:idCouter++,
                item:action.item
                }
            ]
        }
            
        case "DELETE":{
            let index
            for (index = 0; index < state.length; index++) {
                if(action.id === state[index].id.toString())    //typeof(action.id)-----String
                    break                                       //typeof(list[x].id)-----number
            }
            state.splice(index,1)
            return [
                ...state
            ]
        }

        default:
            return state
    }
}

export default listReducer