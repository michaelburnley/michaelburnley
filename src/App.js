import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css'; 
import sb from './site-block-information.json'

class SiteBlock extends Component {
  handleExpand(){

  }

  render() {
    return (
      <div className="site-block">
        <h2></h2>
      </div>
      <ExpandButton 
        handleClick={this.handleExpand} />
    );
  }
}

class ContactForm extends Component {

  handleSubmit(e) {
    this.props.handleSubmit(e);
  }

  render() {
    return (
      <div>
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
      </div>
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
      blocks = sb
    }
  }

  contactSubmit(e) {

  }

  expandSection() {

  }


  render() {
    return (
      <ContactForm 
        handleSubmit={this.contactSubmit} />
      <SiteBlock />

    );
  }
}

export default App;
