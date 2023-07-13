import styles from './Description.module.css';
import React from 'react';
import logo from '../chocolaterecipe.png';

export default function RecipePhoto(){
    return(
        <img src={logo} alt="Recipe for Triple Chocolate Layer Cake" className = {styles.imageUpdates} />
    )
}