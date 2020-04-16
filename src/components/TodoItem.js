import React from 'react';
import PropTypes from 'prop-types'

class TodoItem extends React.Component {


    getstyle = () => {

        return {
            background: '#f4f4f4',
            padding:'10px',
            borderBottom :'1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }





    render() {

        const {id,title} = this.props.todo;

        return (
            <div style={this.getstyle()}>
                <h1>
                    <input type="checkbox" onChange={this.props.markComplete.bind(this,id)} /> {' '}
                    {title}
                    <button onClick={this.props.delTodo.bind(this,id)} style={btnStyle} >X</button>
                </h1>
            </div>)
    }

}

TodoItem.Prototype = {
    todo: PropTypes.object.isRequired
}


const btnStyle = {
    background: '#ff0000',
    color:'#fff',
    border:'none',
    padding:'5px 9px',
    borderRadius:'50%',
    cursor:'pointer',
    float:'right'
}


export default TodoItem;