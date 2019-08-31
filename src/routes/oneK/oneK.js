import React, {useState, useEffect} from 'react'
import './oneK.css'
import Map from '../../components/Map/Map'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import List from '../../components/List/List'
import Quiz from '../../components/Quiz/Quiz'


export default function OneK(){
    const [navIs, setNavIs] = useState('quiz')
    const [userLat, setUserLat] = useState()
    const [userLng, setUserLng] = useState()

    useEffect(()=>{
        const getPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(showPosition) 
            }
                else {
                    console.log('error')
            }
        }
        const showPosition = (position) => {
            setUserLat(position.coords.latitude)
            setUserLng(position.coords.longitude)
        }
        getPosition()
    }, [])

    
    const handleDisplay = () =>{
     
        if(navIs === 'map'){

            return <Map lat={userLat} lng={userLng} isMarkerShown/>
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
            )
        }
        if(navIs === 'quiz'){
            return(
                <div>
                    <Quiz question='Question' correct={'answer1'} choice1={'answer1'} choice2={'answer2'} choice3={'answer3'} />
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