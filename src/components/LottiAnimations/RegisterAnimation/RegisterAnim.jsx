import React from 'react'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import anim from "./animation.json"
const RegisterAnim = () => {
  return (
    <>
    <Player
        autoplay
        loop
        src={anim}
        className='w-full'
    >
    </Player>
</>
  )
}

export default RegisterAnim