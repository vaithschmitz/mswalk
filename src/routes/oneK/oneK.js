import React, {useState} from 'react'
import './oneK.css'
import Map from './Map.png'
import Footer from '../../components/Footer/Footer'

export default function OneK(){
    const [navIs, setNavIs] = useState('map')
    const handleDisplay = () =>{
        if(navIs === 'map'){
            return <div><img id='Map' src={Map}></img></div>
        }
        if(navIs === 'list'){
            return(
                <div>
                    LIST
                </div>
            )
        }
        if(navIs === 'quiz'){
            return(
                <div>
                    QUIZ
                </div>
            )
        }
        if(navIs === 'info'){
            return(
                <div>
                    INFO
                </div>
            )
        }
    }
    return(
        <div id='oneK-container'>
            {handleDisplay()}
        <Footer/>
        </div>
    )
}