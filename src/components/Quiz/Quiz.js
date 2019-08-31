import React from 'react'
import './Quiz.css'

export default function Quiz(props){
    const checkAnswer = (e) => {
        if(e.target.textContent === props.correct){
            e.target.classList.add('correct')
        }
        else{
            e.target.classList.add('false')
        }
    } 
    return(
        <div className='Quiz-container'>
            <div className='Quiz-question'>{props.question}</div> 
            <div className='Quiz-choice-container'>
                <div className='Quiz-choice' onClick={(e)=> checkAnswer(e)}>{props.choice1}</div>
                <div className='Quiz-choice' onClick={(e)=> checkAnswer(e)}>{props.choice2}</div>
                <div className='Quiz-choice' onClick={(e)=> checkAnswer(e)}>{props.choice3}</div>
            </div>
        </div>
    )
}