import React from 'react'
import './Footer.css'
import QuestionIcon from './question.png'
import MapIcon from './map.png'
import InfoIcon from './info.png'
import ListIcon from './list.png'

export default function Footer(){
    return(
        <div id='Footer-Container'>
            <div><img class='Footer-icon' src={MapIcon}></img></div>
            <div><img class='Footer-icon' src={ListIcon}></img></div>
            <div><img class='Footer-icon' src={QuestionIcon}></img></div>
            <div><img class='Footer-icon' src={InfoIcon}></img></div>
        </div>
    )
    
}