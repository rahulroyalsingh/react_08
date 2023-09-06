import React,{Component} from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component
{

constructor()
{
  super();
  this.state={
    data:"rahul"
  }
}
mango()
{
  alert("mango")
}
render()
{
 return (
    <div className="App">
      <h1>{this.state.data}</h1>
     <button onClick={()=>this.mango()}>Update Data</button>
    </div>
  );
}
}
export default App;
