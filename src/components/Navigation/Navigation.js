import React, {useState} from 'react'
import './Navigation.css'
import QuestionIcon from './gaming.svg'
import HomeIcon from './home.svg'
import MapIcon from './map.svg'
import InfoIcon from './information.svg'
import ListIcon from './menu.svg'

export default function Navigation(props){
    return(

        <div class='Navigation-Container'>
        <div><a href='/'><img className='Navigation-icon' src={HomeIcon} alt='Home Icon'></img></a></div>
        <div onClick={() => props.setNav('map')}><img className='Navigation-icon' src={MapIcon} alt='Map Icon'></img></div>
        <div onClick={() => props.setNav('list')}><img className='Navigation-icon' src={ListIcon} alt='List Icon'></img></div>
        {/* <div onClick={() => props.setNav('quiz')}><img className='Navigation-icon' src={QuestionIcon} alt='Question Icon'></img></div> */}
        <div onClick={() => props.setNav('info')}><img className='Navigation-icon' src={InfoIcon} alt='Info Icon'></img></div>
        </div>

    )
    
}