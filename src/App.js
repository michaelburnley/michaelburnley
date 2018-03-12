import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 

class SiteBlock extends Component {
  render() {
    return (
      
    );
  }
}

class ContactForm extends Component {

  handleSubmit(e) {
    this.props.handleSubmit(e);
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
        Name
        <input type="text" />
        </label>
        <label>
        Email
        <input type="text" />
        </label>
        <label>
        Subject
        <input type="text" />
        </label>
        <label>
        Content
        <textarea type="textarea" />
        </label>
      </form>
    );
  }
}

class ExpandButton extends Component {
  
  handleClick(e) {
    e.preventDefault();
    this.props.handleClick();
  }

  render() {
    return(
      <span className='expand' onClick={this.handleClick}>+expand</span>
    );
  }
}


class App extends Component {
  constructor() {
    super();
    this.state = {

    }
  }

  handleSubmit(e) {

  }

  expandSection() {

  }


  render() {
    return (
      <ContactForm />
    );
  }
}

export default App;
