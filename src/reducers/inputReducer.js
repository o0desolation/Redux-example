const inputvalue=''

const inputReducer = (state = inputvalue, action)=>{
    switch(action.type){
        case "CHANGE_INPUT_VALUE":
            return action.value
        case "CLEAR":
            return ''
        default:
            return state
    } 
}

export default inputReducer