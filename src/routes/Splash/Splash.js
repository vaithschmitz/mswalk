import React from 'react'
import './Splash.css'
import {KilometerButton} from '../../components/Splash/SplashComponents'

export default function Splash(){
    return(
        <div id='Splash-Container'>
        <KilometerButton kilometer={'1K'}/>
        <KilometerButton kilometer={'6K'}/>
        <KilometerButton kilometer={'10K'}/>
        <KilometerButton kilometer={'20K'}/>
        <a id='Splash-Eventbrite'>Haven't registered yet? Click here.</a>
        </div>
    )
}