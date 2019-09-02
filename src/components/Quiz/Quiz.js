import React, {useState} from 'react'
import './Quiz.css'

export default function Quiz(props){
    const [isRevealed, setIsRevealed] = useState(false)
    return(
        <div className='Quiz-container'>
            <div className='Quiz-question'>{props.question}</div> 
            <div className='Quiz-choice-container' onClick={()=> setIsRevealed(!isRevealed)}>
                {isRevealed ? <div className='Quiz-answer'> {props.answer}</div> : <div className='Quiz-answer'> CLICK ME</div>}
            </div>
        </div>
    )
}