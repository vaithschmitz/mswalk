/* global google */
import React, {useState, useEffect, useGlobal} from 'reactn'
import '../routeStyles.css'
import Map from '../../components/Map/Map'
import Info from '../../components/Info/Info'
import Navigation from '../../components/Navigation/Navigation'
import List from '../../components/List/List'
import Quiz from '../../components/Quiz/Quiz'


export default function OneK(){
    const [nav, setNav] = useGlobal('nav')
    const [userLat, setUserLat] = useGlobal('userLat')
    const [userLng, setUserLng] = useGlobal('userLng')

    const handleDisplay = () =>{
     
        if(nav === 'map'){
            return <Map lat={userLat} lng={userLng} isMarkerShown/>
        }
        if(nav === 'list'){
            return(
                <div id='oneK-list'>
                <List number={'1'} text={'And we’re off! Walk through the start line and straight ahead towards marshal point 1.'}/>
                <Quiz question={`You’ll probably see plenty of dogs on their morning walk along the route. Talking of lots of dogs, which 1996 Disney film was partly filmed in Battersea Park?`} answer={`101 Dalmatians`}/>
                <List number={'2'} text={'At marshal point 1, turn right towards the lake, keeping the lake on your left.'}/>
                <List number={'3'} text={'Continue on the path, passing the Pump House Gallery on your left. Did you know? The Pump House Gallery is housed in a former Victorian industrial pump house used for the irrigation and fountains of Battersea Park.'}/>
                <List number={'4'} text={'When you get to marshal point 2, take the middle of the three paths, keeping the football pitches on your left.'}/>
                <Quiz question={`The first ever inter-city football match played under Football Association rule took place in Battersea Park, but in what year did it take place?`} answer={`1866`}/>
                <List number={'5'} text={'At the path crossroads, turn right onto the home straight and you are nearly there.'}/>
                <List number={'6'} text={'You have now finished. Well done! Now relax and enjoy the rest of your day.'}/>
                <Quiz question={`Well done, you did it! You are now part of a special group of people who have walked, rolled or strolled to stop MS! How many people have taken part in MS Walk London since it started in 2013 though?`} answer={`3900`}/>
                </div>
            )
        }

        if(nav === 'info'){
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
            <Navigation id='oneK-Navigation'/>
        </div>
    )
}