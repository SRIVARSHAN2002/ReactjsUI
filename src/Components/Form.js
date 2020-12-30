import React, { Component } from 'react'
import './CSS/todo.css'



class Form extends Component {
    constructor(props) {
        super(props)

        this.state = {

            firstName: "",
            lastName: "",
            email:"",
            password: "",
            confirmpassword: "",
            yearpassedout:"",
            monthpassedout:"",
            

        }
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    

    firsthandler = (event) => {
        this.setState({
            firstName: event.target.value
        })
    }
    lasthandler = (event) => {
        this.setState({
            lastName: event.target.value
        })
    }
    emailhandler = (event)=>{
         this.setState({
         email: event.target.value
         })
    
    }
    passwordhandler = (event) => {
        this.setState({
            password: event.target.value
        })
    }
    confirmpasswordhandler = (event) => {
        this.setState({
            confirmpassword: event.target.value
        })
    }

    yearpassedouthandler = (event) => {
        this.setState({
            yearpassedout: event.target.value
        })
    }
    monthpassedouthandler = (event) => {
        this.setState({
            monthpassedout: event.target.value
        })
    }
    
 
   handleSubmit = (event) => {
 
        document.write(JSON.stringify(this.state));
       
     event.preventDefault()
        
   

}


    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <h2>Registration form</h2>
                    <label class="one">FirstName</label> <input type="text" required="true" value={this.state.firstName} onChange={this.firsthandler}  />
                    <label class="two">LastName </label> <input type="text" required="true" value={this.state.lastName} onChange={this.lasthandler}   /><br /><br/>
                    <label class="three">Email </label> <input type="email" required="true" value={this.state.email} onChange={this.emailhandler}  /><br /><br/>
                    
                    <label class="one">Password</label> <input type="password" required="true" value={this.state.password} onChange={this.passwordhandler}  />
                     <label class="six">ConfirmPassword</label> <input type="password" required="true"  value={this.state.confirmpassword} onChange={this.confirmpasswordhandler}   /><br /><br/>
                    <label class="four">Year passed out</label><select onChange={this.yearpassedouthandler} defaultValue="--Select--">
                        <option defaultValue>--Select--</option>
                        <option value="2020">2020</option>
                        <option value="2021">2021</option>
                        <option value="2022">2022</option>
                        <option value="2023">2023</option>
                    </select> 
                    <label class="five">Month passed</label><select onChange={this.monthpassedouthandler} defaultValue="--Select--">
                      <option defaultValue>--Select--</option>
                        <option value="january">january</option>
                        <option value="February">Febrauary</option>
                        <option value="March">March</option>
                        <option value="April">April</option>
                         <option value="May">May</option>
                        <option value="June">June</option>
                        <option value="July">July</option>
                        <option value="August">August</option>
                         <option value="September">september</option>
                        <option value="october">october</option>
                        <option value="November">November</option>
                        <option value="December">December</option>
                    </select><br /><br/>
                    <input type="submit" value="Register"  />
                                   
                </form>
                

    

            </div>
            
        )
    }
}

export default Form
