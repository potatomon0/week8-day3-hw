import React,{useState,useContext} from 'react'
import {AppContext} from '../App'
import Score from './Score'

function Student() {
    const {learner}=useContext(AppContext)
  return (
    <div>
       <h1>{learner.map((x)=>{
        return <div>
        <h3>{x.name}</h3>
        <p className="bio"><h2>BIO:</h2> {x.bio}</p>
        <Score x={x}/>
        <hr></hr>
        </div>
    })}</h1>
    </div>
  )
}

export default Student