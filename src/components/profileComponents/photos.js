import React from 'react'

const Photos = () => {
  return(
    <div className="ui stackable cards">
      <div className="ui card">
        <div className="content">
          <div className="header">Photos</div>
        </div>
        <div className="ui tiny images">
          <img src="https://gfp-2a3tnpzj.stackpathdns.com/wp-content/uploads/2016/05/Major_photo-2-600x600.jpg" alt=""/>
          <img src="http://www.dogster.com/wp-content/uploads/2015/05/husky-puppies-06.jpg" alt=""/>
          <img src="https://i.pinimg.com/736x/4b/ac/ae/4bacae535ca54f50a04ed59b29448d1e--husky-pups-siberian-husky-puppies.jpg" alt=""/>
        </div>
      </div>
    </div>
  )
}

export default Photos
