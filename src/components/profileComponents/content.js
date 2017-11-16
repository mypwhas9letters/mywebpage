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
            <input className="prompt" type="text" placeholder="Search..." onChange={this.onChange} value={this.state.filter}/>
            <button className="ui compact icon primary button" onClick={this.onClick}><i className="search icon"></i></button>
          </div>
        </div>


        <div className="ui segments">

              <div className="ui relaxed list">
                <div className="ui item segment">
                <i className="ui huge medium icon"></i>
                  <div className="content">
                    <a className="header">HTML Canvas Animation with Javascript</a>
                    Hello, test text. Summary about the medium article. Maybe a few line of the article.
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
                <i className="ui huge youtube icon"></i>
                  <div className="content">
                    <a className="header">Javascript Tutorial</a>
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
                <i className="ui huge medium icon"></i>
                  <div className="content">
                    <a className="header">HTML Canvas Animation with Javascript</a>
                    Hello, test text
                  </div>
                </div>
              </div>
            </div>


      </div>
    )
  }
}

export default Content
