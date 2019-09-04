import React, {setGlobal, useGlobal} from 'reactn'
import {Link} from 'react-router-dom'
import './Splash.css'
import mslogo from './mslogo.png'
import mswalkldn from './mswalkldn.png'
import {KilometerButton} from '../../components/Splash/SplashComponents'

export default function Splash(){   
    setGlobal({distance : null})
    const [distance, setDistance] = useGlobal('distance') 

    return(

        <div id='Splash-Container'>
        <img src={mswalkldn} id='Splash-mswalkldn' alt='MS Walk Logo'></img>
        <p id='Splash-text'>Thank you so much for joining us in walking, rolling and strolling to stop MS.<br/> Please pick your distance below. </p>
        <a id='Splash-Eventbrite' href='https://www.eventbrite.co.uk/e/ms-walk-london-2019-registration-60395687126' alt='Eventbrite Sign Up'>Haven't registered yet? Click here.</a>

        <Link onClick={()=>setDistance('oneK')} to='/oneK'  className='Splash-btn'><KilometerButton  kilometer={'1K'}/></Link>
        <Link onClick={()=>setDistance('sixK')} to='/sixK' className='Splash-btn'><KilometerButton  kilometer={'6K'}/></Link>
        <Link onClick={()=>setDistance('tenK')} to='/tenK' className='Splash-btn'><KilometerButton  kilometer={'10K'}/></Link>
        <Link onClick={()=>setDistance('twentyK')} to='/twentyK' className='Splash-btn'><KilometerButton  kilometer={'20K'}/></Link>
                    
            
            

        <img src={mslogo} id='Splash-mslogo' alt='MS Society Logo'></img>
        </div>
    )
}