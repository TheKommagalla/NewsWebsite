import React from 'react'
import ImageSlider from './ImageSlider'
import LatestNews from './LatestNews'

import NewTypeSlider from './NewTypeSlider'
import LiveTv from './LiveTv'
import Reviews from './Reviews'
 function Home() {
  return (
    <> 
        {/* ImageSlider Component */}
        < ImageSlider/>
        {/* Type of News */}
          <NewTypeSlider/>
        
         {/* LiveTv Component */}
         <LiveTv/>
        {/* Latest NewsCard */}
            <LatestNews/>
         {/* reviews of website */}
         <Reviews/>
      </>
    

  )
}

export default Home
