import React, { Component } from 'react';
import './App.css'; 
import logo from './logo.png'
import sb from './site-block-information.json'

const ResumeModal = () => {
  return(
    <a href="" download="Resume-MichaelBurnley">Download</a>
  );
}

const HelloBlock = () => {

  const contactClick = (e) => {
    return <ContactForm />;
  }

  const resumeClick = (e) => {
    return <ResumeModal />
  }

  return(
    <div className="hello">
      <div className="hello_block">
        <img src={logo} id="logo" alt="logo" />
      </div>
      <div className="hello_block">
        <p>My name is Michael Burnley and I am a web and game developer.</p>
        <div className="social">
          <div className="social-link"><a href="https://github.com/michaelburnley"><img alt="github" src="http://michaelburnley.com/assets/images/github.png" /></a></div>
          <div className="social-link"><a href="https://twitter.com/michaelburnley"><img alt="twitter" src="http://michaelburnley.com/assets/images/twitter.png" /></a></div>
          <div className="social-link"><a href="https://www.linkedin.com/in/michael-burnley-93921027"><img alt="linkedin" src="http://michaelburnley.com/assets/images/linkedin.png" /></a></div>
          <div className="social-link"><a href="https://instagram.com/michaelburnley"><img alt="instagram" src="http://michaelburnley.com/assets/images/instagram.png" /></a></div>
        </div>
      </div>
      <div className="hello_block">
        <div className="btn" onClick={resumeClick()}>Resume</div>
        <div className="btn" onClick={contactClick()}>Contact</div>
      </div>
    </div>
  )
}

class SiteBlock extends Component {
  
  constructor() {
    super();
    this.state = {
      isExpanded: false
    }
  }

  toggleExpand() {
    this.state.isExpanded ? this.setState({ isExpanded: false }) : this.setState({ isExpanded: true })
  }

 createBlocks() {
    let arr = [];
    console.log("in createBlocks");
    this.props.blocks.map(function(block){
      console.log("entering map");
      arr.push(
        <div className="site-block" onClick={this.toggleExpand.bind(this)}>
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
    e.preventDefault();
    props.handleSubmit(e);
  }

  return(
      <div id="contact">
        <form onSubmit={handleSubmit()}>
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

          <input type="submit" />
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
      <HelloBlock />
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
