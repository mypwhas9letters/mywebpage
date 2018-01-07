import React from 'react'

const HTMLResume = () => {
  return(
    <embed src={require("./HTMLResume.pdf")} width="100%" height="1000px" type='application/pdf'/>
  )
}

export default HTMLResume
