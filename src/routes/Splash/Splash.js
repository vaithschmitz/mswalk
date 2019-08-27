import React from 'react'
import {Link} from 'react-router-dom'
import './Splash.css'
import mslogo from './mslogo.png'
import mswalkldn from './mswalkldn.png'
import {KilometerButton} from '../../components/Splash/SplashComponents'

export default function Splash(){
    return(
        <div id='Splash-Container'>
        <img src={mslogo} id='Splash-mslogo' alt='MS Society Logo'></img>
        <img src={mswalkldn} id='Splash-mswalkldn' alt='MS Walk Logo'></img>
        <p id='Splash-text'>Thank you so much for joining us in walking, rolling and strolling to stop MS.<br/> Please pick your distance below. </p>
        <Link to='/oneK' class='Splash-btn'><KilometerButton  kilometer={'1K'}/></Link>
        <Link to='/sixK' class='Splash-btn'><KilometerButton  kilometer={'6K'}/></Link>
        <Link to='/tenK' class='Splash-btn'><KilometerButton  kilometer={'10K'}/></Link>
        <Link to='/twentyK' class='Splash-btn'><KilometerButton  kilometer={'20K'}/></Link>
        <a id='Splash-Eventbrite' href='https://www.eventbrite.co.uk/e/ms-walk-london-2019-registration-60395687126' alt='Eventbrite Sign Up'>Haven't registered yet? Click here.</a>
        </div>
    )
}