import React from 'react'

export const Cards = (props) => {
  return (
    <div className={props.cls}>
        <h1>{props.title}</h1>
        <img src={props.image} alt="" />
        <p>{props.body}</p>
    </div>
  )
}
