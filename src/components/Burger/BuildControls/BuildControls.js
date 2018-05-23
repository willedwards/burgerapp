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
    <div className={classes.buildControls}>
        {controls.map(ctrl => (
            <BuildControl 
            key={ctrl.label} 
            label={ctrl.label} 
            added={() => props.onAddIngredient(ctrl.type)}
            
            />
        ))}
    </div>
);

export default buildControls;