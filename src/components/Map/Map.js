import React, {useState, useEffect, useGlobal} from 'reactn'

export default function Map(props){
  const [userLat, setUserLat] = useGlobal('userLat')
  const [userLng, setUserLng] = useGlobal('userLng')

      let initState = {
          app_id: 'yEAVH1quKFcDPf4pYsVM',
          app_code: 'B0W9xVtyKjyYUpBANxGk0w',
          center: {
              lat: userLat,
              lng: userLng,
          },

      }
      

  let map 
  let platform


  useEffect((props)=>{
    console.log(userLat)
      platform = new window.H.service.Platform(initState);

      var layer = platform.createDefaultLayers();
      var container = document.getElementById('here-map');

      map = new window.H.Map(container, layer.normal.map, {
          center: {lat: userLat, lng: userLng},
          zoom: 15,
        })

        // Create the parameters for the routing request:
  var routingParameters = {
    'mode': 'fastest;pedestrian',

    'waypoint0': 'geo!51.479329,-0.158173',
    'waypoint1': 'geo!51.480077,-0.154557',
    'waypoint2': 'geo!51.478946,-0.155424',
    'waypoint3': 'geo!51.478175,-0.157766',
    'waypoint4': 'geo!51.478936,-0.160094',
    'waypoint5': 'geo!51.479329,-0.158173',


    'representation': 'display'
  };
  
  // Define a callback function to process the routing response:
  var onResult = function(result) {
    var route,
    routeShape,
    startPoint,
    endPoint,
    linestring;
    if(result.response.route) {
    // Pick the first route from the response:
    route = result.response.route[0];
    // Pick the route's shape:
    routeShape = route.shape;
  
    // Create a linestring to use as a point source for the route line
    linestring = new window.H.geo.LineString();
  
    // Push all the points in the shape into the linestring:
    routeShape.forEach(function(point) {
    var parts = point.split(',');
    linestring.pushLatLngAlt(parts[0], parts[1]);
    });
  
    // Retrieve the mapped positions of the requested waypoints:
    startPoint = route.waypoint[0].mappedPosition;
    endPoint = route.waypoint[5].mappedPosition;
  
    // Create a polyline to display the route:
    var routeLine = new window.H.map.Polyline(linestring, {
    style: { strokeColor: '#D14900', lineWidth: 3 }
    });
  

    map.addObjects([routeLine]);
   
    }
  };
  
  // Get an instance of the routing service:
  var router = platform.getRoutingService();
  
  // Call calculateRoute() with the routing parameters,
  // the callback and an error callback function (called if a
  // communication error occurs):
  router.calculateRoute(routingParameters, onResult,
    function(error) {
    alert(error.message);
    });

      var events = new window.H.mapevents.MapEvents(map);
      var behavior = new window.H.mapevents.Behavior(events);
      var ui = new window.H.ui.UI.createDefault(map, layer)

      
  }, []) 

  let userPositionMarker = new window.H.map.Marker({
    lat: userLat,
    lng: userLng
    });


  map.addObjects([userPositionMarker]);

    return (
        <div id="here-map" style={{width: '100%', height: '100%', background: 'grey' }} />
    );
}

