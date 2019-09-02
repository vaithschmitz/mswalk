import React, {useState, useEffect} from 'react'
import './twentyK.css'
import Map from '../../components/Map/Map'
import Info from '../../components/Info/Info'
import Footer from '../../components/Footer/Footer'
import List from '../../components/List/List'
import Quiz from '../../components/Quiz/Quiz'


export default function OneK(){
    const [navIs, setNavIs] = useState('quiz')
    const [userLat, setUserLat] = useState()
    const [userLng, setUserLng] = useState()
    useEffect(()=>{
        const getPosition = () => {
            if (navigator.geolocation) {
                navigator.geolocation.watchPosition(showPosition) 
            }
                else {
                    console.log('error')
            }
        }
        const showPosition = (position) => {
            setUserLat(position.coords.latitude)
            setUserLng(position.coords.longitude)
        }
        getPosition()
    }, [])

    const locUpdates = () => {
        let showLoc = () => console.log(`Lat: ${userLat}, Lng:${userLng}`)
        setInterval(showLoc(), 1000)
    }
    const makeList = () => {
        let iterator = 1
        let buffer = []
        const list = [
            `And we’re off! Walk through the start line and straight ahead towards marshal point 1.`,
            `At marshal point 1, turn left along East Carriage Drive until you get to marshal point 2. You will pass the tennis courts on your right.`,
            `At marshal point 2, cross over North Carriage Drive and turn right onto the riverside walkway.`,
            `Continue along the river towards marshal point 3 and leave the park through Chelsea Gate. Turn left and cross Chelsea Bridge.`,
            `At the end of the bridge you will reach marshal point 4. Turn right, crossing at the traffic lights. Walk along Grosvenor Road, with the river on your right hand side.`,
            `At marshal point 5, turn right and cross Vauxhall Bridge to the south side of the river. Keep on the left hand side of the bridge.`,
            `On the far side of the bridge you will reach marshal point 6. Turn left and follow the Thames Path diversion signs along Albert Embankment towards Lambeth Bridge. Look out for the London Eye in the distance.`,
            `Continue straight on along the river towards Lambeth Bridge. Go through the underpass below the end of Lambeth Bridge, passing marshal point 7.`,
            `Walk straight ahead towards Westminster Bridge. Take in the fantastic view of the Houses of Parliament on the other side of the Thames. Take some photos!`,
            `At marshal point 8, walk straight on through the underpass below the end of Westminster Bridge. Head along the South Bank, past the Sea Life Centre, the London Eye and Jubilee Gardens.`,
            `Continue forward along the South Bank, beneath the Golden Jubilee footbridges and Hungerford Rail Bridge, passing the South Bank Centre on your right.`,
            `Continue straight ahead, beneath Waterloo Bridge, passing the National Theatre on your right.`,
            `Continue straight ahead, past the Oxo Tower, and walk through the underpass below Blackfriars Bridge.`,
            `Continue along the South Bank until you reach the Tate Modern gallery. Marshal point 9 is at the end of the Millennium Footbridge across the river. Head up onto the bridge and cross to the north side of the river. Take a Tate Modern selfie on the way! Use #MSWalk to share your selfies!`,
            `On the other side of the bridge, continue straight ahead up Peter’s Hill (crossing over Queen Victoria Street) and head all the way up to St Paul’s Cathedral and marshal point 10. Here you can change to do 15km by skipping to number 31.`,
            `At marshal point 10, turn right on St Paul’s Churchyard, which becomes Cannon Street.`,
            `Continue straight on Cannon street past Mansion House underground station on your right. Then cross straight over the junction with Queen Victoria Street, in the direction of Cannon Street Station.`,
            `You will pass Cannon Street Station on your right. Continue straight on until you reach the next major junction and Monument Station.`,
            `At this junction, continue straight over onto Eastcheap. The main entrance to Monument Station will be on your right. As you pass, look to your right to catch a glimpse of the Monument itself.`,
            `Continue straight on as Eastcheap becomes Great Tower Street. At the T-junction, cross over at the traffic lights and walk between Zizzi restaurant and All Hallows by the Tower Church, look out for the green spire. You’re now at marshal point 11.`,
            `Follow the pedestrianised area along the left had side of the church and the tower will be right in front of you. Bear right towards the river, then turn left and walk in front of the Tower of London towards Tower Bridge and marshal point 12.`,
            `Pass through the archway and turn left to take stairs up onto Tower Bridge. Turn left at the top of the stairs and cross straight over the bridge. For step-free access, turn left past the stairs and up St Katherine’s Way, then turn left onto the bridge approach.`,
            `Stay on the left hand side of Tower Bridge as you cross. On the far side, you will reach marshal point 13. Take the stairs or lift down to the riverside.`,
            `Once down the stairs (they are signposted ‘Engine Room’), turn left to go back under the bridge (turn right if exiting the lift!). Head west towards City Hall and back in the direction of Battersea Park.`,
            `Keeping the river on your right, you’ll pass City Hall (wave to the Mayor of London!) and HMS Belfast.`,
            `Continue past Hay’s Galleria on your left, heading towards London Bridge under the arches of Hays Galleria, and you’ll reach marshal point 14. Turn left at the blue sign for the ‘Accessible route for London Bridge’ and follow the alley to emerge on Tooley Street.`,
            `Turn right onto Tooley Street and head through the tunnel that takes you under London Bridge. Continue on as the road bears left. Southwark Cathedral will be on your left and here is marshal point 15. Take the first (sharp) right into Cathedral Street.`,
            `Continue walking towards the Golden Hinde Ship. Turn left immediately after Caffe Nero, into Pickfords Lane. Continue onto Clink Street, home to one of the oldest prisons in the capital.`,
            `At the end of Clink Street, turn right at The Anchor and walk back towards the river, bearing left onto Bankside. Continue to Southwark Bridge, bearing left before going through the tunnel under the bridge towards Zizzi. Continue walking along the riverside past the restaurants and the Globe Theatre. You’re now back in front of the Tate Modern and the Millennium Bridge at marshal point 16.`,
            `Cross the bridge for the second time and continue forward all the way up to St Paul’s Cathedral. This time around, turn left at marshal point 17.`,
            `Walk away from St Paul’s, down Ludgate Hill, passing City Thameslink Station on your left. Cross the road at the crossing and the turn left at the junction with New Bridge St (marshal point 18).`,
            `Walk towards the river and Blackfriars Bridge and then on to Victoria Embankment. Marshal point 19 is here.`,
            `Continue along the north bank of the Thames, past Temple Station on your right and the London RNLI Station on your left.`,
            `Continue past Waterloo Bridge and Embankment Station, passing under the Golden Jubilee Footbridges and Hungerford Rail Bridge. You’re heading towards Big Ben and the Houses of Parliament.`,
            `As you approach Westminster Bridge and marshal point 20, continue straight ahead and cross over at the traffic lights next to the statue Boudicca.`,
            `Turn right (away from the river), then left into Parliament Square. Walk alongside the Houses of Parliament onto Abingdon Street and then Millbank.`,
            `When you reach Lambeth Bridge, cross straight over at the zebra crossing and keep walking along the river towards Vauxhall Bridge.`,
            `As you approach Vauxhall Bridge, stay on the road, bearing a little to the right away from the river. At the junction, cross straight over at the traffic lights, passing marshal point 21. Continue straight ahead along Grosvenor Road and back towards Chelsea Bridge.`,
            `At marshal point 22, head back over Chelsea Bridge on the left hand side.`,
            `On the far side of Chelsea Bridge, cross at the marked crossing and enter the park through the Chelsea Gate. Bear right and join the path alongside the river.`,
            `Continue along the river, passing the famous Peace Pagoda on your left. Look for the arrow to show you when to turn left and join the North Carriage Drive.`,
            `When you reach the crossroads at marshal point 23, turn hard left onto Maple Leaf Walk. You’re on the home stretch!`,
            `Turn left onto Central Avenue and continue to the Finish Line at the Bandstand. Well done!` ]
        
            for(let i = 0; i< list.length; i++){
                buffer.push(<List number={iterator} text={list[i]}/>)
                iterator++
            }
            return buffer
    }

    const handleDisplay = () =>{
     
        if(navIs === 'map'){

            return <Map lat={userLat} lng={userLng} isMarkerShown/>
        }
        if(navIs === 'list'){
            return(
                <div id='oneK-list'>
                    {makeList()}
                </div>
            )
        }
        if(navIs === 'quiz'){
            return(
                <div>
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
            {locUpdates()}
        <Footer setNav={setNavIs}/>
        </div>
    )
}