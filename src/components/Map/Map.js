/* global google */
import React, {useState, useEffect, useGlobal} from 'reactn'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"

let REACT_APP_MAPSKEY = process.env.REACT_APP_MAPSKEY



const MyDirectionsRenderer = (props) =>  {
    const [directions, setDirections] = useState(null);
    const { origin, destination, travelMode } = props;
    const [distance, setDistance] = useGlobal('distance')
    let myWaypoints
    
    if(distance === 'oneK'){
        myWaypoints = [
            {location: new google.maps.LatLng(51.480077, -0.154557), stopover: true},
            {location: new google.maps.LatLng(51.478175, -0.157766), stopover: true},
            {location: new google.maps.LatLng(51.478936, -0.160094), stopover: true},
        ]
    }
    else if(distance === 'sixK'){
        myWaypoints = [
            {location: new google.maps.LatLng(51.480476, -0.152779), stopover: true},
            {location: new google.maps.LatLng(51.478357, -0.149744), stopover: true},
            {location: new google.maps.LatLng(51.478557, -0.150345), stopover: true},
            {location: new google.maps.LatLng(51.476666, -0.156847), stopover: true},
            {location: new google.maps.LatLng(51.476332, -0.156654), stopover: true},
            {location: new google.maps.LatLng(51.475630, -0.162533), stopover: true},
            {location: new google.maps.LatLng(51.479579, -0.165473), stopover: true},
            {location: new google.maps.LatLng(51.483521, -0.167329), stopover: true},
            {location: new google.maps.LatLng(51.483488, -0.166031), stopover: true},
            {location: new google.maps.LatLng(51.484303, -0.163799), stopover: true},
            {location: new google.maps.LatLng(51.489626, -0.155797), stopover: true},
            {location: new google.maps.LatLng(51.483105, -0.152299), stopover: true},
            {location: new google.maps.LatLng(51.481735, -0.162577), stopover: true},
            {location: new google.maps.LatLng(51.481080, -0.162330), stopover: true},
            {location: new google.maps.LatLng(51.479851, -0.164615), stopover: true},
            {location: new google.maps.LatLng(51.478929, -0.160077), stopover: true},
        ]
    }

    else if(distance === 'tenK'){
        myWaypoints = [
            {location: new google.maps.LatLng(51.480473, -0.152783), stopover: true},
            {location: new google.maps.LatLng(51.482693, -0.155342), stopover: true},
            {location: new google.maps.LatLng(51.482994, -0.149520), stopover: true},
            {location: new google.maps.LatLng(51.485820, -0.149981), stopover: true},
            {location: new google.maps.LatLng(51.488773, -0.129564), stopover: true},
            {location: new google.maps.LatLng(51.486922, -0.125294), stopover: true},
            {location: new google.maps.LatLng(51.494357, -0.121314), stopover: true},
            {location: new google.maps.LatLng(51.500829, -0.119994), stopover: true},
            {location: new google.maps.LatLng(51.494438, -0.121268), stopover: true},
            {location: new google.maps.LatLng(51.494692, -0.125055), stopover: true},
            {location: new google.maps.LatLng(51.488562, -0.129424), stopover: true},
            {location: new google.maps.LatLng(51.488562, -0.129424), stopover: true},
            {location: new google.maps.LatLng(51.485798, -0.149994), stopover: true},
            {location: new google.maps.LatLng(51.482237, -0.158678), stopover: true},
            {location: new google.maps.LatLng(51.479845, -0.164579), stopover: true},
      
        ]
    }
  
    useEffect(() => {
      const directionsService = new google.maps.DirectionsService();
      console.log(distance)

      directionsService.route(
        {
          origin: new google.maps.LatLng(origin.lat, origin.lng),
          destination: new google.maps.LatLng(destination.lat, destination.lng),
          travelMode: travelMode,
          waypoints: myWaypoints
      
        },
        (result, status) => {
          if (status === google.maps.DirectionsStatus.OK) {
            setDirections(result);
          } else {
            console.error(`error fetching directions ${result}`);
          }
        }
      );
    }, [directions]);
  
    return (
      <React.Fragment>
        {directions && <DirectionsRenderer directions={directions} />}
      </React.Fragment>
    );
  }

const Map = compose(
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
    defaultZoom={14}
    defaultCenter={{ lat: props.lat, lng: props.lng }}
    
>
    {props.isMarkerShown && <Marker position={{ lat: props.lat, lng: props.lng  }} />}
    <MyDirectionsRenderer
      origin={{lat: 51.479329, lng: -0.158173}}
      destination={{lat: 51.479329, lng: -0.158173}}
      travelMode={google.maps.TravelMode.WALKING}
    />
</GoogleMap>
)

export default Map
