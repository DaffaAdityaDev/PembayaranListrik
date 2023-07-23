import React from 'react'
import './SimpleCard.css'

function SimpleCard({ title, value, color }) {
  return (
    <div className='simplecard__container' style={{backgroundColor: color}}>
        <div className='simplecard__container--title'>
            <p>{title}</p>
        </div>
        <div className='simplecard__container--value'>
            <p>{value}</p>
        </div>
    </div>
  )
}

export default SimpleCard