import React, {useState, useEffect} from 'react'
import '../routeStyles.css'
import Map from '../../components/Map/Map'
import Info from '../../components/Info/Info'
import Footer from '../../components/Navigation/Navigation'
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

    const locUpdates = () => {
        let showLoc = () => console.log(`Lat: ${userLat}, Lng:${userLng}`)
        setInterval(showLoc(), 1000)
    }
    const makeList = () => {
        let iterator = 1
        let buffer = []
        const list = []
          
        
            for(let i = 0; i< list.length; i++){
                buffer.push(<List number={iterator} text={list[i]}/>)
                iterator++
            }
            return buffer
    }

    const handleDisplay = () =>{
     
        if(navIs === 'map'){

            return <Map lat={userLat} lng={userLng} isMarkerShown/>
        }
        if(navIs === 'list'){
            return(
                <div id='oneK-list'>
                    {makeList()}
                </div>
            )
        }
        if(navIs === 'quiz'){
            return(
                <div>
                    <Quiz question='Question' answer={'When you get to marshal point 2, take the middle of the three paths, keeping the football pitches on your left.'}/>
                    <Quiz question='Another One' answer={'At the path crossroads, turn right onto the home straight and you are nearly there.'}/>
                </div>
            )
        }
        if(navIs === 'info'){
            return(
                <div id='oneK-info'>
                    <Info/>
                </div>
            )
        }
    }
    return(
        <div id='oneK-container'>
            {handleDisplay()}
            {locUpdates()}
        <Footer setNav={setNavIs}/>
        </div>
    )
}