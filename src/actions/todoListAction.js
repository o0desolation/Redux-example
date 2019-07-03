import {CHANGE_INPUT_VALUE,SUBMIT,DELETE,CLEAR} from './actionType' 

export const changeInputValueAction = (value) =>{
    return {
        type:CHANGE_INPUT_VALUE,
        value
    }
}

export const submitAction = (item) =>{
    return {
        type:SUBMIT,
        item
    }
}

export const deleteAction = (id) =>{
    return {
        type:DELETE,
        id
    }
}

export const clearAction = ()=>{
    return{
        type:CLEAR
    }
}