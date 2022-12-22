import React from 'react';
import { useState } from 'react';
import BarAlcoolList from './barAlcoolList';
import BarFoodList from './barFoodList';
import BarSoftDrink from './BarSoftDrink';
const BarSelectorProduct = () => {
    
    let [displayList, setDisplayList] = useState( 0);

  /*  const toggleDisplayList = () => {
        setDisplayList(displayList++);
        console.log(displayList);
        
    }*/

    const barSoft = () => {
        setDisplayList(displayList = 1);
        console.log(displayList);
    }

    const barAlcool = () => {
        setDisplayList(displayList = 2);
        console.log(displayList);
    }

    const barNourriture = () => {
        setDisplayList(displayList = 3);
        console.log(displayList);
    }

    const barBoisson = () => {
        setDisplayList(displayList = 4);
        console.log(displayList);
    }

    const barAll =() =>{
        setDisplayList(displayList = 0);
        console.log(displayList);
    }
    
    if(displayList === 0){
        return(
            <div>
                
                <button onClick={barSoft}>Soft</button>
                <button onClick={barAlcool}>Alcool</button>
                <button onClick={barNourriture}>Nourriture</button>
                <button onClick={barBoisson}>Boisson</button>
                On affiche le composant avec tout les produits
                <BarAlcoolList/>
                <BarSoftDrink/>
                <BarFoodList/>
            </div>
        )
    }
    if(displayList === 1){
        return(
            <div>
                <button onClick={barAll}>Tous les produits</button>
                <button onClick={barAlcool}>Alcool</button>
                <button onClick={barNourriture}>Nourriture</button>
                <button onClick={barBoisson}>Boisson</button>
                On affiche le composant avec les softs
                <BarSoftDrink/>
            </div>
        )
    }
    if(displayList === 2){
        return(
            <div>
                <button onClick={barAll}>Tous les produits</button>
                <button onClick={barSoft}>Soft</button>
                <button onClick={barNourriture}>Nourriture</button>
                <button onClick={barBoisson}>Boisson</button>
                On affiche le composant avec les alcools
                <BarAlcoolList/>
            </div>
        )
    }
    if(displayList === 3){
        return(
            <div>
                <button onClick={barAll}>Tous les produits</button>
                <button onClick={barSoft}>Soft</button>
                <button onClick={barAlcool}>Alcool</button>
                <button onClick={barBoisson}>Boisson</button>
                On affiche le composant avec les nourritures
                <BarFoodList/>
            </div>
        )
    }
    if(displayList === 4){
        return(
            <div>
                <button onClick={barAll}>Tous les produits</button>
                <button onClick={barSoft}>Soft</button>
                <button onClick={barAlcool}>Alcool</button>
                <button onClick={barNourriture}>Nourriture</button>
                //on affiche le composant avec les boissons
                <BarAlcoolList/>
                <BarSoftDrink/>
            </div>
        )
        
}
}
export default BarSelectorProduct;
