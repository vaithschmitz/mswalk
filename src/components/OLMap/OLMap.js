import React, {useState, useEffect, useGlobal} from 'reactn'
import {Map, View, Feature} from 'ol';
import {transform, fromLonLat} from 'ol/proj.js';
import {Point} from 'ol/geom.js'
import TileLayer from 'ol/layer/Tile';
import VectorLayer from 'ol/layer/Vector';
import Vector from 'ol/source/Vector'
import OSM from 'ol/source/OSM';
import './OLMap.css'

export default function OLMap(){

    const [userLat, setUserLat] = useGlobal('userLat')
    const [userLng, setUserLng] = useGlobal('userLng')


    const map = new Map({
        target: 'map',
        layers: [
          new TileLayer({
            source: new OSM()
          })
        ],
        view: new View({
          center: transform([-0.158173, 51.4793290], 'EPSG:4326', 'EPSG:3857'),
          zoom: 15
        })
      });

    let userPosition = new Feature({
        geometry: new Point(
            fromLonLat([userLng, userLat])
        ),  
    });

    let vectorSource = new Vector({
        features: [userPosition]
    });

    let markerVectorLayer = new VectorLayer({
        source: vectorSource,
      });
    map.addLayer(markerVectorLayer);
      
    return(
        <div id='map'> </div>
    )
}

// origin -0.158173, 51.479329
// {location: new google.maps.LatLng(51.480077, -0.154557), stopover: true},
// {location: new google.maps.LatLng(51.478175, -0.157766), stopover: true},
// {location: new google.maps.LatLng(51.478936, -0.160094), stopover: true},