import './App.css';
import Header from './component/Header';
import AddToDo from './component/AddToDo';
import AllToDo from './component/AllToDo';
//import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div>
      <Header/>
      <AddToDo/>
      <AllToDo/>
    </div>
    
   
  );
}

export default App;
