import React, {useState, useEffect} from 'react'
import '../routeStyles.css'
import Map from '../../components/Map/Map'
import Info from '../../components/Info/Info'
import Footer from '../../components/Navigation/Navigation'
import List from '../../components/List/List'
import Quiz from '../../components/Quiz/Quiz'


export default function OneK(){
    const [navIs, setNavIs] = useState('map')
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
        const list = [
            `And we’re off! Walk through the start line and straight ahead towards marshal point 1.`,
            `At marshal point 1, turn right along East Carriage Drive. Near the Rosary Gate entrance to the park, turn right onto the lakeside path for a more scenic route!`,
            `Continue straight ahead along the path, keeping the lake on your right.`,
            `At the bottom corner of the lake, you will reach a T-junction of the path. Turn left and then right onto South Carriage Drive, towards the Sun Gate.`,
            `Follow South Carriage Drive around to the right, past the all weather sports pitch. Continue onto West Carriage Drive, heading towards the Albert Gate.`,
            `At marshal point 2, exit the park via the Albert Gate. Turn right onto Albert Bridge Road. Stay on the right hand side of Albert Bridge as you cross the River Thames.`,
            `At the end of Albert Bridge, turn right onto Chelsea Embankment, with the river on your right hand side. Continue until you reach marshal point 3.`,
            `At marshal point 3, cross the road at the pedestrian crossing and bear right onto Royal Hospital Road.`,
            `Continue along Royal Hospital Road, passing the Royal Hospital on your right, until you reach the junction with Chelsea Bridge Road.`,
            `Turn right onto Chelsea Bridge Road and continue towards the river, crossing Chelsea Bridge.`,
            `At marshal point 4, enter the park through Chelsea Gate and bear right to join the path alongside the river.`,
            `Continue along the river, passing the famous Peace Pagoda on your left. Look for the arrow to show you when to turn left and then turn right onto North Carriage Drive.`,
            `When you reach the crossroads at marshal point 5, turn hard left onto Maple Leaf Walk. You’re on the home stretch!`,
            `Turn left onto Central Avenue and continue to the Finish Line at the Bandstand. Well done!`
        ]
        
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