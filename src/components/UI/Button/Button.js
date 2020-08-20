import React from 'react'
import clasess from './Button.css'
const Button = (props) => {
    return(
        <button onClick={props.clicked} className={[clasess.Button,clasess[props.btnType]].join(' ')}>
            {props.children}
        </button>
    )
}

export default Button
