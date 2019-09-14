import React, { useGlobal } from 'reactn'
import Navigation from '../../components/Navigation/Navigation'
import Info from '../../components/Info/Info'
import List from '../../components/List/List'
import Map from '../../components/Map/Map'
import Quiz from '../../components/Quiz/Quiz'
import '../routeStyles.css'


export default function OneK(){
    const [nav, setNav] = useGlobal('nav')
    const [userLat, setUserLat] = useGlobal('userLat')
    const [userLng, setUserLng] = useGlobal('userLng')

    const makeList = () => {
        let iterator = 1
        let buffer = []
        const list = [
            `And we’re off! Walk through the start line and straight ahead towards marshal point 1.`,
            `At marshal point 1, turn left along East Carriage Drive until you get to marshal point 2. You will pass the tennis courts on your right.`,
            `At marshal point 2, cross over North Carriage Drive and turn right onto the riverside walkway.`,
            `Continue along the river towards marshal point 3 and then follow the river under Chelsea Bridge along the Thames Path.`,
            `When you come out from under the bridge you will see a bright and colourful sign saying ‘Power’ which will take you under another cover walkway. Don’t get dazzled by all the pretty lights and table tennis tables, keep on walking!`,
            `Turn right onto Riverside Walk and continue with Battersea Power Station on your left. `,
            <Quiz question={`How high do you think the famous Battersea Power Station chimneys are?`} answer={`103 metres`} />,
            <Quiz question={`Get involved!`} answer={`You might notice a big orange statue as you go along. Why not take a picture with it and share it on social media with #mswalk.`} />,
            `Continue along Pump House Lane and cross over the pedestrian crossing so that you remain on the footpath.`,
            `Head down to the traffic lights where you will get to marshal point 4. Continue around until you get to Battersea Park Road where you will turn right.`,
            `Follow along Battersea Park Road past Battersea Dog and Cats Home. We know it is hard to walk past the kittens and puppies, but try your best! Just ahead you will see marshal point 5.`,
            <Quiz question={`Talking of lots of dogs, which 1996 Disney film was partly filmed in Battersea Park?`} answer={`101 Dalmatians`}/>,
            `After marshal point 5 cross over Prince of Wales drive and continue along Battersea Park Road.`,
            `Continue past Battersea Park Train Station and cross over Queenstown Road.`,
            `Continue along Battersea Park Road and safely cross over the next three roads.`,
            `When you reach Alexandra Avenue turn right and continue down towards Battersea Park and safely cross over Warriner Gardens.`,
            `Turn right when you reach Prince of Wales Drive and staying on the right hand side of the road continue over the next two roads until you get to the roundabout at Queen’s Circus. `,
            `Follow the roundabout round to the left, crossing Carriage Drive South before turning left on Queenstown Road`,
            `Continue along Queenstown Road until you get to the Chelsea Gate entrance of Battersea Park and marshal point 6 (just before Chelsea Bridge) and turn left. If everything has gone to plan you should now be back in Battersea Park.`,
            `When in the park bear right and join the path alongside the river.`,
            `Continue along the river, passing the famous Peace Pagoda on your left. Look for the arrow to show you when to turn left and join North Carriage Drive.`,
            <Quiz question={`Did you know?`} answer={`The London Peace Pagoda in Battersea Park is one of 2 in the UK, the other being at Milton Keynes. It was offered to the people of London by the Nipponzan Myohoji Buddhist Order as part of the 1984 Peace Year.`}/>,
            `When you reach the crossroads at marshal point 7, turn hard left onto Maple Leaf Walk. You’re on the home stretch.`,
            `Turn left onto Central Avenue and continue to the finish line at the bandstand.`,
            <Quiz question={`Well done, you did it! You are now part of a special group of people who have walked, rolled or strolled to stop MS! How many people have taken part in MS Walk London since it started in 2013 though?`} answer={`3900`}/>
        ]
        
        for(let i = 0; i< list.length; i++){               
            if(typeof(list[i]) === 'string'){
                buffer.push(<List number={iterator} text={list[i]}/>)
            }
            else if(typeof(list[i] != 'string')){
                buffer.push(list[i])
            }
            iterator++
        }
        return buffer
    }

    const handleDisplay = () =>{
     
        if(nav === 'map'){
            return <Map />
        }

        if(nav === 'list'){
            return(
                <div id='oneK-list'>
                    {makeList()}
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