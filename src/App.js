import React, { Component } from 'react';
import './App.css'; 
import logo from './logo.png'
import sb from './site-block-information.json'

const ExpandButton = (props) => {
  var handleClick = (e) => {
    e.preventDefault();
    props.handleClick();
  }

  return(
    <span className='expand' onClick={handleClick}>+expand</span>
  )
}

const HelloBlock = (props) => {

  var contactClick = (e) => {
    e.preventDefault();
    props.toggle();
  }

  var resumeClick = (e) => {
    e.preventDefault();
    props.toggle();
  }

  return(
    <div className="hello">
      <div className="hello_block">
        <div id="img_block">
          <img src={logo} id="logo" alt="logo" />
        </div>
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
        <div className="btn" onClick={resumeClick}>Resume</div>
        <div className="btn" onClick={contactClick}>Contact</div>
      </div>
    </div>
  )
}

const SiteBlockContainer = (props) => {

  let arr = [];

  const createBlocks = () => {
    props.blocks.forEach((block) => {
      arr.push(
        <SiteBlock
          block={block} 
          handleClick={props.handleClick}
          key={block.title} />
      );
    })

    return arr;
  }

  return (
    <div className="container">
      {createBlocks()}
    </div>
  );
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

  render() {
    return (
        <div className="site-block">
          <div className="title-block">
            <img className="sb-header" src={this.props.block.header} alt={this.props.block.image_alt}/>
            <h2 className="title">{this.props.block.title}</h2>
            <ExpandButton
            handleClick={this.toggleExpand.bind(this)} />
          </div>
          <div className="content">
            {
              this.state.isExpanded ? this.props.block.content : null
            }
          </div>
        </div>
    );
  }
}


const ContactForm = (props) => {

  console.log("in contact form");
  
  const handleSubmit = (e) => {
    props.handleSubmit(e);
  }

  const handleClose = (e) => {
    props.toggle();
  }

  return(
      <div id="contact">
        <form onSubmit={handleSubmit}>
        <div id="close" onClick={handleClose}>x</div>
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
          <input type="text" />
          </label>

          <input id="sub-btn" type="submit" />
        </form>
      </div>
  );

}

class App extends Component {
  constructor() {
    super();
    this.state = {
      blocks: sb,
      overlay: false
    };
  }

  contactToggle() {
    if(this.state.overlay) {
      this.setState({overlay: false});
    } else {
      this.setState({overlay: true});
    }
  }

  contactSubmit(e) {
    
  }

  expandSection() {

  }

  render() {
    return (
      <div>
        <HelloBlock
          show={this.state.overlay}
          toggle={this.contactToggle.bind(this)} />
        <SiteBlockContainer 
          blocks={this.state.blocks}
          handleClick={this.expandSection.bind(this)} />
          {
            this.state.overlay ?  <ContactForm handleSubmit={this.contactSubmit.bind(this)} toggle={this.contactToggle.bind(this)} /> : null
          }
      </div>
    );
  }
}

export default App;
