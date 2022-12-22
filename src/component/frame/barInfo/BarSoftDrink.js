import React from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getSoftDrinks } from '../../../API/barAPI';
import allergeneSort from '../../../tools/utilities';
const BarSoftDrink = () => {

    const {id}=useParams();
    const [state ,setState]=useState({
        items:[],
        dataIsLoaded:false
    });

    

    useEffect(() => {
        return () => {
            getSoftDrinks(id).then((bar) => {
                setState({
                    items:  bar,
                    DataisLoaded: true
                });
            } )
        };
    }, []);
   console.log(state.items);
    return (
        <div>
            <p>liste des softs</p>
            <br></br>
            {
                  state.items.map((item) => ( 
                    <ol key = { item.ID_PRODUIT } >
                        Nom_produit: { item.NOM_PRODUIT },  
                        prix: { item.PRIX }, 
                        volume: { item.VOLUME },
                        arllèrgène: {allergeneSort(item.LIBALLERGENE)}
                    </ol>
                        ))
            }
        </div>
    );
}

export default BarSoftDrink;
