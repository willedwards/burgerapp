
import React from 'react';
import Aux from '../../../hoc/Aux';
import Button from '../../UI/Button/Button';

const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
                                .map(igKey => {
                                    return (
                                        <li key={igKey}>
                                            <span style={{textTransform: 'capitalize'}}>{igKey} : {props.ingredients[igKey]}</span>
                                        </li> 
                                        );
                                });
    //want:
    // <li>Salad : 1</li>
   

    return (
        <Aux>
            <h3>Your order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <h3>Total Price {props.totalPrice.toFixed(2)} </h3>
            <p>Continue to Checkout ?</p>
            <Button btnType="Danger" clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType="Success" clicked={props.purchaseContinued} >Continue</Button>
            
        </Aux>
    );
};

export default OrderSummary;