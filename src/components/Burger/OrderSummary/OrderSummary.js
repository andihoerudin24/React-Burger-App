import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
const OrderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{textTransform:'capitalize'}}>
          {igKey} : {props.ingredients[igKey]}
        </span>
      </li>
    );
  });

  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicius burger with the following ingredients</p>
      <ul>
          {ingredientsSummary}
      </ul>
  <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
      <p>Continue to Checkout</p>
      <Button btnType="Danger" clicked={props.purchaseCanceled}>Cancel</Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>Continue</Button>
    </Aux>
  );
};

export default OrderSummary;
