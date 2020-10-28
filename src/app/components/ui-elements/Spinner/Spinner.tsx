import React from 'react'
import './Spinner.styles.scss'

export default function Spinner() {
  return (
    <div className='loader-container'>
      <div className="lds-default"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
    </div>
  )
}

