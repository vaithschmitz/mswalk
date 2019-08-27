import React, {useState} from 'react'
import './oneK.css'
import Map from './Map.png'
import Footer from '../../components/Footer/Footer'

export default function OneK(){
    const [navIs, setNavIs] = useState('map')
    let mapsIframe = (
        <iframe src="https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d2048.884927390276!2d-0.16263819781009667!3d51.47884169542194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x4876050ebc506039%3A0xfed645816162fe41!2sBattersea%20Park%2C%20Battersea%2C%20London%20SW11%204NJ!3m2!1d51.4791075!2d-0.1564981!4m3!3m2!1d51.4798307!2d-0.16456669999999998!4m3!3m2!1d51.482100499999994!2d-0.15541049999999998!4m3!3m2!1d51.480409099999996!2d-0.1529248!4m3!3m2!1d51.478260399999996!2d-0.16339009999999998!4m3!3m2!1d51.4797976!2d-0.16461979999999998!5e0!3m2!1sen!2suk!4v1566930242466!5m2!1sen!2suk" width="100%" height="100%" ></iframe>
    )

    const handleDisplay = () =>{
        if(navIs === 'map'){
            return mapsIframe
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