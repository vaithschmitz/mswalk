import React, {useState, useEffect} from 'react'
import './oneK.css'
import Map from './Map.png'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import List from '../../components/List/List'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"


export default function OneK(){
    const [navIs, setNavIs] = useState('map')
    let REACT_APP_MAPSKEY = process.env.REACT_APP_MAPSKEY
    let userLat
    let userLng
    useEffect(() => {
        const getPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(showPosition) 
            }
                else {
                    console.log('error')
            }
        }
        const showPosition = (position) => {
            userLat = position.coords.latitude
            userLng = position.coords.longitude
        }
        getPosition()
    }, [])


    

      const MyMapComponent = compose(
        withProps({
          googleMapURL: `https://maps.googleapis.com/maps/api/js?key=${REACT_APP_MAPSKEY}&v=3.exp&libraries=geometry,drawing,places`,
          loadingElement: <div style={{ height: `100%` }} />,
          containerElement: <div style={{ height: `100%` }} />,
          mapElement: <div style={{ height: `100%` }} />,
        }),
        withScriptjs,
        withGoogleMap
      )((props) =>
        <GoogleMap
          defaultZoom={8}
          defaultCenter={{ lat: userLat, lng: userLng }}
        >
          {props.isMarkerShown && <Marker position={{ lat: userLat, lng: userLng  }} />}
        </GoogleMap>
      )


    const handleDisplay = () =>{
        if(navIs === 'map'){
            // console.log(map)
            return <div id='map-container'></div>
            // return mapsIframeOne
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
            {/* {handleDisplay()} */}
            <MyMapComponent isMarkerShown/>
        <Footer/>
        </div>
    )
}