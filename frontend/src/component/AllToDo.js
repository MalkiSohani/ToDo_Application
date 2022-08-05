
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const ToDo = (props) => (
    <tr>
        <td>{props.todo.userID}</td>
        <td>{props.todo.titel}</td>
        <td>{props.todo.description}</td>
        <td>{props.todo.date.substring(0, 10)}</td>
        <td>
            <Link to={"/edit/" +props.todo._id}>edit</Link> | <a href="#" onClick={() => {props.deleteToDo(props.todo._id) }}>delete</a>
        </td>
    </tr>
)

export default class ToDoList extends Component {
    constructor(props) {
        super(props);

        this.deleteToDo = this.deleteToDo.bind(this)

        this.state = { todo: [] };
    }

    componentDidMount() {
        axios.get("http://localhost:8070/todo/")
            .then(response => {
                this.setState({ exercises: response.data })
            })
            .catch((error) => {
                console.log(error);
            })
    }

    deleteToDo(id) {
        axios.delete("http://localhost:8070/todo/" + id)
            .then(response => { console.log(response.data) });

        this.setState({
            todo: this.state.todo.filter(el => el._id !== id)
        })
    }

    todoList() {
        return this.state.todo.map(currenttodo => {
            return <ToDo todo={currenttodo} deleteToDo={this.deleteToDo} key={currenttodo._id} />;
        })
    }

    render() {
        return (
            <div className="container">
                <h3>All ToDos</h3>
                <table className="table table-striped table-dark">
                    <thead className="thead-dark">
                        <tr>
                            <th>UserID</th>
                            <th>Titel</th>
                            <th>Description</th>
                            <th>Date</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.todoList()}
                    </tbody>
                </table>
            </div>
        )
    }
}
