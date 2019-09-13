import React, {useState, useEffect, useGlobal} from 'reactn'
import '../routeStyles.css'
import Map from '../../components/Map/Map'
import Info from '../../components/Info/Info'
import Navigation from '../../components/Navigation/Navigation'
import List from '../../components/List/List'
import Quiz from '../../components/Quiz/Quiz'


export default function OneK(){
    const [nav, setNav] = useState('nav')
    const [userLat, setUserLat] = useGlobal('userLat')
    const [userLng, setUserLng] = useGlobal('userLng')
   
    const makeList = () => {
        let iterator = 1
        let buffer = []
        const list = [
            `And we’re off! Walk through the start line and straight ahead towards marshal point 1.`,
            `At marshal point 1, turn left along East Carriage Drive until you get to marshal point 2. You will pass the tennis courts on your right.`,
            `At marshal point 2, cross over North Carriage Drive and go straight ahead onto the riverside walkway.`,
            `Continue along the river towards marshal point 3 and leave the park through Chelsea Gate. Turn left and cross Chelsea Bridge.`,
            <Quiz question={`How many bridges cross the entirety of the River Thames?`}/>,
            `At the end of the bridge you will reach marshal point 4. Turn right, crossing at the traffic lights. Walk along Grosvenor Road, with the river on your right hand side.`,
            `At marshal point 5, turn right and cross Vauxhall Bridge to the south side of the river. Cross the road and keep on the left hand side of the bridge.`,
            `On the far side of the bridge you will reach marshal point 6. Turn left and follow the Thames Path diversion signs along Albert Embankment towards Lambeth Bridge. Look out for the London Eye in the distance.`,
            `Continue straight on along the river towards Lambeth Bridge. Go through the underpass below the end of Lambeth Bridge, passing marshal point 7.`,
            `Walk straight ahead towards Westminster Bridge. Take in the fantastic view of the Houses of Parliament on the other side of the Thames. Don’t forget to pose for a photo here. Use #MSWalk to share your selfies! `,
            <Quiz question={`The actual name of the Houses of Parliament is the Palace of Westminster, but when were the current Houses of Parliament completed?`}/>,
            `When you reach marshal point 8 at the foot of Westminster Bridge, you’ve made it to the halfway point – well done!`,
            `Time to head back to Battersea Park! Turn around and go back the way you came towards Lambeth Bridge.`,
            `At marshal point 9, turn right onto Lambeth Bridge and cross to the north side of the river.`,
            `On the other side of Lambeth Bridge, turn left (using the zebra crossing) and walk along Millbank towards Vauxhall Bridge. The river will be on your left. Stay on the river side of the road. You will pass Millbank Tower and the Tate Britain art gallery on your right.`,
            `As you approach Vauxhall Bridge, stay on the road, bearing a little to the right away from the river. At the junction, cross straight over at the traffic lights, passing our marshal here for the second time – say hello! Continue straight ahead along Grosvenor Road and back towards Chelsea Bridge.`,
            `At marshal point 10, head back over Chelsea Bridge.`,
            `On the far side of Chelsea Bridge, cross at the marked crossing and enter the park through the Chelsea Gate. Bear right and join the path alongside the river.`,
            `Continue along the river, passing the famous Peace Pagoda on your left. Look for the arrow to show you when to turn left and join the North Carriage Drive. Did you know? The London Peace Pagoda in Battersea Park is one of two in the UK, the other being in Milton Keynes. It was offered to the people of London by the Nipponzan Myohoji Buddhist Order as part of the 1984 Peace Year.`,
            `When you reach the crossroads at marshal point 11, turn hard left onto Maple Leaf Walk. You’re on the home stretch!`,
            `Turn left onto Central Avenue and continue to the Finish Line at the Bandstand.`,
            `Now time to grab your medal and celebrate!`,
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
            return <Map lat={userLat} lng={userLng} isMarkerShown/>
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