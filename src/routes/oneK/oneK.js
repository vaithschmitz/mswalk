/* global google */
import React, {useState, useEffect, useGlobal} from 'reactn'
import '../routeStyles.css'
import Map from '../../components/Map/Map'
import Info from '../../components/Info/Info'
import Navigation from '../../components/Navigation/Navigation'
import List from '../../components/List/List'
import Quiz from '../../components/Quiz/Quiz'


export default function OneK(){
    const [navIs, setNavIs] = useState('map')
    const [userLat, setUserLat] = useGlobal('userLat')
    const [userLng, setUserLng] = useGlobal('userLng')

    const handleDisplay = () =>{
     
        if(navIs === 'map'){
            if(userLat === undefined && userLng === undefined){
                return <div id='Maps-error'>Can't get Location</div>
            }
            else{
                return <Map lat={userLat} lng={userLng} isMarkerShown/>
            }
        
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
                <div id='oneK-quiz'>
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
            {console.log(`lat:${userLat}, lng ${userLng}`)}
            <Navigation id='oneK-Navigation' setNav={setNavIs}/>
        </div>
    )
}