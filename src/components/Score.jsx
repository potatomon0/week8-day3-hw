import React,{useContext} from 'react'

function Score(props) {
  return (
    <div>{props.x.scores.map((score)=>{
        return <div>
            <div className="date">Date: {score.date}</div>
            <div className="score">Score: {score.score}</div>
            </div>

    })}</div>
  )
}

export default Score