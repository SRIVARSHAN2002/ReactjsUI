import React, { Component } from "react";
import "./App.css";
import DynamicForm from './components/DynamicForm';
class App extends Component {
  state = {
    data: [
       
    ]
   }

onSubmit =(model) =>{
 this.setState({
  data:[model,...this.state.data]
})


 }
 
  render() {
    return(
     <div className="App">
     <DynamicForm className="app"
       title="Registration"
       model={[

     {key:"firstname",label:"Firstname",props:{required:true}},
     {key:"lastname",label:"lastname",props:{required:true} },

     {key:"email",label:"Email",type:"email",props:{required:true}},                                                                                                                                                                                                                                                                                                  

     {key:"password",label:"password",type:"password",props:{required:true}},
          {key:"password2",label:"password",type:"password",props:{required:true}},



        ]}
        onSubmit ={(model) => {this.onSubmit(model)}}

     />


     <pre style={{width:"300px"}}>
           {JSON.stringify(this.state.data)}

     </pre>
     </div>



      );
    }
  }
export default App;
