import React, { Component } from 'react'

class Photography extends Component{
  state = {
    photos: []
  }

  componentDidMount = async () => {
    try {
      const url = ''
      const listOfPhotos = await fetch(url)
      var json = await listOfPhotos.json()
      this.setState({photos: json.photos.photo})
    }
    catch(err){
      console.log(err)
    }
  }

  render(){
    const images = this.state.photos.map(image => <img key={image.id} src={`https://farm${image.farm}.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`} alt=""/>)
    return(
      <div className="ui container">
        <div className="ui medium images">
          { images }
        </div>
      </div>
    )
  }

}

export default Photography
