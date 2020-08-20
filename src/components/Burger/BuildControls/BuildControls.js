import React from 'react'
import classes from './BuildControls.css'
import BuildControls from './BuildControls/BuildControl'

const controls =  [
    {label:'Salad',type:'salad'},
    {label:'Bacon',type:'bacon'},
    {label:'Cheese',type:'cheese'},
    {label:'Meat',type:'meat'}
]


const buildControls = (props) => {
     return(
         <div className={classes.BuildControls}>
              {controls.map(ctrl=> (
                  <BuildControls key={ctrl.label} label={ctrl.label} 
                  added={() =>{props.ingredientAdded(ctrl.type)}}
                  />
              ))}
         </div>
     )
}

export default buildControls
