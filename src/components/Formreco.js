import React from 'react';
import '../index.css';
import $ from 'jquery';
import './message.php';


class ReactForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contactEmail: '',
      contactMessage: ''
    };

    this._handleSubmit = this._handleSubmit.bind(this);
    this._handleChange = this._handleChange.bind(this);
    this._handleChangeMsg = this._handleChangeMsg.bind(this);
  }

  // Change state of input field so text is updated while typing
  _handleChange(e) {
    this.setState({
      contactEmail: e.target.value,
    });
  }
  // Change state of input field so text is updated while typing
  _handleChangeMsg(e) {
    this.setState({
      contactMessage: e.target.value
    });
  }

  _handleSubmit(e) {
    e.preventDefault();
    this.setState({
      contactEmail: '',
      contactMessage: ''
    });

    $.ajax({
      url: './message.php',
      type: 'POST',
      data: {
        'form_email': this.state.contactEmail,
        'form_msg': this.state.contactMessage
      },
      cache: false,
      success: function(data) {
        // Success..
        this.setState({
          contactEmail: 'success',
          contactMessage: '<h1>Message envoyé</h1><p>Nous reviendrons vers vous asap.</p>'
        });
        $('.form-input').slideUp();
        $('.form-input').after(this.state.contactMessage);
        console.log('success', data);
      }.bind(this),
      // Fail..
      error: function(xhr, status, err) {
        console.log(xhr, status);
        console.log(err);
        this.setState({
          contactEmail: 'danger',
          contactMessage: '<h1>Sorry there is a problem</h1><p>Please send a direct mail at katalina.nadasi@gmail.com</p>'
        });
        console.log(this.state.contactEmail + this.state.contactMessage + 'fail');
      }.bind(this)
    });
  }

  render() {
    return (
      <div className="contact" id="contact">
        <div className="filter">
          <form className="form" onSubmit={this._handleSubmit} id="formContact">
            <label>Email</label>
            <input id="formEmail" type="email" name="formEmail" value={this.state.contactEmail} onChange={this._handleChange} required/>
            <label>Message</label>
            <textarea id="formMsg" name="formMsg" rows="8" cols="40" value={this.state.contactMessage} onChange={this._handleChangeMsg} required></textarea>
            <input type="submit" value="Submit" className="btn--cta" id="btn-submit" />
          </form>
        </div>
      </div>
    )
  }
}

export default ReactForm;
