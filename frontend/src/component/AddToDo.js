import React , {Component} from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateTodo extends Component{

    constructor(props){
        super(props);

        this.onChangeuserID= this.onChangeuserID.bind(this);
        this.onChangetitel= this.onChangetitel.bind(this);
        this.onChangeDescription= this.onChangeDescription.bind(this);
        this.onChangeDate = this.onChangeDate.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            
            userID : 0,
            description : '',
            titel : '',
            date : new Date()
        }
    }

    onChangeuserID(e){
        this.setState({
            userID: e.target.value
        });
    }

    onChangetitel(e){
        this.setState({
            titel : e.target.value
        });
    }

    onChangeDescription(e){
        this.setState({
            description : e.target.value
        });
    }

    onChangeDate(date){
        this.setState({
            date : date
        });
    }

    onSubmit(e){

        e.preventDefault()

        const AddToDo = {
            
            userID : (this.state.userID),
            description : this.state.description,
            titel : this.state.titel,
            date : this.state.date
        }
        axios.post("http://localhost:7882/todo/add",AddToDo)
        .then((AddToDo)=>{
            alert("Todo Add")
            console.log(AddToDo.data)
        })
        .catch((err)=> console.log(err));
       
        
        window.location = "/";
    }

    render(){
        return(
            <div className="container">
                
                <form onSubmit = {this.onSubmit}>
                  

                    <div className="">
                        <label>UserID:</label>
                        <input 
                            type="form-group"
                            className="form-control"
                            value={this.state.userID}
                            onChange = {this.onChangeuserID}
                        ></input>
                    </div>
                    

                    <div className="form-group">
                        <label>Titel:</label>
                        <input 
                            type="text"
                            className="form-control"
                            required
                            value = {this.state.titel}
                            onChange = {this.onChangetitel}
                        ></input>
                    </div>


                    <div className="form-group">
                        <label>Description:</label>
                        <input 
                            type="text"
                            className="form-control"
                            required
                            value = {this.state.description}
                            onChange = {this.onChangeDescription}
                        ></input>
                    </div>

                    

                    <div className="form-group">
                        <label>Date:</label><br></br>
                        <DatePicker
                            selected = {this.state.date}
                            onChange = {this.onChangeDate}
                        ></DatePicker>
                    </div>

                    <div className="form-group">
                        <input 
                            type="submit"
                            className=" btn btn-primary"
                            value = "Create Todo "
                        ></input>
                    </div>

                </form>
            </div>
        )
    }
}
