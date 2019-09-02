import React from 'react'
import './Info.css'

export default function Info(){
    return(
        <div id='Info-container'>
            <a id='Info-Splash' href='/'>SHOW ALL DISTANCES</a>
            <br/><br/>
            <div id='Info-basic'>
            First aiders will be available at the
            start/finish area in Battersea Park.
            In the event of a minor incident on
            the route, please seek assistance
            from a marshal or call event control.
            It may be quicker and easier to
            attend A&E yourself rather than
            returning to the finish area.
            The nearest Accident & Emergency
            (A&E) is St Thomas’ Hospital,
            Westminster Bridge Road,
            London SE1 7EH.
            In an emergency, call 999 first!
            Toilets marked on our maps may
            charge for use and may not be
            fully accessible. We have provided
            accessible facilities for MS Walk
            at the start/finish area in
            Battersea Park.
            </div>


            <div id='Info-important'>

            Should you have to drop
            out early for any reason, you
            must let a marshal know or
            call event control. We don’t
            want to have to call you later
            to check you aren’t lost!
            <br/>
            <br/>
            MS Society event control:
            <br/>
            <a href='tel:+447851 963431'>07851 963431</a>
            </div>
        </div>
    )
}