import React from 'react'
import './Footer.css'
import QuestionIcon from './gaming.svg'
import MapIcon from './map.svg'
import InfoIcon from './information.svg'
import ListIcon from './view-list.svg'

export default function Footer(){
    return(
        <div id='Footer-Container'>
            <div><img className='Footer-icon' src={MapIcon} alt='Map Icon'></img></div>
            <div><img className='Footer-icon' src={ListIcon} alt='List Icon'></img></div>
            <div><img className='Footer-icon' src={QuestionIcon} alt='Question Icon'></img></div>
            <div><img className='Footer-icon' src={InfoIcon} alt='Info Icon'></img></div>
        </div>
    )
    
}