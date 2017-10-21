import React from 'react';
import '../index.css';
import $ from 'jquery';
import '../message.php';


class ReactFormLabel extends React.Component {

  render() {
    return(
      <label htmlFor={this.props.htmlFor}>{this.props.title}</label>
    )
  }
}

class ReactForm extends React.Component {
  constructor() {
   super();

     this.state = {
      name: '',
      email: '',
      subject: '',
      message: ''
     }
  }

  handleChange = (e) => {
   let newState = {};
   newState[e.target.name] = e.target.value;
   this.setState(newState);
  };

  handleSubmit = (e, message) => {
   e.preventDefault();

  let formData = {
  formSender: this.state.name,
  formEmail: this.state.email,
  formSubject: this.state.subject,
  formMessage: this.state.message
 }

 if (formData.formSender.length < 1 || formData.formEmail.length < 1 || formData.formSubject.length < 1 || formData.formMessage.length < 1) {
  return false;
 }
 $.ajax({
  url: '../message.php',
  dataType: 'json',
  type: 'POST',
  data: formData,

  success: function(data) {
   if (confirm('Thank you for your message.')) {
    document.querySelector('.form-input').val('');
   }
  },
  error: function(xhr, status, err) {
   console.error(status, err.toString());
   alert('There was some problem please send a message directly at katalina.nadasi@gmail.com.');
  }
 });

 this.setState({
  firstName: '',
  lastName: '',
  email: '',
  subject: '',
  message: ''
 });

 this.handleChange = this.handleChange.bind(this);
 this.handleSubmit = this.handleSubmit.bind(this);
};

render() {
 return(
   <div>
     <form className='react-form' onSubmit={this.handleSubmit}>
       <fieldset className='form-group'>
         <ReactFormLabel htmlFor='formName' title='Name:' />
         <input placeholder="Jonh Doe" id='formName' className='form-input' name='name' type='text' required onChange={this.handleChange} value={this.state.name} />
       </fieldset>

       <fieldset className='form-group'>
         <ReactFormLabel htmlFor='formEmail' title='Email:' />
         <input placeholder="john@doe.com" id='formEmail' className='form-input' name='email' type='email' required onChange={this.handleChange} value={this.state.email} />
       </fieldset>

       <fieldset className='form-group'>
         <ReactFormLabel htmlFor='formSubject' title='Subject:'/>
         <input placeholder="Front-End Developer needed asap" id='formSubject' className='form-input' name='subject' type='text' required onChange={this.handleChange} value={this.state.subject} />
       </fieldset>

       <fieldset className='form-group'>
         <ReactFormLabel htmlFor='formMessage' title='Message:' />
         <textarea placeholder="I I'm John Doe and I work for this company. We are looking for a Front-End Developer in React, Javascript, Jquery asap in Paris center for 3 months. Would you be interested ?" id='formMessage' className='form-textarea' name='message' required onChange={this.handleChange}></textarea>
       </fieldset>

       <div className='form-group'>
         <input id='formButton' className='btn' type='submit' placeholder='Send message' />
       </div>
     </form>
   </div>
 )
}
};

export default ReactForm;
