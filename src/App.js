import React from 'react';
import './App.css';

class App extends React.Component{
  constructor(){
    super()
    this.state={
      tab:[{title:'Name',id:Math.random(),IsDone:false},
           {title:'Age',id:Math.random(),IsDone:false},
           {title:'Adresse',id:Math.random(),IsDone:false},
           {title:'Email',id:Math.random(),IsDone:false}
          ],
          textT:" "

          }
  }
  handleAdd=()=> this.setState({tab : [...this.state.tab,{title:this.state.textT,id:Math.random(),IsDone:true}]})
  handleDelete=(a)=> this.setState({tab : this.state.tab.filter((el)=> el.id !== a)}) 
  handleEdit=(a)=> this.setState({tab : this.state.tab.map(el=> el.id === a ?{...el,IsDone : !el.IsDone} : el)})
  render(){
    return(
      <div>
        <h1>Challenge State</h1>
        {
          this.state.tab.map((el,i)=> 
          <div key={el.id}>
            <h2 className={el.IsDone && 'done'}>{el.title}</h2>
            <h2>{el.IsDone ? 'True' : 'False'}</h2>
            <button onClick={()=>this.handleDelete(el.id)}>Delete</button>
            <button onClick={()=>this.handleEdit(el.id)}>Done</button>
          </div>)
        }
        <br/>
        <div>
          <input type='text' onChange={(e)=> this.setState({textT : e.target.value})}/>
          <button onClick={this.handleAdd}>Add</button>
        </div>
        
      </div>
    )
  }
}
export default App


