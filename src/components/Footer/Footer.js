import React from 'react'
import './Footer.css'
import QuestionIcon from './gaming.svg'
import MapIcon from './map.svg'
import InfoIcon from './information.svg'
import ListIcon from './view-list.svg'

export default function Footer(props){
    return(
        <div id='Footer-Container'>
            <div onClick={() => props.setNav('map')}><img className='Footer-icon' src={MapIcon} alt='Map Icon'></img></div>
            <div onClick={() => props.setNav('list')}><img className='Footer-icon' src={ListIcon} alt='List Icon'></img></div>
            <div onClick={() => props.setNav('quiz')}><img className='Footer-icon' src={QuestionIcon} alt='Question Icon'></img></div>
            <div onClick={() => props.setNav('info')}><img className='Footer-icon' src={InfoIcon} alt='Info Icon'></img></div>
        </div>
    )
    
}