import React from 'react'
import video from '../assets/video.mp4'

const PageBackground = () => {
  return (
    <div className='absolute top-0 left-0 w-[100%] h-screen'>
        <div className='absolute w-[100%] h-full top-0 left-0 bg-black/40 -z-20'>
        </div>
      <video className='absolute w-full h-full object-cover -z-40' src={video} autoPlay loop muted />
    </div>
  )
}

export default PageBackground
