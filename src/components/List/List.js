import React from 'react'
import './List.css'

export default function List(props){
    return(
        <div className='List-container'>
            <div className='List-number'>
            {props.number}
            </div>
            <div className='List-text'>{props.text}</div>
            
        </div>
    )
}