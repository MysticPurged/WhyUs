import React from 'react'
import axios from 'axios'
import {Button} from './Button'
import {Link} from 'react-router-dom'
import './ContactFrom.css'

class ContactForm extends React.Component {
    constructor(props){
        super(props);
        
        this.state = {
            fname: '',
            lname: '',
            email: '',
            message: '',
            mailSent:false,
            error:null
        }
    }

    handleSubmit(e){
        console.log('button')
        e.preventDefault();
        axios({
            method: "POST",
            url:"http://localhost:3002/send",
            data: this.state
        }).then((response)=>{
            if(response.data.status === 'success'){
               
                alert("Message sent");
                this.resetForm();
            }else if(response.data.status === 'fail'){
                alert("Message Failed to send");
            }
        })
    }

    resetForm(){
        this.setState({name: '', email: '' , message: ''})
    }

    render(){
        return (
            

            <div className="contact-form">
            
            <div>
            <div className="contact-row">    
            <div className="col">
            <div className="contact-content">
            <form action="/action_page.php">
            <label>Name</label>
            <input type="text" id="fname" name="firstname" placeholder="Your name.." value={this.state.fname} 
            onChange={e => this.setState({fname: e.target.value})}/>
            <label>Surname</label>
            <input type="text" id="lname" name="lastname" placeholder="Your last name.." value={this.state.lname}
            onChange={e => this.setState({lname: e.target.value})} />

        
        
            <label>Email</label>
            <input type="email" id="email" name="email" placeholder="Your email" value={this.state.email}
            onChange={e=>this.setState({email: e.target.value})} />
            <div className="form-group">
            <label htmlFor="message">Message</label>
            <textarea className="form-control" rows="5" onChange={e=>this.setState({message:e.target.value})} value={this.state.message}></textarea>
            </div>
        
            <div className="contact-button">
           <Link>
            <Button type="submit" onClick={e=>this.handleSubmit(e)} value ="submit" buttonSize='btn--medium' buttonColor='grey'>Submit</Button>
           </Link>
           </div>
            </form>
            </div>
            </div>
            <div className="col">
                <img className="contact_img" src="./images/contact.png" alt=""/>
            </div>
            </div>
            </div>
            </div>
        );
    }



}




export default ContactForm
