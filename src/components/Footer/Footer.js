import React from 'react'
import './Footer.css'
import QuestionIcon from './gaming.svg'
import MapIcon from './map.svg'
import InfoIcon from './information.svg'
import ListIcon from './view-list.svg'

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