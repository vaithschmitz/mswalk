import React from 'react'
import { compose, withProps } from "recompose"
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps"

let REACT_APP_MAPSKEY = process.env.REACT_APP_MAPSKEY

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
</GoogleMap>
)

export default Map
