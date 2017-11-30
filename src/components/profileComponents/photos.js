import React from 'react'
import {PhotoSwipeGallery} from 'react-photoswipe'
import 'react-photoswipe/lib/photoswipe.css'



class Photos extends React.Component {
  state = {
    isOpen: false,
    galleryItems: [
      {
        src: 'https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/05/Major_photo-2-600x600.jpg',
        w: 600,
        h: 600,
        title: 'Image 1'
      },
      {
        src: 'http://www.dogster.com/wp-content/uploads/2015/05/husky-puppies-06.jpg',
        w: 1200,
        h: 900,
        title: 'Image 2'
      },
      {
        src: 'https://i.pinimg.com/736x/4b/ac/ae/4bacae535ca54f50a04ed59b29448d1e--husky-pups-siberian-husky-puppies.jpg',
        w: 1200,
        h: 900,
        title: 'Image 3'
      },
    ],
  }

  openPhotoSwipe = (e) => {
    e.preventDefault()
    this.setState({
      isOpen: true
      })
  }

  handleClose = () => {
    this.setState({
      isOpen: false
    })
  }

  getThumbnailContent = () => {
    return (
        <img src={'https://i.pinimg.com/736x/4b/ac/ae/4bacae535ca54f50a04ed59b29448d1e--husky-pups-siberian-husky-puppies.jpg'} alt=""/>
    )
  }

  render(){
    return(
      <div className="ui stackable cards">
        <div className="ui card">
          <div className="content">
            <div className="header">Photos</div>
          </div>
          <div className="ui tiny images">

          <PhotoSwipeGallery items={this.state.galleryItems} thumbnailContent={this.getThumbnailContent}/>
          </div>

        </div>
      </div>
    )
  }
}

export default Photos
