import React from 'react'
import classes from './Burger.css'
import BurgerIngredient from './Burgeringredients/BurgerIngredient'

const burger =  props => {
    const transfromedingredients= Object.keys(props.ingredients).map(igKey =>{
         return [...Array(props.ingredients[igKey])].map((_,i)=>{
           return <BurgerIngredient key={igKey + i} type={igKey} />
         })
    })
    console.log(transfromedingredients)
     return(
       <div className={classes.Burger}>
           <BurgerIngredient type="bread-top"/>
              {transfromedingredients}
           <BurgerIngredient type="bread-bottom"/>
       </div>
     )
}

export default burger