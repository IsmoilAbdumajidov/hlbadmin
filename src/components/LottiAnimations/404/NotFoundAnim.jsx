import React from 'react'
import { Controls, Player } from '@lottiefiles/react-lottie-player'
import anim from "./animation.json"
const NotFoundAnim = ({className}) => {
    return (
        <>
            <Player
                autoplay
                loop
                src={anim}
                className={`${className}`}
            >
            </Player></>
    )
}

export default NotFoundAnim