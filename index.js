import React from "react";
import ReactDOM from "react-dom";
import "./form.css";

export default class DynamicForm extends React.Component {
   state={

   }


    constructor(props){
        super(props);
    }

    onSubmit =(e) =>{
      e.preventDefault();
      if(this.props.onSubmit) this.props.onSubmit(this.state);
    }

    onChange =(e,key) => {
      this.setState({
        [key]:this[key].value
        
      })
    }
   
   renderForm =() =>{
    let model =this.props.model;
    let formUI=model.map((m) =>{


      let key=m.key;
      let type=m.type || "text";"password";
      let props=m.props ||{};

      return(
        <div key={key} className="form-group">
        <label className="form-label">
        
        {m.label}
        </label>


          <input {...props}
          ref={(key)=>{this[m.key]=key}}
           type={type}
          key={m.key}
          onChange={(e)=>{this.onChange(e,key)}}
          />
         


        </div>

      )

    });
    return formUI;
   }

    render(){
      return(
       
       <div className={this.props.className}>
       <h2>Registration Form</h2>

       <form  onSubmit={(e)=>{this.onSubmit(e)}}>
       
            {this.renderForm()}

         <div className="form-group">

           <button type="submit">Register</button>
         </div>

       </form>
       </div>
        )
    }



   }