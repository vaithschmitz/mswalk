import React from 'react'
import './List.css'

export default function List(props){
    return(
        <div class='List-container'>
            <div class='List-number'>
            {props.number}
            </div>
            <div class='List-text'>{props.text}</div>
            
        </div>
    )
}