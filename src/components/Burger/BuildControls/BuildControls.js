import React from 'react';
import classes from './BuildControls.css';
import BuildControl from './BuildControl/BuildControl';
 
const controls =[
    {label: 'Salad',    type:'salad'},  
    {label: 'Cheese',   type:'cheese'},  
    {label: 'Bacon',    type:'bacon'},  
    {label: 'Meat',     type:'meat'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
        <p>Current Price: <b>{props.price.toFixed(2)}</b></p>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.onAddIngredient(ctrl.type)}
            removed={() => props.onRemoveIngredient(ctrl.type)}
            disabled={props.disabled[ctrl.type]}
            />
        ))}
        <button className={classes.OrderButton}
                disabled={!props.purchasable}
                onClick={props.ordered}
        >Order Now</button>
    </div>
);

export default buildControls;