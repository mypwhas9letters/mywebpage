import React from 'react'

class Footer extends React.Component{
  render() {
    return (
      <div>
        <div className="ui inverted vertical footer segment">
          <div className="ui center aligned container">
            <div className="ui horizontal inverted small divided link list">
              <a className="item">Home</a>
              <a className="item">Links</a>
              <a className="item">Info</a>
            </div>
          </div>
        </div>
      </div>

    )
  }
}

export default Footer
