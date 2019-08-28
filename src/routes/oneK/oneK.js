import React, {useState} from 'react'
import './oneK.css'
import Map from './Map.png'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import List from '../../components/List/List'

export default function OneK(){
    const [navIs, setNavIs] = useState('list')
    let mapsIframeOneK = (
        <iframe src="https://www.google.com/maps/embed?pb=!1m42!1m12!1m3!1d2048.884927390276!2d-0.16263819781009667!3d51.47884169542194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m27!3e2!4m5!1s0x4876050ebc506039%3A0xfed645816162fe41!2sBattersea%20Park%2C%20Battersea%2C%20London%20SW11%204NJ!3m2!1d51.4791075!2d-0.1564981!4m3!3m2!1d51.4798307!2d-0.16456669999999998!4m3!3m2!1d51.482100499999994!2d-0.15541049999999998!4m3!3m2!1d51.480409099999996!2d-0.1529248!4m3!3m2!1d51.478260399999996!2d-0.16339009999999998!4m3!3m2!1d51.4797976!2d-0.16461979999999998!5e0!3m2!1sen!2suk!4v1566930242466!5m2!1sen!2suk" width="100%" height="100%" ></iframe>
    )

    const handleDisplay = () =>{
        if(navIs === 'map'){
            return mapsIframeOneK
        }
        if(navIs === 'list'){
            return(
                <div id='oneK-list'>
                <List number={'1'} text={'And we’re off! Walk through the start line and straight ahead towards marshal point 1.'}/>
                <List number={'2'} text={'At marshal point 1, turn right towards the lake, keeping the lake on your left.'}/>
                <List number={'3'} text={'Continue on the path, passing the Pump House Gallery on your left. Did you know? The Pump House Gallery is housed in a former Victorian industrial pump house used for the irrigation and fountains of Battersea Park.'}/>
                <List number={'4'} text={'When you get to marshal point 2, take the middle of the three paths, keeping the football pitches on your left.'}/>
                <List number={'5'} text={'At the path crossroads, turn right onto the home straight and you are nearly there.'}/>
                <List number={'6'} text={'You have now finished. Well done! Now relax and enjoy the rest of your day.'}/>

                </div>
                // <div id='oneK-list'>

                //     <List number={'1'} text={'And we’re off! Walk through the start line and straight ahead towards marshal point 1.'}/>
                //     <p>
                //         1. And we’re off! Walk through the start line and straight ahead towards marshal point 1. 
                //         <br/>
                //         <br/>
                //         2. At marshal point 1, turn right towards the lake, keeping the lake on your left. 
                //         <br/>
                //         <br/>
                //         3. Continue on the path, passing the Pump House Gallery on your left. Did you know? The Pump House Gallery is housed in a former Victorian industrial pump house used for the irrigation and fountains of Battersea Park. 
                //         <br/>
                //         <br/>
                //         4. When you get to marshal point 2, take the middle of the three paths, keeping the football pitches on your left. 
                //         <br/>
                //         <br/>
                //         5. At the path crossroads, turn right onto the home straight and you are nearly there. 
                //         <br/>
                //         <br/>
                //         6. You have now finished. Well done! Now relax and enjoy the rest of your day. 
                //     </p>
                // </div>
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
                    <Info/>
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