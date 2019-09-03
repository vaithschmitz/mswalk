/* global google */
import React, {useState, useEffect} from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker, DirectionsRenderer } from "react-google-maps"

let REACT_APP_MAPSKEY = process.env.REACT_APP_MAPSKEY

function MyDirectionsRenderer(props) {
    const [directions, setDirections] = useState(null);
    const { origin, destination, travelMode } = props;
  
    useEffect(() => {
      const directionsService = new google.maps.DirectionsService();
      directionsService.route(
        {
          origin: new google.maps.LatLng(origin.lat, origin.lng),
          destination: new google.maps.LatLng(destination.lat, destination.lng),
          travelMode: travelMode,
          waypoints: [
              {location: new google.maps.LatLng(51.480077, -0.154557), stopover: true},
              {location: new google.maps.LatLng(51.478175, -0.157766), stopover: true},
              {location: new google.maps.LatLng(51.478936, -0.160094), stopover: true},
        ]
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
