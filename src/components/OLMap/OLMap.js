import React, {useState, useEffect, useGlobal} from 'reactn'
import {Map, View, Feature} from 'ol';
import {transform, fromLonLat} from 'ol/proj.js';
import {Point, LineString} from 'ol/geom.js'
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
          center: transform([userLng, userLat], 'EPSG:4326', 'EPSG:3857'),
          zoom: 15
        })
      });

    let userPosition = new Feature({
        geometry: new Point(
            fromLonLat([userLng, userLat])
        ),  
    });

    let route = new Feature();
    let coordinates = [[-0.154557, 51.480077], [-0.157766, 51.478175], [-0.160094, 51.478936]];
    let geometry = new LineString(coordinates);
    geometry.transform('EPSG:4326', 'EPSG:3857'); //Transform to your map projection
    route.setGeometry(geometry);


    let vectorSource = new Vector({
        features: [userPosition, route]
    });

    let markerVectorLayer = new VectorLayer({
        source: vectorSource,
      });

      function addVectorLayer(){
        map.addLayer(markerVectorLayer);
      }
      
    return(
        <div id='map'> </div>
    )
}

// origin -0.158173, 51.479329
// {location: new google.maps.LatLng(51.480077, -0.154557), stopover: true},
// {location: new google.maps.LatLng(51.478175, -0.157766), stopover: true},
// {location: new google.maps.LatLng(51.478936, -0.160094), stopover: true},
// 51.479329, -0.158173
// 51.480077, -0.154557
// 51.478175, -0.157766
// 51.478936, -0.160094

