import React, { Component } from 'react';
import './App.css'; 
import sb from './site-block-information.json'

class SiteBlock extends Component {
  
  constructor() {
    super();
    this.state = {
      isExpanded: false
    }
  }

  toggleExpand() {

    if (!this.state.isExpanded) {
      this.setState({
        isExpanded: true
      });
    } else {    
      this.setState({
        isExpanded: false
      })
    }
  }

 createBlocks() {
    let arr = [];
    console.log("in createBlocks");
    this.props.blocks.map(function(block){
      console.log("entering map");
      arr.push(
        <div className="site-block">
          <div className="title-block">
            <img className="sb-header" src={block.header} alt={block.image_alt}/>
            <h2 className="title">{block.title}</h2>
            <ExpandButton
            handleClick={this.toggleExpand.bind(this)} />
          </div>
          <div className="content">
            {
              this.state.isExpanded ? block.content : null
            }
          </div>
        </div>
      );

    }.bind(this));

    return arr;
  }

  render() {
    return (
      <div className="container">
        {this.createBlocks()}
      </div>
    );
  }
}


const ContactForm = (props) => {
  let handleSubmit = (e) => {
    props.handleSubmit(e);
  }

  return(
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
        blocks={this.state.blocks}
        handleClick={this.expandSection}/>
      <ContactForm 
        handleSubmit={this.contactSubmit} />
      </div>
    );
  }
}

export default App;
