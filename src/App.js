import React, { Component } from 'react';
import './App.css'; 
import sb from './site-block-information.json'

class SiteBlock extends Component {
  handleExpand(){

  }

 createBlocks() {
    let arr = [];
    console.log("in createBlocks");
    this.props.blocks.map(function(block){
      console.log("entering map");
      arr.push(
        <div className="site-block">
          <img className="sb-header" src={block.header} alt={block.image_alt}/>
          <h2 className="title">{block.title}</h2>
          <div className="content">{block.content}</div>
          <ExpandButton
            handleClick={this.handleExpand()} />
        </div>
      );

    }.bind(this));

    return arr;
  }

  render() {
    return (
      <div>
        {this.createBlocks()}
      </div>
    );
  }
}

class ContactForm extends Component {

  handleSubmit(e) {
    this.props.handleSubmit(e);
  }

  render() {
    return (
      <div id="contact">
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

const ExpandButton = (props) => {
  var handleClick = (e) => {
    e.preventDefault();
    props.handleClick();
  }

  return(
    <span className='expand' onClick={handleClick}>+expand</span>
  )
}


class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: sb
    }
  }

  contactSubmit(e) {

  }

  expandSection() {

  }




  render() {
    return (
      <div>
      <SiteBlock 
        blocks={this.state.blocks} />
      <ContactForm 
        handleSubmit={this.contactSubmit} />
      </div>
    );
  }
}

export default App;
