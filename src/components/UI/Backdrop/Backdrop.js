import React from 'react'
import clasess from './Backdrop.css'
const Backdrop = (props) => {
    return(
        props.show ? <div className={clasess.Backdrop} onClick={props.clicked}></div> : null
    )
}


export default Backdrop
