import React from 'react'

class Content extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      filter: ""
      }
    }

  onChange = (event) => {
    this.setState({ filter : event.target.value})
  }

  onClick = (event) => {
    event.preventDefault()
    console.log(this.state.filter);
  }

  render(){
    return(
      <div>
        <div className="ui search">
          <div className="ui icon fluid input">
            <input className="prompt" type="text" placeholder="Search Bar Not Functional Yet" onChange={this.onChange} value={this.state.filter}/>
            <button className="ui compact icon primary button" onClick={this.onClick}><i className="search icon"></i></button>
          </div>
        </div>


        <div className="ui segments">

              <div className="ui relaxed list">
                <div className="ui item segment">
                <i className="ui huge medium icon"></i>
                  <div className="content">
                    <a className="header" href="https://medium.com/@huiwang339/html-canvas-animation-with-javascript-1956426287d3">HTML Canvas Animation with Javascript</a>
                    A tutorial on creating a simple HTML canvas animation with Javascript blogpost.
                  </div>
                </div>
                <div className="ui item segment">
                <i className="ui huge newspaper icon"></i>
                  <div className="content">
                    <a className="header">Link to some news article</a>
                    In today's news, the ......
                  </div>
                </div>
                <div className="ui item segment">
                <i className="ui huge youtube icon"></i>
                  <div className="content">
                    <a className="header" href="https://www.youtube.com/watch?v=EO6OkltgudE&t=7s">HTML Canvas Tutorial</a>
                    This is the best video tutorial for HTML Canvas I found on Youtube. The instructor expained how canvas works really well.
                  </div>
                </div>
                <div className="ui item segment">
                <i className="ui huge medium icon"></i>
                  <div className="content">
                    <a className="header">HTML Canvas Animation with Javascript</a>
                    Hello, test text
                  </div>
                </div>
                <div className="ui item segment">
                <i className="ui huge medium icon"></i>
                  <div className="content">
                    <a className="header">HTML Canvas Animation with Javascript</a>
                    Hello, test text
                  </div>
                </div>
                <div className="ui item segment">
                <i className="ui huge newspaper icon"></i>
                  <div className="content">
                    <a className="header">Link to some news article</a>
                    In today's news, the ......
                  </div>
                </div>
              </div>
            </div>


      </div>
    )
  }
}

export default Content
