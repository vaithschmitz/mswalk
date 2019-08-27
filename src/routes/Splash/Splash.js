import React from 'react'
import './Splash.css'
import mslogo from './mslogo.png'
import mswalkldn from './mswalkldn.png'
import {KilometerButton} from '../../components/Splash/SplashComponents'

export default function Splash(){
    return(
        <div id='Splash-Container'>
        <img src={mslogo} id='Splash-mslogo'></img>
        <img src={mswalkldn} id='Splash-mswalkldn'></img>
        <p id='Splash-text'>Thank you so much for joining us in walking, rolling and strolling to stop MS.<br/> Please pick your route below. </p>
        <KilometerButton class='Splash-btn' kilometer={'1K'}/>
        <KilometerButton class='Splash-btn' kilometer={'6K'}/>
        <KilometerButton class='Splash-btn' kilometer={'10K'}/>
        <KilometerButton class='Splash-btn' kilometer={'20K'}/>
        <a id='Splash-Eventbrite' href='https://www.eventbrite.co.uk/e/ms-walk-london-2019-registration-60395687126' alt='Eventbrite Sign Up'>Haven't registered yet? Click here.</a>
        </div>
    )
}