import {connect} from 'react-redux' 
import TodoList from '../components/todoList' 
import {changeInputValueAction,submitAction,deleteAction,clearAction} from '../actions/todoListAction' 

const mapStateToProps = (state) => {
    return {
        inputValue:state.inputValue,   //these keys will be the component props
        list:state.list
    }
}

const mapDispatchToProps = (dispatch) =>{
    return{
        changeInputValue:(e)=>{                                 //these functions will also be the component props
            dispatch(changeInputValueAction(e.target.value))
        },
        submit:(e)=>{
            dispatch(submitAction(e.target.value))
            dispatch(clearAction())
        },
        deleteItem:(e)=>{
            dispatch(deleteAction(e.target.id))
        }
    }

}


export default connect(mapStateToProps,mapDispatchToProps)(TodoList)