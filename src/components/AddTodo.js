import React from 'react'

class AddTodo extends React.Component {

    state = {
        title: ''
    }


    OnChangeX = (e) => {
        this.setState(
            {
                title: e.target.value
            }
        )
    }

    OnSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title);
        this.setState({
            title: ''
        })

    }


    render() {
        return (
            <form onSubmit={this.OnSubmit} style={{ display: 'flex' }}>
                <input
                    type="text"
                    name="title"
                    style={{ flex: '10', padding: '5px' }}
                    placeholder="Enter title"
                    value={this.state.title}
                    onChange={this.OnChangeX}
                />

                <input
                    type="submit"
                    value="Submit"
                    className="btn"
                    style={{ flex: '1' }}


                />
            </form>
        )
    }

}

export default AddTodo;