import React, { Component } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getBarById } from '../../../API/barAPI';
import { useState } from 'react';
import BarFoodList from './barFoodList';
import BarSelectorProduct from './BarSelectorProduct';


//renvoie le header du bar et renvoie le selector pour choisir le menu à voir
const BarProductList = () => {
    const {id} = useParams();

    const [state,setState] = useState(
         {
            items: [],
            DataisLoaded: false
        }
    )

       

    useEffect(() => {
        return () => {
            getBarById(id).then((bar) => {
                setState({
                    items:  bar,
                    DataisLoaded: true
                });
            } )
        };
    }, []);
   console.log(state.items);
    //penser a adapter avec les tout les objets du bar
    return (
        <>
            <div>
                {
                    state.items.map((item) => ( 
                    <ol key = { item.ID_BAR } >
                        Nom_bar: { item.NOMBAR }, 
                        photo_bar: { item.PHOTOBAR }, 
                        ouverture: { item.OUVERTURE },
                        fermeture: {item.FERMETURE},
                        adresse: { item.ADRESSE},                    
                    </ol>
                        ))
                    }
                    <BarSelectorProduct/>
            </div>
        
            {
                //retourner le selector product qui permet d'afficher les menu
            }
        </>
    );
}

export default BarProductList;
