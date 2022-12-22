import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getDrinksAlcool } from '../../../API/barAPI';
import { useState } from 'react';
import allergeneSort from '../../../tools/utilities';

export default function BarAlcoolList() {

    const  {id}= useParams();

    const [state,setState] = useState({
        items: [],
        DataisLoaded: false
    });
  useEffect(() => {
    
    return () => {
        getDrinksAlcool(id).then(food =>{
            setState({items:food,
                    DataisLoaded: true
                });
        }
    )};
  }, []);
  console.log(state.items);
    return (
        <div>
            <p>liste des boissons alcoolisé</p>
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
    )
}