import React from 'react'
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { getFoodList } from '../../../API/barAPI';
import { useState } from 'react';
import allergeneSort from '../../../tools/utilities';
export default function BarFoodList() {

    const  {id}= useParams();

    const [state,setState] = useState({
        items: [],
        DataisLoaded: false
    });
  useEffect(() => {
    
    return () => {
        getFoodList(id).then(food =>{
            setState({items:food,
                    DataisLoaded: true
                });
        }
    )};
  }, []);
  console.log(state.items);
    return (
        <div>
            <p>liste de la nourriture</p>
            <br></br>
            {
                  state.items.map((item) => ( 
                    <ol key = { item.ID_PRODUIT } >
                        Nom_produit: { item.NOM_PRODUIT },  
                        prix: { item.PRIX }, 
                        poids: { item.POIDS},
                        arllèrgène: {allergeneSort(item.LIBALLERGENE)}
                    </ol>
                        ))
            }
        </div>
    )
}