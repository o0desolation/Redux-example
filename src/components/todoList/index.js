import React, { Component } from 'react'

class TodoList extends Component {
    render() {
        const { inputValue, changeInputValue, submit, deleteItem, list } = this.props    //from container
        return (
            <div>
                <div>
                    <input value={inputValue} onChange={changeInputValue}></input>
                    <button onClick={submit} value={inputValue}>Submit</button>
                </div>
                <ul>
                    {list.map((i, index) =>
                        <li id={i.id} key={index} onClick={deleteItem}>{i.item}</li>
                    )}
                </ul>
            </div>
        )
    }
}

export default TodoList